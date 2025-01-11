---
title: "Brewfile을 이용해서 팀 개발 환경 만들기"
date: 2019-10-17
---

플러스티브이 개발팀은 도커를 이용해서 개발 환경을 맞춘 다음 로컬 환경에서 개발합니다. 원할한 협업을 위해 개발 환경을 설정하는건 중요한 일이지만, 조금 번거롭고 시간이 소요되는 작업입니다. 그러나 불가피하게 맥북을 초기화를 했거나(😱) 이번에 팀에 새로 합류하신 분(🙋‍♂️)은 필수로 진행해야 하죠.

그러던 중 [이 글](https://healingpaper.github.io/2019/08/18/brew%5Fcask%5Fmas.html)을 읽고 개발 환경을 한 방에 설정할 수 있다면, 개발 환경 구성은 더 이상 번거로운 일이 아닐 수 있다는 생각이 들었습니다.

## 왜 자동화가 필요할까?

그렇다면 개발 환경 구성을 자동으로 해야하는 이유가 뭘까요?

1. 먼저 생각보다 시간을 **많이** 잡아먹습니다. 그동안 플러스티브이 개발팀은 짧은 README.md 정도의 분량으로 개발 환경을 구성하는 방법을 정리 해 놨었지만, 굉장히 핵심 위주로만 정리 되어 있었기 때문에 새로 오시는 분들은 조금 헤메기도 합니다. 개발 환경 구성에 익숙하지 않은 분들은 하루 내지는 이틀까지 개발 환경을 구성하기도 했습니다. (🙏)
2. 시간을 많이 잡아먹는다 = 시간이 **낭비**가 됩니다. 특히 새로 오신 분들은 개발 환경 구성 외에도 이것_(슬랙)_ 저것_(GSuite)_... 할게 많기 때문에...
3. 개발 환경 구성에 대한 문서를 순서대로 따르지 않을 가능성이 있습니다. 주로 _'내가 배포까지 하겠어?'_ 하는 마음으로 일부 과정을 지나치거나, _'이건 백엔드 할 때 필요하니까...'_ 라고 판단하고 넘어 갈 수 있습니다. 개발자들에게 공통적으로 필요한 패키지나 애플리케이션을 자동으로 설치하면 이런 문제를 예방할 수 있습니다.

## 프로비저닝 스크립트 작성

프로비저닝 스크립트는 Homebrew의 bundle 기능을 이용하고 약간의 쉘 스크립트를 사용해서 만들 수 있습니다.

### Brewfile?

Homebrew에는 [bundle](https://github.com/Homebrew/homebrew-bundle) 기능이 있습니다.

```
$ brew bundle dump
```

brew bundle dump 를 사용하면 사용하고 있는 맥에 설치된 Homebrew 패키지들을 Brewfile 로 뽑아낼 수 있습니다.

```
$ cat Brewfile

# 출력 내용
tap "caskroom/fonts"
tap "cjbassi/gotop"
tap "dart-lang/dart"
tap "getsentry/tools"
tap "homebrew/bundle"
tap "homebrew/cask"
tap "homebrew/cask-drivers"
tap "homebrew/cask-fonts"
tap "homebrew/cask-versions"
tap "homebrew/core"
tap "vitorgalvao/tinybashs"
brew "autojump"
brew "awscli"
brew "bat"
brew "git-flow-avh"
brew "mysql"
brew "mysql@5.7"
brew "zsh-autosuggestions"
brew "zsh-syntax-highlighting"
brew "dart-lang/dart/dart"
brew "vitorgalvao/tinybashs/cask-repair"
cask "alacritty"
cask "font-hack-nerd-font"

# 다른 맥에서 입력
$ brew bundle
```

생성된 Brewfile을 다른 맥에서 복사한 뒤, brew bundle 명령어를 입력하면 그대로 설치할 수 있습니다. 이 기능이 프로비저닝 스크립트의 핵심입니다.

### tap? brew? cask?

Brewfile 파일에서 앞부분에 적혀있는 tap, brew 그리고 cask에 대해 알아보았습니다.

#### tap

- 먼저 탭에 대한 개념은 Homebrew 내의 기본 저장소(Formulae 라고도 함) 외의 서드 파티 저장소입니다.
- brew tap 명령어를 입력하면 지금 내 맥북에 추가된 탭 목록을 확인할 수 있습니다.
- brew tap `<user/repo>`를 입력하면 탭을 추가할 수 있고, brew install을 통해 설치할 때 해당 저장소를 사용할 수 있습니다.
- 입력할 때 `<user/repo>`는 기본적으로 GitHub 저장소를 가정하고 추가되며, repo 이름은 homebrew-\*로 시작하는 저장소여야 하지만 실제로 추가할 때에는 homebrew-\* 접두사를 생략해도 됩니다. 실제로 homebrew/bundle라는 탭은 https://github.com/homebrew/homebrew-bundle 에서 내용을 확인할 수 있습니다.

#### brew

- brew "package\_name"은 해당 패키지를 설치합니다. 기본 저장소를 포함하여 추가된 탭을 참조합니다.

#### cask

- cask는 Homebrew로 설치하지 않는, 외부 애플리케이션을 설치할 수 있습니다.

#### mas

- 추가적으로 mas를 사용할 수 있습니다. mas는 App Store에서 설치할 수 있는 애플리케이션을 명령어로 설치할 수 있습니다.

### 플러스티브이 개발팀은 어떤 패키지를 사용할까?

간단하게 플러스티브이 개발팀에서 개발 환경을 구성할 때 설치하는 패키지 및 애플리케이션을 정리 해 보자면,

- docker: 플러스티브이 개발팀은 도커를 사용하여 로컬 개발 환경을 구성합니다.
- python3: 플러스티브이 디지털 사이니지 솔루션의 백엔드는 파이썬(플라스크)를 사용하여 개발하였습니다. 릴리즈 된 도커 이미지로 로컬에서 실행하지만, 일부 스크립트를 실행하려면 파이썬이 필요합니다.
- node@10, yarn
- awscli: 현재 AWS 클라우드를 사용하고 있어서 배포하기 위해 awscli 를 설치합니다.
- git-flow-avh: 플러스티브이 개발팀은 Git-Flow 를 일부 채택한 버전 관리를 하고 있습니다.
- mysql@8
- iterm2, google-chrome, zeplin, slack

그 외, 플러스티브이 개발팀은 InteliJ IDE를 공통적으로 사용하기 때문에 프론트엔드는 WebStorm을, 백엔드는 PyCharm을 설치합니다.

### Brewfile 작성하기

플러스티브이 개발팀의 프로비저닝 스크립트는 common.Brewfile, frontend.Brewfile, backend.Brewfile 3개로 나눠서 작성되었지만, 이 글에서는 common.Brewfile에 대해서 설명하겠습니다.

#### common.Brewfile 생성

먼저 common.Brewfile 을 생성합니다.

```
$ touch common.Brewfile
```

확장자를 .Brewfile로 해야하는 것은 아니지만, 이 파일이 Homebrew 번들 파일이라는 것을 쉽게 인지하기 위함입니다. 이 경우 나중에 brew bundle 을 실행할 때 --file 플래그를 지정해야 합니다.

#### homebrew/cask 탭 추가

생성한 common.Brewfile에 tap "homebrew/cask"를 추가합니다.

```
tap "homebrew/cask"
```

#### 설치하고자 하는 brew, cask 추가

탭을 추가한 다음, 그 밑으로는 설치하고자 하는 패키지를 brew 또는 cask를 사용해서 추가합니다. 이 글에서는 다루지 않지만, 필요한 경우 앱스토어에서 설치할 수 있는 mas를 사용할 수 있습니다.

brew search 명령어를 사용하면 설치하고자 하는 패키지의 이름을 찾을 수 있습니다.

```
// 검색하고자 하는 키워드를 입력합니다.
$ brew search python

// Formulae는 brew "package_name" 으로 추가
==> Formulae
app-engine-python   ipython             python-yq
boost-python        ipython@5           python@2
boost-python3       micropython         wxpython
boost-python@1.59   python              zpython
gst-python          python-markdown

// Casks는 cask "package_name" 으로 추가합니다.
==> Casks
awips-python                   mysql-connector-python
kk7ds-python-runtime
```

만약 검색 결과에 나오지 않는다면 [새로운 Cask를 추가하는 PR을 보내거나](https://github.com/Homebrew/homebrew-cask/blob/master/doc/development/adding%5Fa%5Fcask.md) 누군가 추가해 줄 때까지 기다려야 합니다.

지금까지 작성한 common.Brewfile의 내용은 아래와 같습니다.

```
tap "homebrew/cask"

brew "python3"
brew "node@10"
brew "yarn"
brew "awscli"
brew "git-flow-avh"
brew "mysql"

cask "docker"
cask "iterm2"
cask "google-chrome"
cask "zeplin"
cask "slack"
```

#### common.sh 스크립트 작성

이제 작성한 common.Brewfile을 실행하고, 몇가지 필요한 작업을 수행하는 common.sh 스크립트를 작성합니다. 먼저 common.sh 파일을 생성합니다.

```
$ touch common.sh
```

그 다음, 이 파일을 bash로 실행할 수 있도록 파일 최상단에 해시뱅(hashbang)을 추가합니다.

```
#!/usr/bin/env bash
```

이 다음부터 일련의 작업을 수행하면 됩니다. 플러스티브이 프로비저닝 스크립트는 아래 순서대로 작업을 진행합니다.

1. Homebrew 설치 여부 확인. 설치가 되어있으면 넘어가거나 Homebrew 를 설치.
2. 스크립트 내에서 일부 sudo 권한이 필요한 명령을 수행하기 위해 루트 패스워드를 입력 받음.
3. brew bundle 실행.
4. cask로 설치한 애플리케이션을 바로 실행하기 위해 다운로드 된 파일에 대한 격리 속성 제거.
5. AWS 인증 정보 설정

첫번째로 Homebrew가 설치되었는지 확인하고, 되어있지 않다면 Homebrew를 설치합니다. Homebrew가 설치되었는지 여부는 which 명령어로 확인합니다.

```
if ! which brew
then
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi
```

두번째, 일부 sudo 권한이 필요한 명령, 특히 4번의 **설치한 애플리케이션을 바로 실행하기 위해 다운로드 된 파일에 대한 격리 속성 제거** 작업을 수행하기 위해 sudo 권한이 필요한데요, 이를 위해 스크립트를 sudo로 실행하면 brew bundle 작업에도 영향을 받습니다. 특히 Homebrew는 sudo로 실행하면 위험성 때문에 에러 메세지를 표시합니다. 따라서 필요한 경우에만 sudo를 사용하기 위해 루트 패스워드를 입력 받습니다.

```
read -r -s -p "[sudo] sudo password for $(whoami):" pass
```

세번째, 작성한 common.Brewfile 파일을 brew bundle 명령어로 설치합니다. 아까 잠깐 설명한 대로 --file 플래그를 사용하여 어떤 파일을 읽을 것인지 결정할 수 있습니다. 이 플래그가 없으면 기본적으로 현재 위치의 Brewfile을 참조합니다.

```
brew bundle --file=./common.Brewfile
```

네번째, cask로 설치한 애플리케이션을 바로 실행하기 위해 다운로드 된 파일에 대한 격리 속성을 제거합니다. 사소한 편의성을 제공하는 차원에서 격리 속성을 제거하지만, 보안 측면에서 안심할 수 없다면 이 작업을 꼭 할 필요는 없습니다.

```
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/Docker.app
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/iTerm.app
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/Google\ Chrome.app
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/Zeplin.app
echo "$pass" | sudo -S xattr -dr com.apple.quarantine /Applications/Slack.app
```

다섯번째, awscli를 사용하여 AWS 인증 정보를 설정합니다.

```
aws configure
```

모든 작업이 성공적으로 되었다는 가정 하에 새로 오신 분들을 위한 축하 메세지를 출력 해 주고,

```
printf '\n\n🎉 Congrat! Your mac has been set up successfully for working with PlusTV Team!\n'
```

저장한 다음, 작성한 스크립트 파일에 실행 권한 추가하는 것을 잊지 마세요!

```
$ chmod +x ./common.sh
```

## 테스트

간단한 스크립트지만 실제로 실행하기 전까지는 예상한 대로 잘 작동할지는 모르는 법. 프로비저닝 스크립트를 작성 한 뒤에는 꼭 실행 결과를 확인해봐야 합니다. 그렇지 않으면 _'저... 이 스크립트 중간에 멈춥니다.'_ (앗, 아아...) 같은 상황이 발생합니다. 작동하지 않는 스크립트는 의미가 없기 때문에 꼭꼭꼭 테스트를 해보세요.

그렇다고 지금 잘 사용하고 있는 맥북에서 실행하는 건...(🤦) 안되기 때문에 [이 링크](https://engineering.rallyhealth.com/tools/mac/virtualization/2018/04/27/mac-on-mac-virtualization.html)를 참고해서 Parallels에서 테스트를 진행하세요. 저는 이 과정을 통해 스크립트에서 잘못된 점을 많이 고칠 수 있었습니다. 특히 스냅샷 기능을 활용하여 손쉽게 몇번이고 초기 상태로 돌아와 다시 스크립트를 실행해 볼 수 있어 편리했습니다. 👍

가상 머신에서는 도커를 정상적으로 확인할 수 없으므로 실제 셋팅되지 않은 맥북에서 확인하는 것도 중요합니다. 단, 실제 맥북은 이전 상태로 돌아가기가 쉽지 않으니 실제 맥북은 테스트의 최종 단계에서 진행하는걸 권장합니다. (오피스에 여분의 맥북이 많다면 괜찮을지도 🤭)

## 마치며

프로비저닝 스크립트는 만드는게 어렵지 않지만 그동안 귀찮아서, 바빠서, 나는 이미 했으니까(팩트) 등 이런 저런 이유로 미뤄온 부분이 있었는데, 이 작업으로 앞으로 오실 분들에게 큰 도움이 될 것으로 기대되고, 그만큼 입사 초반에 개발 환경 외에 해야하는 작업에 더 집중할 수 있기를 바랍니다. 읽어주셔서 감사합니다!

## References

- [Homebrew 로 Mac 한 방에 셋업하기](https://healingpaper.github.io/2019/08/18/brew%5Fcask%5Fmas.html)
- [A complete one-by-one guide to install Docker on your Mac OS using Homebrew](https://medium.com/@yutafujii%5F59175/a-complete-one-by-one-guide-to-install-docker-on-your-mac-os-using-homebrew-e818eb4cfc3)
- [Adding a Cask](https://github.com/Homebrew/homebrew-cask/blob/master/doc/development/adding%5Fa%5Fcask.md)
- https://support.apple.com/ko-kr/HT201940
- https://stackoverflow.com/a/49580997
- https://github.com/Homebrew/homebrew-bundle#install
- [Mac on Mac Virtualization](https://engineering.rallyhealth.com/tools/mac/virtualization/2018/04/27/mac-on-mac-virtualization.html)
