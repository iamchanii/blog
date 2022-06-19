module Schema = {
  open SiteMetadata

  type t
  %%private(external identity: 'a => t = "%identity")

  let makeBlogPosting = (~url, ~title: string, ~isoDate: string, ~wordCount: int) => {
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": (url->URL.createWithBase(metadata.siteUrl)).href,
      },
      "headline": title,
      "author": {
        "@type": "Person",
        "name": metadata.author,
      },
      "datePublished": isoDate,
      "dateModified": isoDate,
      "wordCount": wordCount,
      "publisher": {
        "@type": "Organization",
        "name": "iamchanii",
        "logo": {
          "@type": "ImageObject",
          "url": "https://imch.dev/images/favicon.png",
        },
      },
    }->identity
  }
}

@module("react-schemaorg") @react.component
external make: (~item: Schema.t) => React.element = "JsonLd"
