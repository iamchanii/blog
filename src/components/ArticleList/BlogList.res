open React
open Belt

type frontmatter = {title: string}
type blogListItem = {
  id: string,
  slug: string,
  date: string,
  frontmatter: frontmatter,
  content: string,
}

module Styles = {
  let list = "-mx-4 flex flex-col gap-2"
}

@genType @react.component
let make = (~data) => {
  let items =
    data
    ->Array.map(x => {
      <BlogListItem key=x.id title=x.frontmatter.title date=x.date content=x.content slug=x.slug />
    })
    ->array

  <Layout> <div className=Styles.list> {items} </div> </Layout>
}
