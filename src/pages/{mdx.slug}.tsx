import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticlePage } from '../components/ArticlePage.gen';

export default ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  return (
    <ArticlePage
      title={data.mdx!.frontmatter!.title}
      date={(data.mdx!.parent as Queries.File).birthTime}
      body={data.mdx!.body as any}
    />
  );
};

export const query = graphql`
  query ArticlePage ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      parent {
        ... on File {
          birthTime(formatString: "YYYY. MM. DD")
        }
      }
    }
  }
`;
