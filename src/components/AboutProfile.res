@react.component
let make = () => {
  let name = `이찬희`
  let description = `
    프론트엔드 엔지니어 이찬희 입니다. 최근에는 리액트와 타입스크립트를 사용하여 즐겁게 개발하고 있습니다.
    UX/UI에 관심이 있으며 현재 다음 단계를 위해 잠시 쉬고 있습니다.
  `
  let githubUrl = "https://github.com/iamchanii"
  let githubAvatar = `${githubUrl}.png`

  module Styles = {
    let wrapper = "mb-6"
    let name = "font-bold"
    let avatar = "rounded-full w-32 h-32 my-8"
    let githubUrl = "text-primary font-bold text-sm hover:underline"
  }

  <div className=Styles.wrapper>
    <img className=Styles.avatar src={githubAvatar} alt="" width="128" height="128" />
    <div>
      <strong className=Styles.name> {name->React.string} </strong>
      <p> {description->React.string} </p>
      <a className=Styles.githubUrl href=githubUrl target="_blank"> {"GitHub"->React.string} </a>
    </div>
  </div>
}
