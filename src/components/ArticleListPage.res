type frontmatter = {title: string}

type blogListItem = {
  id: string,
  slug: string,
  date: string,
  frontmatter: frontmatter,
  content: string,
}

@react.component @genType
let make = (~data) => {
  module Styles = {
    let list = "-mx-4 flex flex-col gap-2"
  }

  let nodeToElement = x => {
    <ArticleListItem key=x.id title=x.frontmatter.title date=x.date content=x.content slug=x.slug />
  }
  let nodes = data->Js.Array2.map(nodeToElement)->React.array

  <Layout> <Meta title="Home" /> <div className=Styles.list> {nodes} </div> </Layout>
}
