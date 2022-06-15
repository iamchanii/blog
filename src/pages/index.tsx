import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

// markup
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data);

  return (
    <main>
      Hello
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;
