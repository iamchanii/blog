---
title: "Netlify 환경에서 GenType 패키지 설치 이슈 해결하기"
date: "2022-06-19T12:43:32.630Z"
---

블로그를 새로 리뉴얼하면서, 그동안 관심있게 보던 [ReScript](https://rescript-lang.org/)를 사용해봤다. 여전히 익혀야 할 부분이 많이 남아 있지만,
ReScript가 왜 괜찮으면서 **재미있는지** 알 것 같기도 하다. 이 주제는 조만간 블로그 리뉴얼 주제로 다시 다뤄보기로 하고.

내 블로그의 빌드와 배포를 포함한 관리 일체를 [Netlify](https://www.netlify.com/)를 통해서 진행하고 있다.
지금까지는 큰 문제없이 사용하고 있었는데, 리뉴얼 이후 배포하는 과정에서 문제가 발생했다.

## executable not found...

빌드 로그를 살펴보니, 패키지 의존성을 설치 후 링크하는 과정에서 genType 패키지가 오류를 발생시키고 있었다.

```
gentype@npm:4.4.0 STDERR error: executable not found: /opt/build/repo/node_modules/gentype/vendor-linux/gentype.exe
gentype@npm:4.4.0 couldn't be built successfully (exit code 1, logs can be found here: /tmp/xfs-d7a49e4b/build.log)
```

`/opt/build/repo/node_modules/gentype/vendor-linux/gentype.exe`가 없어서 에러가 발생했다. 이 로그만 봐서는 이해가 되지 않았다. genType의 바이너리는 왜 해당 위치에 없는걸까?

우선 **Clear cache and retry deploy**를 통해 빌드 캐시를 제거한 하고 다시 시도를 해봤다.

## 범인은 캐싱?

큰 기대 없이 시도해봤는데 빌드까지 성공적으로 진행되었다. 성공한 빌드의 로그를 살펴봐도 `executable not found`와 관련된 로그는 찾아볼 수 없었다. 원인이 뭘까 고민하던 찰나, 이런 로그를 발견했다.

```
11:18:14 PM: Started restoring cached yarn cache
11:18:14 PM: Finished restoring cached yarn cache
```

캐시가 없는 상태에서 빌드까지 성공을 하면, 해당 상태를 캐시로 저장하고, 다음 빌드에서 캐시를 활용하면 작업 속도에서 분명히 이점이 있을 것이다. 아마도, 아마도 이 캐시가 분명 문제라고 생각해서 Netlify의 캐시를 비활성화하는 방법이나 하다못해 특정 경로만 캐시가 되지 않도록 하기 위한 묘수를 고민하기 시작했다.

그런데 캐싱에 책임을 묻는게 영 아닌 것 같았다. 막말로 집이 화재로 전소했다고 해서 목조건축 탓을 할 수는 없지 않나. 보다 근본적인 문제를 해결하고 싶어서 gentype 패키지의 내부를 살펴봤다.

## 범인은 `postinstall`?

`executable not found`를 단서로 해서 패키지를 살펴보니 `postinstall` 단계에서 실행하는 코드에 해당 메시지를 표시하는 로직이 있었다.

```js
// https://github.com/rescript-association/genType/blob/master/dist/postinstall.js#L17-L25
function movePlatformBinary(platform) {
  const sourcePath = getPlatformBinaryPath(platform);

  if (!fs.existsSync(sourcePath)) {
    // 바로 여기.
    return fail('error: executable not found: ' + sourcePath);
  }
  fs.renameSync(sourcePath, targetPath);
  fs.chmodSync(targetPath, 0777);
}
```

전체적으로 살펴보니, gentype은 실행 환경에 따라 미리 빌드된 바이너리를 패키지 루트로 옮기는 작업을 `postinstall` 단계에서 수행한다. 예를 들어, 맥의 경우 `{package_root}/darwin/gentype.exe` 파일을 `{package_root}/gentype.exe`로 옮기는 작업이 수행된다.

## 문제 해결하기

원래대로라면 이 `postinstall`은 최초 한 번만 실행되면 다시 실행될 일이 없을텐데, Netlify가 캐싱을 하면서 무언가 잘못 된 것 같다.

내 생각에는 `node_modules`가 캐싱이 되지만 `node_modules/.yarn-state.yml`은 캐싱이 안되는게 아닐까? 그래서 매번 빌드할 때 마다 링킹을 시도하는데, `node_modules/gentype/{platform}/gentype.exe`가 없는 상태로 캐싱이 되어서 `executable not found`를 뱉는 것 같다.

이 가설을 검증하기 위해 gentype의 `postinstall.js` 파일을 수정하기로 했다. `yarn patch`[^1]를 활용해서 gentype 패키지를 수정했다.

[^1]: https://yarnpkg.com/cli/patch

```
$ yarn patch gentype
```

`postinstall.js` 내부의 `renameSync`를 `copyFileSync`로 바꾸는게 가장 간단하지만, 그러면 바이너리 하나 만큼의 크기가 계속 차지하기 때문에, 복사하려는 위치에 바이너리가 있는 경우에 대한 분기를 추가했다.

```diff
 function movePlatformBinary(platform) {
   const sourcePath = getPlatformBinaryPath(platform);
 
-  if(!fs.existsSync(sourcePath)) {
-    return fail("error: executable not found: " + sourcePath);
+  if (fs.existsSync(sourcePath)) {
+    fs.renameSync(sourcePath, targetPath);
+    fs.chmodSync(targetPath, 0777);
+    return;
+  }
+ 
+  if (fs.existsSync(targetPath)) {
+    const text = fs.readFileSync(targetPath, { encoding: 'utf8' });
+    if (/gentype was not installed correctly/.test(text)) {
+      return fail('error: executable not found: ' + sourcePath);
+    }
   }
-  fs.renameSync(sourcePath, targetPath);
-  fs.chmodSync(targetPath, 0777);
  }
```

이후 `yarn patch-commit`[^2]을 통해 변경 사항을 저장해주면, `package.json` 파일에 `resolutions`[^3] 항목이 추가된다. 이 항목에 의해, gentype 패키지는 변경 사항이 적용된 패키지가 설치된다.

[^2]: https://yarnpkg.com/cli/patch-commit
[^3]: https://yarnpkg.com/configuration/manifest#resolutions

```shell
yarn patch-commit -s /private/var/folders/gl/.../user
```

커밋을 업스트림으로 날려 확인해보니, 그제서야 정상적으로 빌드가 되는 것을 볼 수 있었다. 이 해결 방법은 꼭 Netlify가 아니더라도 빌드 캐시가 구성된 CI 환경에서도 동일하게 적용할 수 있을 것 같다.

아니면 Yarn PnP를 사용하고 적당히 unplug를 하면 되려나 싶은데, 그건 나중에 확인해보기로.
