import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticleListPage } from '../components/ArticleListPage.gen';

export default ({ data }: PageProps<Queries.ArticleListPageQuery>) => {
  return (
    <ArticleListPage
      data={data.allMdx.nodes.map(node => ({
        id: node.id,
        frontmatter: node.frontmatter!,
        slug: node.slug!,
        date: node.frontmatter!.date,
        content: node.excerpt,
      }))}
    />
  );
};

export const query = graphql`
  query ArticleListPage {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "YYYY. MM. DD.")
        }
        excerpt(truncate: true, pruneLength: 150)
      }
    }
  }
`;
