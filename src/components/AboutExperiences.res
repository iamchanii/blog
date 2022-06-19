type item = Text(string) | TextWithLink(string, string)

type experience = {
  orgName: string,
  fromDate: string,
  endDate: string,
  items: array<item>,
}

@react.component
let make = () => {
  let experiences = [
    {
      orgName: `다노`,
      fromDate: "2020.04",
      endDate: "2022.05",
      items: [
        Text(`프론트엔드 팀 리드, 같이 잘 하는 팀을 만들기 위해 고민하고 있습니다.`),
        Text(`다노 웹 프로덕트에서 사용하기 위한 디자인 시스템을 만들었습니다.`),
        Text(`재사용할 수 있는 몇 개의 NPM 패키지를 만들어서 사내 NPM 저장소에 게시해서 사용했습니다.`),
        Text(`기존 프로젝트의 프론트엔드 유지보수, 리팩토링을 진행했습니다.`),
        TextWithLink(
          `네이버 데브톡에서 디자인 시스템 개발을 주제로 발표를 진행했습니다.`,
          "https://tv.naver.com/v/20411175/list/196655",
        ),
        Text(`Next.js 기반으로 다노 앱 매거진 프론트를 리뉴얼했습니다.`),
        Text(`다노 앱의 함께하기 탭 프론트를 개발했습니다.`),
        Text(`다노의 브랜드를 소개하고 다노핏, 다노핏코치를 결제할 수 있는 프로젝트를 진행했습니다.`),
        TextWithLink(
          `React Query를 쉽게 사용할 수 있는 라이브러리를 오픈소스로 공개했습니다.`,
          "https://github.com/dano-inc/react-query-helper",
        ),
      ],
    },
    {
      orgName: `플러스티브이`,
      fromDate: "2018.12",
      endDate: "2020.03",
      items: [
        Text(`디지털 사이니지 관리 도구(CMS)를 개발. 리액트와 타입스크립트를 사용하였습니다.`),
        Text(`LinguiJS를 사용한 국제화(i18n) 작업 진행.`),
      ],
    },
    {
      orgName: `타운컴퍼니`,
      fromDate: "2018.03",
      endDate: "2018.11",
      items: [
        Text(`Angular 기반의 타운어스 개발.`),
        Text(`신규 사업 관련 프로토타입 개발.`),
      ],
    },
    {
      orgName: `테이블매니저`,
      fromDate: "2017.01",
      endDate: "2018.02",
      items: [Text(`AngularJS와 Express 기반의 테이블매니저 개발.`)],
    },
  ]

  let itemToElement = (item, index) => {
    module Styles = {
      let link = "text-primary dark:text-primary-dark hover:underline"
    }

    <li key={index->Js.Int.toString}>
      {switch item {
      | Text(x) => x->React.string
      | TextWithLink(x, href) => <>
          {`${x} `->React.string}
          <a href target="_blank" className=Styles.link> {`(링크)`->React.string} </a>
        </>
      }}
    </li>
  }

  let experienceToElement = ({orgName, fromDate, endDate, items}, index) => {
    module Styles = {
      let header = "mb-2"
      let orgName = "text-lg font-bold"
      let range = "text-sm"
      let items = "list-disc ml-8"
    }

    <li key={index->Js.Int.toString}>
      <header className=Styles.header>
        <h3 className=Styles.orgName> {orgName->React.string} </h3>
        <aside className=Styles.range> {`${fromDate} ~ ${endDate}`->React.string} <span /> </aside>
      </header>
      <ul className=Styles.items> {items->Js.Array2.mapi(itemToElement)->React.array} </ul>
    </li>
  }

  module Styles = {
    let experience = "font-bold my-4 pb-2 border-b border-y-slate-100 dark:border-y-slate-600"
    let experienceList = "flex flex-col gap-6"
  }

  <section>
    <h2 className=Styles.experience> {"Experiences"->React.string} </h2>
    <ul className=Styles.experienceList>
      {experiences->Js.Array2.mapi(experienceToElement)->React.array}
    </ul>
  </section>
}
