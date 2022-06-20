open Deno.Bindings
open Promise

@send external padStartWith: (string, int, string) => string = "padStart"

@val @scope(("import", "meta"))
external url: string = "url"
let __dirname = URL.createWithBase(".", url).pathname

let now = Js.Date.make()

module Answers = {
  type t = {
    slug: string,
    title: string,
  }

  external make: 'a => t = "%identity"

  let getSlug = (answers: t, date: Js.Date.t) => {
    let formattedNow = {
      let year = date->Js.Date.getFullYear->Js.Float.toString
      let month = (date->Js.Date.getMonth +. 1.0)->Js.Float.toString->padStartWith(2, "0")
      let date = date->Js.Date.getDate->Js.Float.toString->padStartWith(2, "0")

      `${year}-${month}-${date}`
    }

    let sluggified = {
      answers.slug->Slug.makeWith(
        Slug.slugOptions(
          ~lower=true,
          ~strict=true,
          ~extends={
            ".": "-",
          },
          (),
        ),
      )
    }

    `${formattedNow}/${sluggified}`
  }

  let getMarkdownTemplate = (answers: t, date: Js.Date.t) =>
    [
      "---",
      `title: "${answers.title}"`,
      `date: "${date->Js.Date.toISOString}"`,
      "---",
      "",
      `<!-- ... -->`,
    ]->Js.Array2.joinWith("\n")

  let getContentDirPath = (answers: t, date: Js.Date.t) =>
    Deno.Path.resolve([__dirname, "../..", "contents", answers->getSlug(date)])

  let getContentMarkdownPath = (answers: t, date: Js.Date.t) =>
    Deno.Path.join([answers->getContentDirPath(date), "index.md"])
}

{
  open! Ask
  make()->prompt([
    option(
      ~name="slug",
      ~message=`아티클 주소가 될 Slug를 입력해주세요.`,
      ~_type=#input,
      (),
    ),
    option(~name="title", ~message=`아티클 제목을 입력해주세요.`, ~_type=#input, ()),
  ])
}
->thenResolve(Answers.make)
->then(x => x->Answers.getContentDirPath(now)->Deno.Fs.ensureDir->thenResolve(_ => x))
->then(x =>
  x
  ->Answers.getContentMarkdownPath(now)
  ->(x
  ->Answers.getMarkdownTemplate(now)
  ->Deno.File.writeTextFile)
)
->ignore
