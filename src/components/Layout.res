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
  open SiteMetadata

  module Styles = {
    let main = "max-w-screen-container mx-auto leading-relaxed text-slate-800 mb-16"
    let footer = "text-center text-xs text-slate-500 mt-16"
    let section = "px-4 mx-4"
  }

  let year = {
    let date = Js.Date.make()
    date->Js.Date.getFullYear
  }

  <main className=Styles.main>
    <Header />
    <section className={`${Styles.section} ${className}`}> children </section>
    <footer className=Styles.footer>
      {`© ${year->Js.Float.toString} ${metadata.author}`->React.string}
    </footer>
  </main>
}
