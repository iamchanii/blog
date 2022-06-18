import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticlePage } from '../components/ArticlePage.gen';

export default ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  return (
    <ArticlePage
      title={data.mdx!.frontmatter!.title}
      date={(data.mdx!.parent as Queries.File).birthTime}
      body={data.mdx!.body as any}
      description={data.mdx!.excerpt}
      url={data.mdx!.slug!}
    />
  );
};

export const query = graphql`
  query ArticlePage ($id: String) {
    mdx(id: { eq: $id }) {
      slug
      excerpt(pruneLength: 250)
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
