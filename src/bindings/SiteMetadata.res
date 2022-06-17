type t = {
  title: string,
  description: string,
  author: string,
  siteUrl: string,
}

@module("../../gatsby-metadata") external metadata: t = "metadata"
