@react.component @genType
let make = (~title, ~date, ~description, ~url, ~isoDate, ~wordCount, ~children) => {
  module Styles = {
    let info = "mb-6"
    let title = "font-bold text-3xl"
    let date = "text-sm"
    let article =
      [
        `prose prose-slate dark:prose-invert`,
        `prose-a:text-primary dark:prose-a:text-primary-dark prose-a:no-underline max-w-none`,
        `prose-h2:text-xl`,
        `prose-h3:text-lg`,
        `prose-h4:text-base`,
      ]->Js.Array2.joinWith(" ")
  }

  <Layout className="py-4">
    <Meta title description url />
    <JsonLd item={JsonLd.Schema.makeBlogPosting(~url, ~title, ~isoDate, ~wordCount)} />
    <div className=Styles.info>
      <h1 className=Styles.title> {title->React.string} </h1>
      <time className=Styles.date> {date->React.string} </time>
    </div>
    <article className={Styles.article}> {children} </article>
    <Profile.Article />
  </Layout>
}
