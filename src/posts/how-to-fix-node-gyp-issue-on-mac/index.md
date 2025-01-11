---
title: '맥에서 node-gyp 문제 해결하기'
date: 2020-02-17
---

가끔씩 node-gyp 문제가 발생하면서 패키지가 설치되지 않는 경우가 있는데 내 경험상 맥 업데이트 이후 발생하는 것으로 추측된다. 맥에서 XCode를 설치(또는 재설치)하지 않고, 오로지 XCode Command Line Tools를 다시 설치하여 해결하는 방법을 알아보자.

# node-gyp는 무엇일까?

그 전에 node-gyp가 무엇인지 간단하게 알아보자. 그것을 이해하기 위해서는 Node.js 애드온에 대해 먼저 설명이 필요하다.

**Node.js 애드온**은 C 또는 C++로 작성된 네이티브 모듈이기 때문에 실행하고자 하는 환경에서 작동하기 위해 컴파일을 해야 한다. 컴파일 후에는 다른 모듈(라이브러리)처럼 require()를 통해 사용할 수 있게 된다.

이때 애드온을 컴파일을 하기 위해 Node.js에서 node-gyp를 사용하게 된다. 이 과정에서 현재 환경에 설치된 Python, make, clang(or gcc)를 사용한다.

이것을 직접 사용 할 일이 있다면 모르겠지만 지금은 **여러 환경에서 동일한 커맨드로 빌드할 때 필요한 도구**정도로 이해하면 될 것 같다.

# 해결 방법

구글링 해보면 많은 방법이 있는데 그 중 XCode 설치(또는 재설치)를 제외하고 내 기준으로 잘 작동하는 해결 방법은 XCode Command Line Tools를 삭제하고 다시 설치하는 것이었다.

1. XCode Command Line Tools를 삭제한다.

```
sudo rm -rf /Library/Developer/CommandLineTools
```

1. 삭제 이후 다시 XCode Command Line Tools를 설치한다.

```
xcode-select --install
```

1. 설치 이후 문제가 해결되었는지 확인한다.

나의 맥북에서는 이 방법을 통해 해결할 수 있었다. 만약 이 방법도 적용되지 않는다면... 좀 더 힘내시길 바란다.
