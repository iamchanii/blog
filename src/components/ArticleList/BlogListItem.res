open React

module Styles = {
  let card = "flex flex-col gap-2 p-4 rounded-lg hover:bg-slate-50"

  let title = "font-bold"

  let date = "text-sm"
}

@react.component
let make = (~title, ~date, ~content, ~slug) => {
  <Gatsby.Link className=Styles.card to={slug}>
    <div>
      <p className=Styles.title> {title->string} </p>
      <time className=Styles.date> {date->string} </time>
    </div>
    <p> {content->string} </p>
  </Gatsby.Link>
}
