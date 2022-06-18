@module("../images/taken.svg") external taken: string = "default"

@react.component @genType
let make = () => {
  module Styles = {
    let taken = "w-64 h-64 object-contain"
    let text = "mt-12"
  }

  <Layout className="flex flex-col items-center py-16">
    <img className=Styles.taken src={taken} alt="" width="256" height="256" />
    <p className=Styles.text> {`페이지를 찾을 수 없습니다.`->React.string} </p>
  </Layout>
}
