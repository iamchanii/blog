%%raw(`import './Content.css';`)

open React

module Styles = {
  let info = "mb-6"

  let title = "font-bold text-3xl"

  let date = "text-sm"
}

@react.component @genType
let make = (~title, ~date, ~body) => {
  <Layout className="py-4">
    <div className=Styles.info>
      <h1 className=Styles.title> {title->string} </h1>
      <time className=Styles.date> {date->string} </time>
    </div>
    <div id="mdx"> <Gatsby.MDXRenderer> {body} </Gatsby.MDXRenderer> </div>
  </Layout>
}
