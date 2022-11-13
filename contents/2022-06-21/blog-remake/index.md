---
title: "블로그 리메이크 후기"
date: "2022-06-21T14:38:02.556Z"
---

[작년 초에 한 번 블로그를 리뉴얼](/posts/blog-renewal-2021)했는데, 이번에 또. 리뉴얼을 했다.
지난번 리뉴얼 이후 불편한 점이 조금씩 있었지만, 귀찮음을 핑계로 미뤄왔었다. 글을 자주 쓰지는 않았지만,
어쨌든 쓰는데에는 문제가 없었기 때문에 그냥 불편함을 감수해왔는데, 최근에 글을 쓰다가 불편함 수준이 임계치를 넘어 폭발해버렸다.

## 이전 블로그의 불편했던 것들

### CMS

기본적으로 마크다운 방식은 로컬에서만 편집을 할 수 있기 때문에, 제한된 환경에서만 글을 작성할 수 있다.
때마침 회사에서 [Prismic](https://prismic.io/)을 사용할 일이 있었기 때문에, 이 경험을 블로그에 녹였던 것이다.

그래서 지난 리뉴얼 작업 당시, 글쓰기 방식을 CMS로 전환한 것이 가장 만족스러웠다.
인터넷만 연결되어 있으면 어디서든지 글을 작성할 수 있었다.

하지만 시간이 지날수록 외부에서 글을 작성하는 것은 차치하고, 글쓰기 자체를 가까이 하지 않았다.
어쩌다 글을 쓰고 싶은 기분이 생겨도, 매번 로그인 해서 CMS로 글을 쓰는게 불편하게 느껴졌다.
업무 용도로 CMS를 활용하는 것과 블로그에 CMS를 활용하는 것은 전혀 다르다는 것을 몸소 깨닫게 되었다.

### 마크다운 미지원

CMS로 글을 쓸 때 마크다운을 지원하지 않는 것이 가장 아쉬웠다. 특히 글에 코드를 넣고 싶을 때가 많은데, CMS 상에서는 코드 조각을 넣을 적당한 방법이 없었다.

Prismic 기준으로 굳이 구현하자면, 마크다운에 해당하는 모델을 만들어서 Formatted 텍스트로 마크다운을 작성하고, Gatsby에서 렌더링할 때, 해당 모델은 [Remark](https://github.com/remarkjs/remark)나 [Markdown-It](https://github.com/markdown-it/markdown-it)으로 렌더링을 해주면 가능은 한데... 그럴거면 그냥 마크다운으로 콘텐츠를 관리하는게 낫지 싶다.

그래서 [Carbon](https://carbon.now.sh)로 코드 이미지를 만들어서 글에 붙이는 식으로 대응했지만 역시 만족스럽지는 않았다.

### 켜켜히 쌓인 레거시

Gatsby의 메이저 버전이 4까지 올라오는 동안, 내 블로그는 여전히 2 버전에 머물러 있었다.
Gatsby에 변경점이 있으면 플러그인도 그에 맞춰 대응을 하기 때문에 마이그레이션을 하는 일이 쉽지 않았다.
차라리 새로 만드는게 훨씬 간단할 것 같아서 과감하게 저지르기로 했다.

## 블로그 리메이크

이제 블로그 리메이크와 관련된 이야기를 해보자.

### 전체 소요 시간

`gatsby new` 명령어로 프로젝트를 만들고, 약 4일정도 시간을 쏟아서 완성했다.
기존에 있는 블로그를 참고해서 만들었기 때문에 비교적 금방 끝낼 수 있었다.

### 스타일링

이전 리뉴얼에는 [Stitches](https://stitches.dev/)을 사용했는데, 이번에는 [Tailwind CSS](https://tailwindcss.com/)를 사용했다. 다음에 옮길 회사에서 Tailwind를 사용하고 있기 때문에, 써보면서 다시 적응해보려고 했다.
거진 3년만에 다시 써봤는데, 소식으로 접했던 Just-In-Time 엔진은 확실히 편리했고, IDE 통합도 매우 강력해졌다. 다크 모드도 어렵지 않게 구현할 수 있었다. 실제 프로덕션에서 사용할 때도 편리할 것 같다.

### Gatsby

이번에 Gatsby를 쓰면서 새로 써본 API가 두 개정도 있는데, 둘 다 개발 편의성을 아주 크게 올려주었다.

#### TypeScript 지원

이번에 Gatsby로 프로젝트를 새로 만들자마자 바로 체감되는 부분이 TypeScript 지원이었다. 이제 `gatsby-*.js` 파일들을 전부 TypeScript로 작성할 수 있게 되었다.

그리고 GraphQL 타입 생성이 빌트인으로 포함되었다. `gatsby-config.ts`에 `graphqlTypegen: true`를 추가하면, 이 프로젝트에서 사용되는 노드 타입은 물론이고 각 페이지 내에서 사용된 쿼리도 타입을 생성해준다. 별도의 플러그인 구성 없이 기본적으로 가능한 점이 좋았다.

#### [File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)

기존에 Gatsby로 블로그를 만드려면 [createPages](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages) API를 사용해서 페이지를 동적으로 만들어야 했다. 그리고 GraphQL 쿼리를 작성해서 데이터를 가져와야 하는데, File Systme Route API는 직접 쿼리를 작성하지 않아도, 특정 GraphQL 타입의 노드 수 만큼 페이지를 만들어준다.

```
/src/pages/posts/{mdx.slug}.tsx
-> MDX 타입의 노드 수 만큼, /posts/{mdx.slug}에 해당하는 페이지가 생성된다.
```

보다 구체적이고 특정 케이스에 알맞게 페이지를 생성하려면 createPages API를 사용하는 것이 유일한 방법이다.

#### [createSchemaCustomization](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createSchemaCustomization)

나는 마크다운 Frontmatter에 글 제목과 작성일시를 관리한다.

```md
---
title: "글 제목"
date: "2022-06-22T00:00:00..."
---

<!-- 여기에 본문 내용 입력... -->
```

Gatsby가 데이터 소스로 마크다운을 가져와 유효한 노드로 추가하게 되면, Frontmatter에 입력한 데이터들은 기본적으로 `String` 타입이, 타입스크립트로 표현하면 `string | null` 타입이 된다. 이 값을 JSX에서 가져다 쓰려면 Non-Null Assertion을 해야 한다.

```tsx
<p>{data.mdx!.frontmatter!.title!}</p>;
```

까짓거 붙이면 그만이지 싶지만, 내 마크다운 파일들이 `title`과 `date` 값을 무조건 포함하는 상황인데도 `string | null`로 취급되는 것은 타입이 실제 데이터를 올바르게 투영하고 있지 않다는 의미이다.

Gatsby의 좋은 점들 중 하나는 이러한 타입도 커스텀할 수 있다는 것이다. createSchemaCustomization API를 사용해서 Frontmatter 타입을 직접 정의해줬다.

```ts
import { GatsbyNode } from 'gatsby';

export const createSchemaCustomization:
  GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
    actions.createTypes(`#graphql
      type MdxFrontmatter {
        title: String!
        date: Date! @dateformat
      }
    `);
  };
```

이제 `mdx.frontmatter.title`의 타입은 `string`으로 제공된다. 추가적으로 `date` 필드는 `@dateformat` 디렉티브를 적용해주었다. 이 디렉티브 덕분에 손 하나 안대고 특정 포맷으로 변환된 날짜를 가져올 수 있게 되었다.

```graphql
query ArticlePage ($id: String) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      date(formatString: "YYYY. MM. DD") # 2022. 06. 22
    }
  }
}
```

### ReScript

이번에 처음으로 ReScript로 코드를 작성해봤다. 그동안 관심있게 봐왔던 언어지만,
익숙한 틀을 벗어나는게 어려웠다. 매번 학습하는 것도 어려웠다. 리브랜딩(통합)을 했다지만, BuckleScript, Reason에 대해서도 대략은 알아야 했기에 빈번하게 좌절했다.

최근에 다시 ReScript를 사용해봤다는 글을 많이 볼 수 있었다. [블로그 개편에 ReScript를 사용했다는 글(한국어)](https://seob.dev/posts/ReScript-%EC%82%AC%EC%9A%A9%EA%B8%B0/)이나 [TypeScript에서 ReScript로 이전한 경험(영어)](https://www.greyblake.com/blog/from-typescript-to-rescript/)이 가장 큰 도움이 되었다.

모든 코드를 ReScript로 쓰진 않았고, 컴포넌트 부분에 한해서 사용했다. 별도의 `import` 구문을 사용하지 않아도 되는 점, 타입이 아주 강력하고 깐깐(!)한 점, 함수형 언어인 점 등등 아주 재미있고 매력적인 언어라는 인상을 받았다.

### Deno

> Deno 어떻게 보시나요?

얼마 전에 이 질문을 받았을 때만 하더라도 당장은 별 생각이 없다, 사용할 계획은 없다고 했었는데... 블로그를 리메이크 하면서 Deno를 사용해봤다. 기존 블로그 게시글들이 Prismic CMS로 관리되고 있었기 때문에, 이걸 마이그레이션 할 필요가 생겼기 때문이다.

기존 블로그 코드 내에서 Prismic을 데이터 소스로 사용하고 있기 때문에, 기존 블로그 개발 서버의 GraphQL 엔드포인트를 활용해서 데이터를 가져오고, 해당 데이터들을 잘 다듬어서 마크다운 파일로 저장해주었다.

좀 써보니 괜찮은 것 같아서, 새 마크다운 파일을 생성해주는 스크립트도 Deno로 구현했다. 이 스크립트는 ReScript로 작성했는데, 궁금하다면 [링크](https://github.com/iamchanii/blog2/blob/main/src/scripts/create_content.res)를 통해서 확인할 수 있다.

## 후기

이번에는 그냥 블로그를 리뉴얼 했다를 넘어서는 경험들을 했던 것 같다. 새로운 기능이나 편리한 기능도 사용해봤고, 평소 관심있는 언어도 사용해볼 수 있어서 좋았다. 앞으로는 라이브러리/프레임워크 릴리즈 소식에 귀를 좀 더 기울여야겠다.
