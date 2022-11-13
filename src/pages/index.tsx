import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticleListPage } from '../components/ArticleListPage.gen';

export default ({ data }: PageProps<Queries.ArticleListPageQuery>) => {
  return (
    <ArticleListPage
      data={data.allMdx.nodes.map(node => ({
        id: node.id,
        frontmatter: node.frontmatter!,
        slug: node.fields?.slug!,
        date: node.frontmatter!.date,
        content: node.excerpt!,
      }))}
    />
  );
};

export const query = graphql`
  query ArticleListPage {
    allMdx(
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY. MM. DD.")
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`;
