open Deno
open Deno.Bindings
open Promise

@send external padStartWith: (string, int, string) => string = "padStart"

@val @scope(("import", "meta"))
external import_meta_url: string = "url"
let __dirname = URL.createWithBase(".", import_meta_url).pathname

module Answers = {
  type t = {
    slug: string,
    title: string,
  }

  external make: 'a => t = "%identity"
}

Ask.make()
->Ask.prompt([
  Ask.option(
    ~name="slug",
    ~message=`아티클 주소가 될 Slug를 입력해주세요.`,
    ~_type=#input,
    (),
  ),
  Ask.option(~name="title", ~message=`아티클 제목을 입력해주세요.`, ~_type=#input, ()),
])
->thenResolve(Answers.make)
->thenResolve(answers => {
  let now = Js.Date.make()
  let slug = {
    let year = now->Js.Date.getFullYear->Js.Float.toString
    let month = (now->Js.Date.getMonth +. 1.0)->Js.Float.toString->padStartWith(2, "0")
    let date = now->Js.Date.getDate->Js.Float.toString->padStartWith(2, "0")

    `${year}-${month}-${date}/` ++
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

  {
    "slug": slug,
    "templateText": [
      "---",
      `title: "${answers.title}"`,
      `date: "${now->Js.Date.toISOString}"`,
      "---",
      "",
      `<!-- 써보자고 -->`,
      `<!-- slug: ${slug} -->`,
    ]->Js.Array2.joinWith("\n"),
  }
})
->then(x => {
  let dir = Path.resolve([__dirname, "../..", "contents", x["slug"]])
  dir
  ->Fs.ensureDir
  ->then(_ => resolve({"dir": dir, "slug": x["slug"], "templateText": x["templateText"]}))
})
->thenResolve(x => {
  let target = Path.join([x["dir"], "index.md"])
  Deno.File.writeTextFile(target, x["templateText"])
})
->ignore
