---
title: "Promise, 가만히 냅두면 어떻게 될까?"
date: "2020-02-23T13:25:54.000Z"
---

ES6에서 등장 후 자바스크립트로 코딩할 때 콜백 지옥을 방지하기 위해 나온 Promise. 특히 비동기 작업을 처리할 때 자주 사용하게 되는데 이 Promise를 만들고 가만히 냅두면 어떻게 될까? 즉, then이나 catch로 핸들러가 등록되어 있지만 계속해서 Pending 상태인 Promise는 과연 어떻게 될까? 나의 궁금증을 해결해 준 스택 오버플로우 글을 번역 해 봤다.

# Q. Promise를 resolve도 reject도 안하면 무슨 일이 일어나나요?

Promise를 반환하는 시나리오가 있습니다. 이 Promise는 기본적으로 AJAX 요청에 의해 실행됩니다. Promise가 거부(Reject)되면 에러 다이얼로그를 표시하고 거기에 서버 에러가 나타납니다.

내가 하고 싶은 것은 응답 코드가 401일 때 **Promise를 해결(Resolve)도 거부도 하지 않고자 합니다.** (이미 에러 다이얼로그가 표시 되니까요.) 그냥 간단하게 로그인 페이지로 이동시키려고 합니다.

코드는 이렇게 작성 했습니다.

```
function makeRequest(ur, params) {
  return new Promise(function(resolve, reject) {
    fetch(url, params).then(response => {
      let status = response.status;

      if (status >= 200 && status < 300) {
        response.json().then(data => {
          resolve(data);
        });
      } else {
        if (status === 401) {
          redirectToLoginPage();
        } else {
          response.json().then(error => {
            if (!error.message) {
              error.message = constants.SERVER_ERROR;
            }
            reject({ status, error });
          });
        }
      }
    });
  });
}
```

보시다시피, 상태 코드가 401이면 로그인 페이지로 이동하도록 했습니다. Promise는 해결되지도 거부되지도 않았구요.

이 코드는 괜찮은 코드인가요? 아니면 더 나은 방법이 있을까요?

# A. Promise는 프로퍼티를 가진 단순한 자바스크립트 객체입니다.

그 이상의 마법은 없습니다. 즉, Promise를 해결 또는 거부하는데 실패하면 보류(Pending) 상태에서 다른 상태로 변경되지 않습니다. 그것은 어떠한 기능적 문제도 자바스크립트에 발생시키지 않습니다.

왜냐하면 Promise는 단순한 자바스크립트 객체일 뿐입니다. 해당 Promise를 참조하는 코드가 없다면 가비지 콜렉팅이 될 것입니다. (여전히 보류 상태라 하더라도요.)

진짜 중요한 것은 Promise의 상태가 변경되지 않는다는 것이 Promise를 호출하는 입장에서 무엇을 의미 할까요? 해결 또는 거부 상태로 전환될 때를 위한 .then() 또는 .catch() 리스너들은 절대 호출되지 않을 것입니다.

대부분의 코드는 Promise가 나중에 어떤 시점에 해결 또는 거부될 것이라고 예상하고 사용합니다. (그래서 Promise를 우선적으로 사용하게 되는 이유입니다.) 그렇지 않으면 코드는 일반적으로 작업을 끝내지 못할 것입니다.

그 작업을 끝내기 위한 다른 코드_(역주: Promise의 resolve나 reject를 대신 호출하는 코드)_를 작성할 수도 있습니다. 그러면 Promise는 아무 것도 하지 않고 버려지게 됩니다.

이렇게 해도 자바스크립트 내부적으로 어떤 문제도 생기지 않지만 올바르게 Promise가 작동하도록 설계된 방법이 아니며, 일반적으로 호출하는 입장에서 Promise가 작동될 것이라고 기대하는 방식과 어긋납니다.

> 보시다시피, 상태 코드가 401이면 로그인 페이지로 이동하도록 했습니다. Promise는 해결되지도 거부되지도 않았구요. 이 코드는 괜찮은 코드인가요? 아니면 더 나은 방법이 있을까요?

이 특이한 케이스에서는, 네. 어떤 특별하고 특이한 케이스에서 리다이렉트 하는 것도 괜찮습니다. 브라우저를 새로운 페이지로 리다이렉트할 때 현재 페이지의 (모든 자바스크립트의 상태를 포함한) 상태를 완전히 정리할 것 입니다.

그러므로 다른 Promise가 해결되지 않은 상태로 리다이렉트를 하는 것은 문제가 되지 않습니다. 새 페이지가 로딩되기 시작하면 시스템은 자바스크립트 상태를 다시 완전하게 초기화하므로, 보류 상태의 Promise는 정리될 것입니다.

---

요약하면 Promise는 단순히 프로퍼티를 가진 자바스크립트 객체이며, 이를 해결 또는 거부 상태로 유지하지 않더라도 큰 문제가 발생하지 않는다는 것이다.

나아가서, 올바른 Promise의 사용법은 아니지만 필요하다면 대신 Promise를 해결, 거부 또는 아무것도 하지 않도록 작성하는 것도 괜찮다고 한다.

다만 이 답변의 전제는 SPA가 아닌 MPA(Multi Page Application)인 경우다. SPA에서는 라우팅을 내부적으로 처리하기 때문에 새로운 페이지로 리다이렉트 또는 이동 시 자바스크립트의 상태가 완전히 초기화되지 않는다.

SPA에서 Promise가 가비지 콜렉팅이 되도록 하려면 1\. Promise 객체에 대한 참조가 없도록 하고 2\. resolve 또는 resolve 함수 또한 참조하지 않도록 주의해야 한다.

Promise 객체와 두 함수 모두 참조하지 않는다면 가비지 콜렉팅 단계로 들어설 것이라고 한다. 예를 들어 나중에 수동으로 해결하기 위해 resolve를 참조하고 있다면 Promise는 여전히 메모리에 유지될 것이다.

# resolve를 대신 호출하는 사례

생각해보니 얼마전 리팩토링을 진행하는 부분에서 resolve를 나중에 대신 호출하도록 작성한 코드가 있어서 공유해본다. 필요한 경우 resolve를 나중에 호출하는 케이스를 설명할 수 있을 것 같다.

미리 설명을 붙이자면, react-query 라이브러리를 사용하여 Fetch 기반으로 데이터를 가져오는 훅을 작성하였고, 컴포넌트 레벨의 테스트 코드에서 의도한대로 API가 호출되었는지 확인한 뒤 더미 데이터를 반환하는 테스팅 헬퍼 함수다. 또한 Fetch API를 모킹하기 위해 jest-fetch-mock을 사용하고 있다.

```
const mockFetchResourceList = <T>(
  resourceName: ResourceName,
  dummy: Dummy<T>,
) => {
  let _resolve: any;  const _url = getBaseUrl(resourceName);

  fetchMock.mockResponse(request => {
    if (request.url.startsWith(_url)) {
      return new Promise(resolve => {
        _resolve = resolve;
      });
    }
    return null;
  });

  return (
    params: Omit<FetchResourceListParams, 'resourceName'>
  ) => {
    const { page = 1, perPage = 20, filter, sort } = params;
    const count = params.perPage ?? 20;
    const dummies = createDummyList(dummy, count);

    _resolve(JSON.stringify({ total: count, data: dummies }));

    const url = createFetchResourceUrl({
      resourceName,
      page,
      perPage,
      filter,
      sort,
    });
    expect(fetchMock).toHaveBeenLastCalledWith(url.toString(), {
      method: 'get',
      headers: expect.any(Headers),
    });

    clearQueryCache();

    return dummies;
  };
};
```

1. 이 헬퍼 함수를 테스트 코드에서 호출하는 시점에 fetchMock을 사용하여 특정 Fetch 요청에 대한 resolve를 \_resolve에 저장한다.
2. 그리고 인자인 params에 실제로 API 호출 시 사용했을 것으로 추측하는 페이지 위치, 페이지 당 표시 갯수, 필터와 정렬에 대한 데이터를 전달하는 함수를 반환한다.
3. 반환된 함수를 호출하면 지정된 갯수에 맞는 더미 데이터를 만들고 \_resolve에 더미 데이터 응답을 전달한다.
4. 실제로 Fetch API가 의도한대로 호출되었는지 확인하고 더미 데이터를 반환한다.

이 헬퍼 함수는 테스트 케이스 내에서 아래와 같이 호출하였다.

```
it('콘텐츠 목록을 불러와서 표시할 수 있다.', async () => {
  const assertFetch = mockFetchResourceList(CONTENT, new ContentDummy());

  const { getByText } = setup();

  const contents = assertFetch({
    sort: ['creationDate', 'DESC'],
  });

  await wait(() => {
    contents.forEach(({ name }) => {
      getByText(name);
    });
  });
});
```

1. 테스트 하고자 하는 컴포넌트가 렌더링 되기 전에 Fetch API를 헬퍼 함수를 통해 모킹한다.
2. 그리고 적절하게 테스트 하고자 하는 시점에 의도한 대로 API가 호출되었는지 확인한다. 정상적으로 호출되었다면 더미 데이터를 반환받을 수 있다.
3. 그 다음 getByText를 통해 더미 데이터가 표시되는 것을 확인한다.

사용하기에 따라서 의도적으로 resolve를 나중에 호출하도록 작성하면 위와 같이 API 호출 검증을 편리하게 할 수 있다.

다만 리액트 내에서 사용할 때 가비지 콜렉팅이 어떻게 이뤄지는지 알지 않으면 메모리 누수를 유발하게 될 것이다.

다음에는 가비지 콜렉팅에 대해 정리를 해야겠다. 많이 어려울 것 같다.

---

### **Reference**

- <https://stackoverflow.com/questions/36734900/what-happens-if-you-dont-resolve-or-reject-a-promise>
