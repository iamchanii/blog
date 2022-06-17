module Link = {
  @module("gatsby") @react.component
  external make: (~to: string, ~className: string=?, ~children: React.element) => React.element =
    "Link"
}

module MDXRenderer = {
  @module("gatsby-plugin-mdx") @react.component
  external make: (~children: React.element) => React.element = "MDXRenderer"
}
