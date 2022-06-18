import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as BlogList } from '../components/ArticleList/BlogList.gen';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <BlogList
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

export default IndexPage;

export const query = graphql`
  query IndexPage {
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
