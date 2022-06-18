import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticleListPage } from '../components/ArticleListPage.gen';

export default ({ data }: PageProps<Queries.ArticleListPageQuery>) => {
  return (
    <ArticleListPage
      data={data.allFile.nodes.map(node => ({
        id: node.childMdx!.id,
        frontmatter: node.childMdx!.frontmatter!,
        slug: node.childMdx!.slug!,
        date: node.birthTime,
        content: node.childMdx!.excerpt,
      }))}
    />
  );
};

export const query = graphql`
  query ArticleListPage {
    allFile(
      filter: {childMdx: {id: {ne: null}}}
      sort: {fields: birthTime, order: DESC}
    ) {
      nodes {
        birthTime(formatString: "YYYY. MM. DD.")
        childMdx {
          id
          slug
          frontmatter {
            title
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
