import { GatsbyNode } from 'gatsby';
import readingTime from 'reading-time';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`#graphql
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      description: String!
      author: String!
      siteUrl: String!
    }

    type MdxFrontmatter {
      title: String!
      date: Date! @dateformat
    }
  `);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  if (node.internal.type === `Mdx`) {
    const value = node.internal.contentFilePath!
      .replace(/^.+\/contents/, '')
      .replace(/\/index.md$/, '');

    actions.createNodeField({
      node,
      name: `slug`,
      value,
    });

    actions.createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    });
  }
};
