module Styles = {
  let wrapper = "flex justify-between items-center h-12 px-4"

  let logo = "font-bold text-primary"

  let about = "text-primary"
}

@react.component
let make = () => {
  open React
  open SiteMetadata

  <header className=Styles.wrapper>
    <Gatsby.Link className=Styles.logo to="/"> {metadata.title->string} </Gatsby.Link>
    <Gatsby.Link className=Styles.about to="/about"> {"about"->string} </Gatsby.Link>
  </header>
}
