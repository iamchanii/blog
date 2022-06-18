%%raw(`import '../styles/mdx.css';`)

@react.component @genType
let make = (~title, ~date, ~body, ~description, ~url) => {
  module Styles = {
    let info = "mb-6"
    let title = "font-bold text-3xl"
    let date = "text-sm"
  }

  <Layout className="py-4">
    <Meta title description url />
    <div className=Styles.info>
      <h1 className=Styles.title> {title->React.string} </h1>
      <time className=Styles.date> {date->React.string} </time>
    </div>
    <div id="mdx"> <Gatsby.MDXRenderer> {body} </Gatsby.MDXRenderer> </div>
    <Profile.Article />
  </Layout>
}
