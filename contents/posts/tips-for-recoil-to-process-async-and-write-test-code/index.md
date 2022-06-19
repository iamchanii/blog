---
title: "Recoil 비동기 처리 + 테스트 코드 작성 방법"
---

요즘 Recoil을 쓰고 있다. 간단하게 사용 후기를 남기자면, **요거 꽤 야무지다.**

그동안 상태 관리가 필요하다고 판단이 되면 주로 리덕스를 사용해왔다. 특유의 복잡함이나 코드 양의 증가하는 이슈를 여러 라이브러리의 힘을 빌려 외면하고 싶어도 비동기 처리를 위해 미들웨어를 도입하는 순간 외면했던 문제들이 다시 수면 위로 떠오른다.

Recoil은 API도 쉽고, 비동기 처리도 정말 간단하게 구현할 수 있고, 비동기 요청을 Suspense를 사용해서 로딩 상태를 표시할 수 있는 것도 좋았다.

이번 포스팅에서는 최근에 Recoil을 사용하면서 얻은 경험을 바탕으로 비동기를 처리하는 팁과 테스트 코드를 작성하는 방법에 대해서 정리하려고 한다.

---

### **비동기 처리하기**

Recoil의 selector를 사용하면 비동기 요청을 쉽게 처리할 수 있다.

```
const usersSelector = selector({
  key: 'usersSelector',
  get: async () => {
    const response = await fetch('/api/users');
    return await response.json();
  },
});
```

이제 usersSelector를 useRecoilValue나 useRecoilValueLoadable 등 값을 가져올 수 있는 훅을 사용하면 컴포넌트에서 비동기 요청의 결과값을 사용할 수 있다.

```
const Component: FC = () => {
  const users = useRecoilValue(usersSelector);
  return <div>Count of users: {users.length}</div>;
};
```

이러한 구현을 바탕으로, **새로고침** 기능을 구현하고 싶었다. 하지만 위 예시의 usersSelector는 get 메소드를 다시 호출할 수 있는 방법이 없다. 해당 메소드에서 다른 selector나 atom를 구독하고 있는게 없기 때문이다.

useEffect를 사용할 때 두번째 deps 인자로 빈 배열\[\]을 전달한 상황과 비슷하다. 즉, **새로고침을 수동으로 하기 위해서는 의도적으로 다른 상태를 구독**하도록 만들어야 한다.

usersSelector 내에서 사용하기 위한 atom 상태를 만들고, usersSelector 내에서 get 함수를 통해 값을 읽는다(=구독한다.)

```
const triggerState = atom({
  key: 'triggerState',
  default: Date.now(),
});

const usersSelector = selector({
  key: 'usersSelector',
  get: async ({ get }) => {
    get(triggerState);

    const response = await fetch('/api/users');
    return await response.json();
  },
});
```

이제 새로고침 역할을 하는 버튼에서 useSetRecoilState를 사용하여 triggerState의 값을 변경하면 usersSelector는 변경된 triggerState의 값을 받았기 때문에 API를 다시 호출하게 된다.

```
const setTriggerState = useSetRecoilState(triggerState);

const handleClick = () => {
  setTriggerState(Date.now());
};

<button onClick={handleClick}>새로고침</button>;
```

**솔직히 직관적이지 못하다.** selector내의 deps(구독중인 다른 상태)를 Invalidate하는 기능이 없어서 이러한 트릭을 사용해야 하는게 아쉽지만, 반대로 다른 상태가 유지된다면 API 응답을 캐싱할 수 있다는 장점은 있다.

예시와 같은 triggerState는 수동으로 새로고침 하려는 selector당 하나씩 있어야 한다. 만약 모든 비동기 selector가 하나의 triggerState를 구독한다면, 새로고침 버튼을 클릭하는 순간 모든 비동기 요청이 다시 시작될 것이다.

그래서 triggerState를 일일히 만들지 않기 위해 atomFamily로 만들었다.

```
const triggerState = atomFamily({
  key: 'triggerState',
  default: Date.now(),
});

const usersSelector = selector({
  key: 'usersSelector',
  get: async ({ get }) => {
    get(triggerState('usersSelector'));

    const response = await fetch('/api/users');
    return await response.json();
  },
});
```

좀 더 타입 안정성을 갖추고 싶다면 atomFamily의 제너릭으로 enum을 사용하는 것을 추천한다.

또한 컴포넌트에서 usersSelector가 아닌 triggerState의 값을 갱신하는게 이상한 것 같다. 이 부분을 usersSelector의 set 메소드에서 triggerState를 변경하도록 수정하자.

```
const usersSelector = selector({
  key: 'usersSelector',
  get: async ({ get }) => {
    /* 생략 */
  },
  set: ({ set }) => {
    set(triggerState('usersSelector'), Date.now());
  },
});
```

컴포넌트에서 useSetRecoilState 훅을 사용하고 있는데, 이 훅으로 반환하는 함수는 인자 두 개를 요구한다. 조금 더 자연스러운 동작을 위해 useResetRecoilState 훅으로 변경한다.

```
const resetUsers = useResetRecoilState(usersSelector);

<button onClick={resetUsers}>새로고침</button>;
```

이제 컴포넌트 입장에서도 usersSelector를 구독하고, 값을 초기화한다는 관심사에 맞춰서 코드를 작성할 수 있게 되었다!

---

### **테스트 코드 작성하기**

'테스트 코드를 이렇게 작성하면 됩니다'같은 공식 문서가 아직 없는 것 같다. [react-recoil-hooks-testing-library](https://www.npmjs.com/package/react-recoil-hooks-testing-library)같은 서드 파티 라이브러리가 있긴 한데, 본질적으로 [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library)에 wrapper를 RecoilRoot로 감싸주는 것으로 충분히 테스트할 수 있다.

위에서 작성한 usersSelector가 정상적으로 API를 요청하는지, 값은 의도한대로 전달하는지 확인하기 위해 useRecoilValue(usersSelector) 훅을 테스트하는 방향으로 접근했다.

```
const {} = renderHook(() => useRecoilValue(usersSelector), {
  /* ... */
});
```

Recoil의 훅을 사용하기 위해서는 RecoilRoot로 감싸주어야 한다. renderHook의 두번째 인자 객체에 wrapper를 사용한다. 비동기 요청을 처리할 경우를 대비하여 Suspense를 사용하는 것을 잊지 말자.

```
const { result, waitForNextUpdate } = renderHook(
  () => useRecoilValue(usersSelector),
  {
    wrapper: ({ children }) => (
      <RecoilRoot>
        <Suspense fallback="">{children}</Suspense>
      </RecoilRoot>
    ),
  },
);
```

이제 테스트 케이스를 작성하면 된다. 매번 <RecoilRoot>...</RecoilRoot>를 작성하는게 번거로우니 별도의 함수로 추출하기로 했다.

```
const renderRecoilValue = <T extends Object>(
  recoilValue: RecoilValue<T>,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
) => {
  return renderHook(useRecoilValue(recoilValue), {
    wrapper: ({ children }) => (
      <RecoilRoot initializeState={initializeState}>
        <Suspense fallback="">{children}</Suspense>
      </RecoilRoot>
    ),
  });
};
```

사용할 때에는 다음과 같이 사용할 수 있다:

```
const { current, waitForNextUpdate } = renderRecoilValue(
  usersSelector,
  ({ reset }) => {
    reset(usersSelector);
  },
);
```

위 예시에서 reset(usersSelector)를 사용한 것을 확인할 수 있는데, 테스트 환경에서도 캐싱 아니면 메모이제이션이 되기 때문에 msw나 fetch를 케이스 별로 모킹해서 작성할 경우 도움이 된다.

주로 비동기 요청을 하는 selector에 대해서 단위 테스트를 작성하고, 기본적으로 컴포넌트 테스트를 쓰려고 했다. 스토리북에도 동일한 방식으로 스토리를 추가했다. 컴포넌트 테스트를 작성할 때에도 RecoilRoot로 감싸는 핵심은 동일하다.

---

요즘 Recoil을 쓰면서 컴포넌트 단위로 개발을 하는 "느낌"을 받고 있다. 그게 정확히 무엇인지, Best Practice가 무엇인지 모르기에 뭔가 느낌적인 느낌이지만 만족스럽긴 하다.

그런가 하면 이런 개발 방식이 굳이 Recoil이 아니어도 충분히 가능하다는 사실을 다시금 되새긴다. 그냥 최근에 컴포넌트 단위로 구현하고자 하는 내 미약한 의지가 Recoil 이라는 바이어스가 개입되면서 그런 생각을 하는게 아닐까.

아무튼 Recoil은 정말 써볼만 하다. 언제 메이저 릴리즈가 나올지 모르지만 기대가 되는 라이브러리다.