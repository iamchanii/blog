---
title: "Now를 사용하여 모노레포 프로젝트 배포하기"
date: 2020-03-29
---

일반적인 방법으로 배포하기가 어려운 모노레포 프로젝트를 Now를 이용해서 배포를 하는 방법을 알아보자.

# 문제점

사이드 프로젝트를 모노레포로 구성해서 진행하고 있다. 전반적으로 만족스러운데, CI/CD 환경을 구성하는 것이 생각보다 까다로운 것 같다. 배포 또한 마찬가지인데, CRA를 사용하여 패키지를 추가했다 하더라도 다른 로컬 패키지와의 의존이 있는 경우 CI/CD 환경에서 이를 해결할 수 있어야 한다.

나의 경우 [pnpm](https://pnpm.js.org/)을 패키지 매니저로 선택했는데, [ZEIT Now](https://zeit.co/home)로 배포하려고 하니 Now 자체적으로 pnpm을 지원하지 않는 문제가 있다. 모노레포의 편의성을 그대로 유지한 채로 어떻게 하면 Now로 배포할 수 있을까?

# Now 설정

기본적으로 Now 내에서 빌드 후 결과물을 사용하는 방식이기 때문에, 로컬에서 빌드한 결과물을 사용하여 배포하면 패키지 매니저와 상관 없이, 프로젝트 구조와 상관 없이 배포를 할 수 있다.

프로젝트 루트 폴더에 now.json 파일을 만들고 아래와 같이 내용을 작성한다. 아래 내용은 현재 내 프로젝트를 기준으로 작성되었기 때문에 적절히 참고하길 바란다.

```
{
  "version": 2,
  "builds": [
    {
      "src": "packages/app/build/**",
      "use": "@now/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/packages/app/build/$1"
    }
  ]
}
```

- version은 사용하고자 하는 ZEIT Now의 플랫폼 버전을 뜻한다.
- builds는 packages/app/build 폴더의 내용물을 @now/static을 사용한다는 것을 의미한다. @now/static을 사용하면 별도로 빌드 작업을 수행하지 않고 제공되는 파일 그대로 사용할수 있다.
- routes는 요청 주소를 올바르게 매핑하기 위해 사용한다.

# 배포

이제 프로젝트 위치에서 now를 입력하면 배포가 된다.

```
now
Now CLI 17.1.1
🔍  Inspect: https://zeit.co/iamchanii/canifish/6bl0socw5 [2s]
✅  Preview: https://canifish.iamchanii.now.sh [copied to clipboard] [4s]
📝  To deploy to production (canifish.now.sh), run `now --prod`
📝  Project settings are not applied because `builds` are used.
```

문제를 해결하기 위해 다른 패키지를 npm에 배포하는 방식으로 접근했는데, 더욱 간단하고 모노레포의 방식을 해치지 않는 배포 방법을 찾게 되어 너무 만족스럽다!
