open SiteMetadata

@react.component
let make = (~title, ~url="", ~description=?) => {
  let getUrl = url => (url->URL.createWithBase(metadata.siteUrl)).href

  <ReactHelmet titleTemplate={`%s | ${metadata.title}`}>
    <html lang="ko" />
    <title lang="ko"> {title->React.string} </title>
    <link rel="canonical" href={url->getUrl} />
    <meta
      name="description" content={description->Belt.Option.getWithDefault(metadata.description)}
    />
    <meta property="og:url" content={url->getUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={description->Belt.Option.getWithDefault(metadata.description)}
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={metadata.author} />

    // TODO:
    // <meta name="image" content={getUrl(imageUrl)} />
    // <meta property="og:image" content={getUrl(imageUrl)} />
    // <meta property="og:image:width" content={imageWidth.toString()} />
    // <meta property="og:image:height" content={imageHeight.toString()} />
  </ReactHelmet>
}
