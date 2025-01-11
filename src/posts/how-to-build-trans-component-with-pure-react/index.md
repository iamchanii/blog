---
title: '리액트로 Trans 컴포넌트 만들기'
date: 2020-01-14
---

회사 홈페이지의 다국어 기능을 외부 라이브러리 없이 구현하던 중 Trans 컴포넌트의 기능이 필요했다. 이 기능 하나만을 위해 i18n 라이브러리를 도입해야 할까? 직접 구현할 수 있지 않을까?

i18n 라이브러리를 도입하고 난 뒤 유지보수 하는 것은 어렵지 않지만, 초반 도입하는 비용이 크다. 대신 편의를 위해 대부분의 라이브러리들이 아래와 같은 Trans 컴포넌트를 지원한다. 라이브러리마다 컴포넌트 이름은 다를 수 있으나 비슷한 컴포넌트들이 꼭 있다.

```
<Trans message="Hello, <0>Hong</0>!">
  <strong>홍길동</strong>님 반갑습니다!
</Trans>
```

나는 정적 페이지의 장점을 살리기 위해 Gatsby를 선택했고 일반적인 리액트 프로젝트에 붙이는 것보다 복잡해서 i18n 라이브러리 도입을 포기했다. 단순 메세지의 번역을 표시하는 것을 원했기 때문에 현재 언어의 JSON 파일을 가져온 다음, 아래와 같이 함수를 호출하는 방법으로 구현했다.

```
<h1>{t('common.title')}</h1>
```

나름 만족스러웠지만 아래 사진과 같은 영역을 구현하기엔 조금 난감했다.

![](./10de01fa-afc8-473b-b136-1b67dd2ceca7_1.png)

한국어와 영어의 어순 차이로 **ISE 2020**의 위치가 다를 것이라고 판단했고, 이 문제를 해결하기 위한 고민을 해야 했다.

# 간단하게, dangerouslySetInnerHTML

진짜 단순하게 해결하려면 dangerouslySetInnerHTML를 쓰면 문제 해결이 가능하다.

```
<h1 dangerouslySetInnerHTML={{ __html: t('main.iseBanner.title') }} />
```

main.iseBanner.title에 해당하는 내용은 아래와 같이 관리할 수 있다.

```
{
  "main.iseBanner.title": "<strong>ISE 2020</strong>에<br/>플러스티브이가 참가합니다."
}
```

## 문제점

치명적인 단점은 번역 데이터를 관리할 때 마크업을 유지해야 한다. 개발자들이야 저렇게 데이터를 관리할 수 있다고 하지만, 번역을 다른 사람과 협업해서 진행할 때에는 굉장히 까다롭다. HTML 태그에 익숙한 사람이 하더라도 태그 열고 닫는 것을 실수 할 가능성도 있다. **여기에 클래스나 aria-\*를 추가로 관리해야 한다면?** 번역은 고역이 된다.

# 특정 문자열을 치환하자

마크업에 대한 내용을 함수 호출 단계에서 전달하고, 특정 문자열을 치환하는 방법으로 접근하면 어떨까? 거기에 추가적으로 개행 문자를 <br/> 태그로 치환까지 해 준다면?

```
<h1
  dangerouslySetInnerHTML={{
    __html: t('main.iseBanner.title', {
      ise: <strong>ISE 2020</strong>,
    }),
  }}
/>
```

```
{
  "main.iseBanner.title": "{ise}에\n플러스티브이가 참가합니다."
}
```

## 문제점

치환해야 하는 `{ise}`가 언어별로 다르게 표시해야 한다면 어떻게 할까? 추가적으로 이벤트 바인딩을 걸어야 한다면 dangerouslySetInnerHTML를 쓰는 것은 옳지 않다.

# 요구사항 분석하기

여기까지 고민하고 나니 '다시 라이브러리를 사용할까?' 하는 유혹이 들었지만 **라이브러리에 쉽게 의존하는 나쁜 개발 습관**을 고쳐보고 싶었다. 지금까지 프로젝트를 진행하면서 쉽게 라이브러리를 선택했고, 그 중 몇개는 나중에 후회를 하게 만들기도 했다. 다른 라이브러리를 채택하면 좀 더 강력한 기능을 사용할 수 있다는 것은 확실하지만, 필요한 기능만 사용하고 싶으니까, 어떤 기능을 원하고, 어떻게 작동해야 하는지 정리했다.

1. 번역 데이터에서 HTML 마크업을 신경쓰지 않았으면 좋겠다.
2. dangerouslySetInnerHTML 프로퍼티를 사용하지 않고, 좀 더 리액트답게 사용하고 싶다.
3. 번역이 필요한 문장 내에 이벤트가 바인딩 된 요소를 적용할 수 있으면 좋겠다.

이 요구사항들은 위에서 언급한 Trans 컴포넌트를 명세한 것이다. 추가적으로 3번의 요구사항까지 포함한 모습은 이렇게 될 것이다.

```
<Trans message="Hello, <0>Hong</0>! <1>Logout</1>">
  <strong>홍길동</strong>님 반갑습니다!
  <button onClick={logout}>로그아웃</button>
</Trans>
```

훨씬 리액트답다. 한 번 만들어보자.

# 정규식을 이용한 메세지 파싱

`Hello, <0>Hong</0>! <1>Logout</1>`라는 메세지를 가지고 `<strong>홍길동</strong>`이나 `<button ...>로그아웃</button>`을 넣기 위해서, 메세지 내에 꺽쇠로 묶인 영역과 아닌 영역을 파싱해야 한다. 정규식을 이용하여 쉽게 파싱할 수 있었다.

```
console.log(message.split(/(<(?:\/|)\d(?:\/>|.+?>))/));
// Result: ["Hello, ", "<0>Hong</0>", "! ", "<1>Logout</1>", ""]
```

이렇게 분리를 하고 나니, 어떻게 처리해야 할 지 감이 잡혔다. 꺽쇠로 묶이지 않은 영역은 문자열 그대로 출력하고, 꺽쇠로 묶인 영역은 cloneElement를 사용해서 Trans 컴포넌트의 children을 출력하면 될 것 같다.

# Trans 컴포넌트의 children 필터링

앞서 메세지를 파싱한 본질적인 이유는 Trans 컴포넌트에 전달된 children 중, 각 번호(인덱스)에 맞는 엘리먼트를 사용하기 위함이었다. children 중에서 텍스트 노드를 제외한 리액트 엘리먼트만 구하기 위해 아래와 같이 작성했다.

```
const childrenElementList = _.pipe(
  Children.toArray(children),
  _.filter(React.isValidElement),);
```

이정도만 해도 텍스트 노드가 아닌 것을 추려낼 수 있지만, 테스트 해 보니 Fragment도 포함되는 것을 알 수 있었다. 그래서 추가적으로 리액트 엘리먼트면서 Fragment가 아닌 것만 가져오도록 수정했다.

```
const isNotFragment = (element: any): boolean => element.type !== Fragment;
const childrenElementList = _.pipe(
  Children.toArray(children),
  _.filter(allPass([isValidElement, isNotFragment])),);
```

아직 함수형 패러다임으로 프로그래밍 하기에는 Factor나 Maybe 등에 대한 개념이 여전히 낯설지만, 나는 가능하면 함수형으로 로직을 작성하려고 한다. 여기서 사용한 라이브러리는 [remeda](https://github.com/remeda/remeda)라는 함수형 프로그래밍 라이브러리고, 타입스크립트로 작성되었기 때문에 타입 안정성이 좋다.

# 출력하는 컴포넌트 작성

파싱된 메세지와 필터링 된 children을 구했으니, 이를 사용한 컴포넌트를 작성하자. 컴포넌트를 만들고 앞서 사용한 정규식으로 메세지를 파싱한다.

```
return message.split(/(<(?:\/|)\d(?:\/>|.+?>))/g).map(token => {
  /* ... */
});
```

여기에 이게 꺽쇠로 감싸진 문자열인지 확인하는 isTagToken 함수를 작성하고,

```
const isTagToken = (token: string): boolean => /<[^>]*>/.test(token);
```

꺽쇠로 감싸진 문자열이 아니라면, 즉 텍스트 노드라면 그대로 Fragment로 감싸서 반환한다. 중간에 \\u00a0로 치환 해 주는 이유는, 공백 문자가 하나 이상으로는 표시되지 않는 문제를 확인하여, 공백 문자를 유니코드로 공백에 해당하는 코드로 치환 해 주었다.

```
return message.split(/(<(?:\/|)\d(?:\/>|.+?>))/g).map(token => {
  if (!isTagToken(token)) {
    return <Fragment key={token}>{token.replace(/ /g, '\u00a0')}</Fragment>;
  }
});
```

꺽쇠로 감싸진 문자열이라면 이제 앞서 필터링 했던 children을 사용할 차례가 되었다. 인덱스에 맞는 childElement를 구하고, clonElement를 사용하여 children만 메세지에서 파싱한 내용으로 교체한다.

중간에 isSelfClosedTagToken는 자체적으로 닫힌 태그인 경우 children을 전달하지 않기 위해 사용했다. 이 로직은 <br/>과 같은 케이스를 염두에 두었다.

```
// 같은 파일 내의 어딘가...
const isSelfClosedTagToken = (token: string): boolean => /<\d\/>/.test(token);

const getTagTokenContent = (token: string): string =>
  /<[^>]*>(.+)<[^>]*>/.exec(token)![1];

// 컴포넌트 내부
let index = 0;

return message.split(/(<(?:\/|)\d(?:\/>|.+?>))/g).map(token => {
  if (!isTagToken(token)) {
    return <Fragment key={token}>{token.replace(/ /g, '\u00a0')}</Fragment>;
  }

  const childElement = childrenElementList[index++] as any;

  return cloneElement(childElement, {
    children: isSelfClosedTagToken(token)
      ? undefined
      : getTagTokenContent(token),
  });
});
```

여기까지 하면 기본적으로 잘 작동하지만, childrenElementList의 갯수와 파싱된 메세지 내의 꺽쇠로 감싸진 문자열의 갯수가 다른 경우, childElement를 구할 수 없어서 문제가 발생할 것이다. 이 부분에 대한 예외 처리를 추가 해 주었다.

```
// 같은 파일 내의 어딘가...
const wrapWithFragment = (token: string) => (
  <Fragment key={token}>{token.replace(/ /g, '\u00a0')}</Fragment>
);

// 컴포넌트 내부
let index = 0;

return message.split(/(<(?:\/|)\d(?:\/>|.+?>))/g).map(token => {
  if (!isTagToken(token)) {
    return wrapWithFragment(token);
  }

  const childElement = childrenElementList[index++] as any;

  return childElement
    ? cloneElement(childElement, {
        children: isSelfClosedTagToken(token)
          ? undefined
          : getTagTokenContent(token),
      })
    : wrapWithFragment(token);
});
```

# 확인하기

실제로 잘 작동하는지 확인 해 보자. 원래 영문으로 된 상황에서 한국어 번역을 추가했다는 가정 하에, 아래와 같이 Trans 컴포넌트를 사용했다.

```
const message = '반갑습니다 <0>방문객</0>님! 좋은 하루 보내세요!';

const handleClickName = () => {
  alert('Clicked!');
};

const App: React.FC = () => {
  return (
    <div className="App">
      <p>
        <Trans message={message}>
          Welcome <strong onClick={handleClickName}>Stranger</strong>
          Have a nice day.
        </Trans>
      </p>
    </div>
  );
};
```

의도한 대로 잘 나온다!

![](./634f60bf-0a22-4af0-92bf-becafc10ba0c_2.png)

dangerouslySetInnerHTML를 사용한 것이 아니기 때문에 이벤트 바인딩 또한 작동한다. 여기서 구현한 전체 코드는[iamchanii/react-trans-component-example](https://github.com/iamchanii/react-trans-component-example)에서 확인할 수 있다.

# **바퀴 재발명**

흔히 바퀴를 다시 만들지 말라는 조언을 쉽게 구할 수 있다. 지금 내가 했던 고민은 이미 누군가 예전에 했던 고민이고, 그것을 해결하기 위한 방법이 오픈 소스 프로젝트로 많이 공개되어 있는 상황이다.

지금 나에게는 Trans 컴포넌트만 필요하기 때문에 그럭저럭 괜찮은 선택이 될 수 있지만, 좀 더 체계적으로 다국어를 지원해야 한다면 i18n 라이브러리를 선택하는 것이 더 좋을 것이다.

Trans 컴포넌트처럼, i18n과 관련된 기능은 핵심 도메인이 아닌 일반 도메인이기 때문이다. 이미 공개되어 있는 라이브러리를 선택하는 것은 핵심 도메인을 구현하는데 더욱 집중할 수 있게 해준다. 다만 어느 순간부터 핵심 도메인 수준으로 기능이 필요하다면 그때는 직접 구현하는 것이 맞지 않을까? _(갑자기 분위기 도메인 주도 설계)_

그래도 라이브러리를 덥썩 선택하는 습관은 좋지 않다. 직접 만들어서 관리하는 것이 가능한 수준의 기능이라면, 라이브러리 선택보다 먼저 고민하는 습관을 들여야겠다.
