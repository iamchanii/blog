const { linkResolver } = require('./src/utils/linkResolver');
const {
  getPrismicPostBodyHtmlConcat,
} = require('./src/utils/getPrismicPostBodyHtmlConcat');
const {
  getPrismicPostBodyTextExcerpt,
} = require('./src/utils/getPrismicPostBodyTextExcerpt');

module.exports = {
  siteMetadata: {
    title: 'imch.dev',
    description:
      '이찬희 개발 블로그입니다. 지금 제가 가장 관심있는 주제를 다루고 있습니다.',
    author: 'iamchanii',
    siteUrl: 'https://imch.dev',
  },
  plugins: [
    `gatsby-plugin-ts-config`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `imch.dev`,
        short_name: `imch.dev`,
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          './schema.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // TODO: use environment variable
        repositoryName: 'imch-dev',
        schemas: {
          post: require('./src/schemas/post.json'),
          about: require('./src/schemas/about.json'),
        },
        prismicToolbar: true,
        shouldDownloadImage: ({ node, key, value }) => true,
        linkResolver,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
            sitemap: 'https://imch.dev/sitemap.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `{
              allPrismicPost {
                nodes {
                  uid
                  first_publication_date
                  data {
                    title {
                      text
                    }
                    body {
                      __typename
                      ... on PrismicPostBodyText {
                        primary {
                          content {
                            text
                            html
                          }
                        }
                      }
                    }
                  }
                }
              }
            }`,
            serialize: ({ query: { site, allPrismicPost } }) => {
              return allPrismicPost.nodes.map(node => {
                const url = new URL(
                  `/posts/${node.uid}`,
                  site.siteMetadata.siteUrl
                );

                return {
                  title: node.data.title.text,
                  date: node.first_publication_date,
                  description: getPrismicPostBodyTextExcerpt(node.data.body),
                  url: url.href,
                  guid: url.href,
                  custom_elements: [
                    {
                      'content:encoded': getPrismicPostBodyHtmlConcat(
                        node.data.body
                      ),
                    },
                  ],
                };
              });
            },
            output: 'rss.xml',
            title: 'imch.dev RSS Feed',
            link: 'https://imch.dev',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149856137-1',
      },
    },
    // `gatsby-plugin-preact`,
  ],
};
