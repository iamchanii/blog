module Styles = {
  let main = "max-w-screen-container mx-auto leading-relaxed text-slate-800"
  let section = "px-4"
}

@genType @react.component
let make = (~className="", ~children) => {
  <main className=Styles.main>
    <Header /> <section className={`${Styles.section} ${className}`}> children </section>
  </main>
}
