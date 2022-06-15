import type { GatsbyConfig } from 'gatsby';
import { metadata } from './gatsby-metadata';

const config: GatsbyConfig = {
  siteMetadata: {
    ...metadata,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './src/contents/',
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `#graphql
          query FeedQuery {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: (
              {
                query: { site, allMdx },
              }: {
                query: { site: Queries.Site; allMdx: Queries.MdxConnection };
              },
            ) =>
              allMdx.nodes.map((node) => {
                const url = new URL(node.slug!, site.siteMetadata.siteUrl).toString();

                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: (node.parent as Queries.File).birthTime,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              }),
            query: `#graphql
              {
                allMdx(
                  sort: { order: DESC, fields: [] }
                ) {
                  nodes {
                    excerpt
                    html
                    slug
                    frontmatter {
                      title
                    }
                    parent {
                      ... on File {
                        birthTime
                      }
                    }
                  }
                }
              }
            `,
            output: 'rss.xml',
            title: `${metadata.title} RSS Feed'`,
            link: metadata.siteUrl,
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149856137-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: metadata.title,
        short_name: metadata.title,
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};

export default config;
