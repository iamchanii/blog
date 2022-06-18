module Header = {
  module Styles = {
    let wrapper = "flex justify-between items-center h-12 px-4 mx-4"
    let logo = "font-bold text-primary"
    let about = "text-primary"
  }

  @react.component
  let make = () => {
    open SiteMetadata

    <header className=Styles.wrapper>
      <Gatsby.Link className=Styles.logo to="/"> {metadata.title->React.string} </Gatsby.Link>
      <Gatsby.Link className=Styles.about to="/about"> {"about"->React.string} </Gatsby.Link>
    </header>
  }
}

@genType @react.component
let make = (~className="", ~children) => {
  module Styles = {
    let main = "max-w-screen-container mx-auto leading-relaxed text-slate-800"
    let section = "px-4 mx-4"
  }

  <main className=Styles.main>
    <Header /> <section className={`${Styles.section} ${className}`}> children </section>
  </main>
}
