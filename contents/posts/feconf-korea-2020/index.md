---
title: "FEConf2020 at Home 후기"
date: "2020-10-31T13:25:54.000Z"
---

10월 31일 오늘, [유투브 FEConf Korea 채널](https://www.youtube.com/channel/UCWEzfYIpFBIG5jh6laXC6hA)을 통해 [FEConf2020 at Home](https://2020.feconf.kr/) 컨퍼런스가 진행됐다. 언젠가 알림 신청 해두고서 이미 잊고 지낸지 좀 됐었는데, 운이 좋게도 다시 알 수 있게 되었고 덕분에 주말 한나절을 컨퍼런스 시청에 몰두했다.

오프라인 현장에서 발표를 듣는 방식과 다르게 올해는 각 세션별 영상을 FEConf 유투브 채널에서 최초 공개를 통해 진행됐다. 시간에 맞춰 최초 공개 영상이 열리니까 이것 나름대로 다 같이 보는 재미가 쏠쏠했다. 녹화된 영상을 다 같이 보면서 질문이 있으면 실시간 채팅을 통해 발표자 분들이 답변을 해 주시기도 했다.

개인적으로 코로나 시국에 가장 적절한 방법으로 컨퍼런스를 진행한 방법이라고 생각됐고 만족도도 높았다. 컨퍼런스를 준비해 주시고, 지식을 아낌없이 나눠주신 커뮤니티와 스피커분들께 감사의 말씀을 드리고 싶다.

---

## **[웹뷰에서 다크모드 상속받기: 일관성있는 사용자 경험을 위하여](https://www.youtube.com/watch?v=ElsZ-v4Ow08)**

![](https://i.ytimg.com/vi/ElsZ-v4Ow08/hqdefault.jpg)

다크모드를 지원하는 앱에 포함된 웹뷰에서 다크모드를 상속받아서 어떻게 처리하는지에 대한 발표였다. 개인적으로 다크모드를 지원할 때 겪을법한 모든 문제는 겪어보신 것 같았다. 나중에 비슷한 문제에 맞닥뜨리면 굉장히 도움될 것 같다. 특히 서버 사이드의 다크모드 감지 방법은 꽤 괜찮은 방식인 것 같다.

## [OpenAPI Specification으로 타입-세이프하게 API 개발하기: 희망편 VS 절망편](https://www.youtube.com/watch?v=J4JHLESAiFk)

![](https://i.ytimg.com/vi/J4JHLESAiFk/hqdefault.jpg)

상태 관리 다음으로 핫한 주제가 있다면 서버 개발자와 API 싱크 맞추는 방법이 아닐까? 특히 타입스크립트 프로젝트에서 서버 응답을 일일히 타이핑 하는 문제는 정말 괴로운 부분이다. 발표 중간에서 언급하지만, 그 귀찮은 타이핑이 타입스크립트가 불편하고 왜 하냐는 인식을 주는데 한 몫 하는 것 같다.

대신 OpenAPI Spec, 흔히 알고 있는 Swagger Spec인데 이를 통해 서버/프론트에서 필요한 코드를 자동으로 생성하는 코드 제너레이터를 사용하면 아주 타입 세이프하게 할 수 있다고 한다.

## [iframe을 활용하여 전혀 다른 Service를 통합하기](https://www.youtube.com/watch?v=kZO5PEypjVg)

![](https://i.ytimg.com/vi/kZO5PEypjVg/hqdefault.jpg)

자사 솔루션에서 제공하지 않는 서드 파티 서비스나 기존에 구축해둔 시스템과의 Integration을 제공하기 위한 수단으로 iframe을 사용한 경험을 공유 해 주셨다. 어떻게 하면 보안을 챙기면서 Data Transmission을 수행하는지에 대한 고민이 꽤 공감되었다.

## [Relay, 그리고 Declarative에 대해 다시 생각하기](https://www.youtube.com/watch?v=YP7d9ae%5FVzI)

![](https://i.ytimg.com/vi/YP7d9ae_VzI/hqdefault.jpg)

프론트엔드에서 정말 흔히 겪는 문제들과 그 문제들을 GraphQL이 어떻게 해결하는지부터 Relay 프레임워크에 대한 간략한 소개를 담고 있다. 당근마켓의 내 근처탭을 구현할 때 클라이언트 사이드 스키마를 사용하였다고 한다.

위 내용들도 정말 좋았지만, 발표 후반에 선언적, Declartive에 대한 이야기가 가장 큰 인사이트를 얻었던 것 같다. 특히 How와 What을 분리하여 구현하는 것. 마지막으로 기술에 담긴 생각을 이해하라는 말. 생각해 볼만한 주제이다.

## [프론트엔드에서 TDD가 가능하다는 것을 보여드립니다.](https://www.youtube.com/watch?v=L1dtkLeIz-M)

![](https://i.ytimg.com/vi/L1dtkLeIz-M/hqdefault.jpg)

일단 가능하다는 것을 확실히 보여주신 발표였다. 테스트 코드 중요한 건 알겠는데 어떻게 써요? 라는 질문이 있을 때 마다 알려주고 싶은 내용이 너무 많았었다. 테스트 환경은 어쩌구, 모킹이 어쩌구... 그런데 이 영상은 이런 느낌이다. "잘 봐. 테스트는 이렇게 쓰는거야."

간단한 컴포넌트부터 리덕스, 비동기 액션까지 포함한, 그야말로 리액트 테스트 Essential을 라이브 코딩을 통해 소개하고 있다. 얼른 가서 회사 위키에 테스트 작성 방법 페이지 내용 다 지우고 이 영상을 걸어야겠다.

## [Statecharts: 복잡한 UI 상태를 지배하는 방법](https://www.youtube.com/watch?v=Hv%5FPhrfwerQ)

![](https://i.ytimg.com/vi/Hv_PhrfwerQ/hqdefault.jpg)

UI의 상태는 우리가 생각하는 것 보다 훨씬 복잡하다는 것을 주제로, 상태 머신을 통해 어떻게 해결할 수 있는지에 대한 발표였다. 이 발표에는 Xstate에 대한 소개가 있는데 그냥 어떤 라이브러리가 있는데 이런 문제를 해결하기 좋아요!가 아니라 페북 체험하기 용 [쿠키런 오븐브레이크의 상태 머신](https://xstate.js.org/viz/?gist=f33cf8cdb61bada27cb2df72bfa295ba)을 보여주면서 츄라이 츄라이를 하는 모습이 인상적이었다. "여러분만의 쿠키를 직접 만들어보세요."

---

이 밖에도 많은 분들이 발표를 해 주셨다. 다만 나의 관심사 영역에 조금 벗어나서 따로 정리는 하지 않았지만 올해 FEConf2020 at Home에서 발표한 내용들은 매우 괜찮았다. FEConf Korea 유투브 채널을 통해 볼 수 있으니 한번씩 훑어 보는 것을 추천하고 싶다.
