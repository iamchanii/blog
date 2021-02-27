import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../../graphql-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SeoProps {
  title: string;
  url: string;
  description?: string;
  ogType?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const SEO: FC<SeoProps> = ({
  title,
  url,
  description,
  ogType = 'article',
  imageUrl = 'https://imch.dev/images/default.png',
  imageWidth = 1200,
  imageHeight = 630,
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  const getUrl = (url: string) =>
    new URL(url, site?.siteMetadata?.siteUrl!).href;
  const pageDescription = description
    ? description
    : site?.siteMetadata?.description!;

  return (
    <Helmet titleTemplate={`%s | ${site?.siteMetadata?.title}`}>
      <html lang="ko" />
      <title lang="ko">{title}</title>
      <link rel="canonical" href={getUrl(url)} />
      <meta name="description" content={pageDescription} />
      <meta name="image" content={getUrl(imageUrl)} />
      <meta property="og:image" content={getUrl(imageUrl)} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:url" content={getUrl(url)} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site?.siteMetadata?.author!} />
    </Helmet>
  );
};

SEO.displayName = 'SEO';

/** Styles */
