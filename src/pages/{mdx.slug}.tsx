import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as ArticlePage } from '../components/ArticlePage.gen';

export default ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  return (
    <ArticlePage
      title={data.mdx!.frontmatter!.title}
      date={data.mdx!.frontmatter!.date}
      body={data.mdx!.body as any}
      description={data.mdx!.excerpt}
      url={data.mdx!.slug!}
      isoDate={data.mdx!.frontmatter!.rawDate}
      wordCount={data.mdx!.wordCount!.words!}
    />
  );
};

export const query = graphql`
  query ArticlePage ($id: String) {
    mdx(id: { eq: $id }) {
      slug
      excerpt(truncate: true, pruneLength: 150)
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD")
        rawDate: date
      }
      body
      wordCount {
        words
      }
    }
  }
`;
