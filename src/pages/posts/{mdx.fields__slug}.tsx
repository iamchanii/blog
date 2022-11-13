import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticlePage } from '../../components/ArticlePage.gen';

export default function MdxFieldsSlugPage({ data, children }: PageProps<Queries.ArticlePageQuery>) {
  return (
    <ArticlePage
      title={data.mdx!.frontmatter!.title}
      date={data.mdx!.frontmatter!.date}
      description={data.mdx?.excerpt ?? ''}
      url={`/posts/${data.mdx?.fields?.slug}`}
      isoDate={data.mdx!.frontmatter!.rawDate}
      wordCount={2000}
    >
      {children}
    </ArticlePage>
  );
}

export const query = graphql`
  query ArticlePage ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 150)
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD")
        rawDate: date
      }
      body
      fields {
        slug
        timeToRead {
          words
        }
      }
    }
  }
`;
