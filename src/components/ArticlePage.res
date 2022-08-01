@react.component @genType
let make = (~title, ~date, ~body, ~description, ~url, ~isoDate, ~wordCount) => {
  module Styles = {
    let info = "mb-6"
    let title = "font-bold text-3xl"
    let date = "text-sm"
    let article = "prose prose-slate lg:prose-lg dark:prose-invert prose-a:text-primary dark:prose-a:text-primary-dark prose-a:no-underline max-w-none"
  }

  <Layout className="py-4">
    <Meta title description url />
    <JsonLd item={JsonLd.Schema.makeBlogPosting(~url, ~title, ~isoDate, ~wordCount)} />
    <div className=Styles.info>
      <h1 className=Styles.title> {title->React.string} </h1>
      <time className=Styles.date> {date->React.string} </time>
    </div>
    <article className={Styles.article}>
      <Gatsby.MDXRenderer> {body} </Gatsby.MDXRenderer>
    </article>
    <Profile.Article />
  </Layout>
}
