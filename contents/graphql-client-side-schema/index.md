---
title: "GraphQL 클라이언트 스키마 사용하기"
date: "2020-09-03T13:25:54.000Z"
---

최근 GraphQL, 정확히는 Relay에 관심을 들이고 있다. Relay가 프레임워크로써 해결하려고 하는 문제와 방식이 마음에 든다. 이걸 토대로 회사에서 진행하는 프로젝트가 맞이한 문제를 해결하고 싶지만, 안타깝게도 당장 GraphQL 서버를 구성할 여유가 없다. 그래서 클라이언트 사이드 스키마를 사용하기로 했다.

## 클라이언트 사이드 스키마

GraphQL의 일반적인 패턴은 서버 사이드에서 스키마와 리졸버를 작성해서 /graphql 엔드포인트를 제공하고, 클라이언트는 제공되는 스키마에 맞게 쿼리를 작성하기만 하면 된다.

반면에 클라이언트 사이드 스키마는 **클라이언트 측에서 애플리케이션 구현에 필요한 스키마와 리졸버를 직접 정의해서 사용**한다. 서버에서 처리하는 작업 일부를 클라이언트로 가져와서 일종의 API 요청 레이어로 사용하는 것으로 볼 수 있다.

## 구현하기

기존에 사용하고 있는 REST API 서버가 있다고 가정하겠다. 만약 GraphQL 서버가 있다면 이 글을 읽을 필요가 없다. 혹시라도 검색 중에 이 글을 보게 되었다면 GraphQL로 로컬 상태를 관리하거나 클라이언트 스키마 확장 등의 키워드로 검색해보는 것을 추천한다. [(관련 문서)](https://relay.dev/docs/en/local-state-management)

클라이언트 사이드 스키마 구현은 [@graphql-tools/schema에서 제공하는 makeExecutableSchema](https://www.graphql-tools.com/docs/api/modules/schema#makeexecutableschema)를 사용해서 실행 가능한 스키마를 만드는 것이다. 이것을 만들기 위해서 **스키마**와 **리졸버**가 필요하다.

### 스키마 작성하기

스키마는 SDL를 이용해서 작성하면 되는데, 이 과정에서 주의해야 할 점은 **실제 제품의 도메인을 담아내야 한다.** API 응답의 형태를 스키마에 그대로 담는다면 추후 GraphQL 서버와 점진적으로 통합하기 어려움이 있을 것이다.

```
type Query {
  products: [Product!]!
}

type Product {
  id: ID!
  name: String!
  price: Int!
}
```

전체 스키마를 한 번에 작성하기보다 작업하고자 하는 범위에 필요한 도메인을 우선적으로 작성하는 것이 좋다.

### 리졸버 작성하기

리졸버는 makeExecutableSchema()의 인자로 전달할 수 있는 형태로 작성하면 된다. [(참고)](https://www.graphql-tools.com/docs/resolvers/) 위의 스키마에 해당하는 리졸버는 다음과 같은 형태가 된다.

```
export default {
  Query: {
    products: async () => {
      const response = await fetch('/api/products');
      return await response.json();
    },
  },
  Product: {
    id: data => data.id,
    name: data => data.name,
    price: data => data.price,
  },
};
```

GraphQL을 사용하면 얻는 이점 중에는 한 번의 요청으로 필요한 데이터만 가져오는 것이 있는데 클라이언트 사이드 스키마를 사용하면 누릴 수 없다. 보다시피 products 필드가 데이터를 요청하는 방식은 일반적인 API 요청과 크게 다르지 않다.

만약 API가 ids 같은 쿼리를 이용해서 여러 리소스를 한 번에 제공하는 것을 지원한다면 [DataLoader](https://github.com/graphql/dataloader)를 사용해서 요청 횟수를 줄일 수는 있겠지만, 요청 크기 자체를 줄이는 이점은 흉내내기 어려울 것 같다.

[GraphQL Code Generator](https://graphql-code-generator.com/)를 사용하면 스키마에 맞는 리졸버 타입을 생성해서 타입스크립트로 리졸버를 즐겁게 작성할 수 있다.

### 구현 마무리

스키마와 리졸버를 인자로 사용해서 makeExecutableSchema를 호출하면 실행 가능한 스키마를 만들 수 있다.

```
import typeDefs from './schema.graphql';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

이 부분에서 _"어... 어떻게 .graphql 파일을 가져오지?"_ 라는 고민이 생길 수 있는데 두 가지 방법이 있다.

1. Webpack을 사용한다면 [raw-loader](https://webpack.js.org/loaders/raw-loader/)를 사용하여 작성한 내용을 그대로 가져온다.
2. **[babel-plugin-preval](https://github.com/kentcdodds/babel-plugin-preval)을 사용하여 빌드 시점에 작성한 내용을 가져온다. 이 플러그인을 사용하면 fs.readFile을 사용할 수 있는 것 같다.**

나는 Webpack을 사용하고 있어서 1번으로 진행했지만, 2번이 조금 더 좋은 것 같다 (확인 필요)

## 써먹기

클라이언트 사이드 스키마를 사용하는 것은 간단하다. 쿼리의 텍스트와 변수를 받아서 graphql 라이브러리로 실행하면 끝.

```
async function queryGraphQL(text: string, variables: any) {
  return graphql(schema, text, undefined, undefined, variables);
}
```

Relay 프로젝트에서 사용하려면 Environment로 전달하는 함수 내에서 호출하도록 작성하면 된다.

```
async function fetchRelay(params: RequestParameters, variables: Variables) {
  return queryGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
```

## 맺음말

클라이언트 사이드 스키마는 분명히 GraphQL의 이점을 얻을 수 없지만 그럼에도 불구하고 충분히 가치가 있다.

데이터를 요청하는 방식을 GraphQL 클라이언트에 위임하고 나면 데이터를 어떻게 관리해야 할 지 고민할 필요가 없어진다. 레코드 단위의 캐싱은 덤이다. 클라이언트 사이드 스키마를 사용하더라도 선언적인 데이터 요청 방식은 유효하다. Relay를 사용한다면 설계 측면에서도 많은 이점을 얻을 수 있을 것 같다.

회사 프로젝트에 도입을 찐하게 검토하고 있다. 여러모로 맞이한 문제점을 해결할 수 있는 방법으로 GraphQL과 Relay를 생각하고 있지만 아무래도 초기 도입 오버헤드가 걱정이다.

---

### **도움 될 만한 글(과 영상)**

- https://relay.dev/docs/en/experimental/step-by-step
- https://www.graphql-tools.com/docs/introduction/
- https://blog.cometkim.kr/posts/graphql-is-not-just-a-network-protocol/
- https://hasura.io/blog/client-side-graphql-schema-resolving-and-schema-stitching-f4d8bccc42d2/
