type t
@val external deno: t = "Deno"

// @send external writeTextFile: (t, string, string) => Promise.t<unit> = "writeTextFile"

module File = {
  @scope("Deno") @val external writeTextFile: (string, string) => Promise.t<unit> = "writeTextFile"
}

module Bindings = {
  module Slug = {
    type slugOptions
    @obj
    external slugOptions: (~strict: bool=?, ~lower: bool=?, ~extends: {..}=?, unit) => slugOptions =
      ""

    @module("https://deno.land/x/slug@v0.1.1/mod.ts") external make: string => t = "slug"
    @module("https://deno.land/x/slug@v0.1.1/mod.ts")
    external makeWith: (string, slugOptions) => string = "slug"
  }

  module Ask = {
    type t
    @module("https://deno.land/x/ask@1.0.6/mod.ts") @new external make: unit => t = "default"

    type option
    type optionType = [#input]
    @obj
    external option: (~name: string, ~_type: optionType, ~message: string=?, unit) => option = ""

    @send external prompt: (t, array<option>) => Js.Promise.t<{..}> = "prompt"
  }
}

module Path = {
  @module("https://deno.land/std@0.144.0/path/mod.ts") @val @variadic
  external join: array<string> => string = "join"

  @module("https://deno.land/std@0.144.0/path/mod.ts") @val @variadic
  external resolve: array<string> => string = "resolve"
}

module Fs = {
  @module("https://deno.land/std@0.144.0/fs/mod.ts") @val
  external ensureDir: string => Promise.t<unit> = "ensureDir"
}
