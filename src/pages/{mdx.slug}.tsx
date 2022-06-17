import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { make as Content } from '../components/Content.gen';

const ContentPage = ({ data }: PageProps<Queries.ContentPageQuery>) => {
  return (
    <Content
      title={data.mdx!.frontmatter!.title}
      date={(data.mdx!.parent as Queries.File).birthTime}
      body={data.mdx!.body as any}
    />
  );
};

export default ContentPage;

export const query = graphql`
  query ContentPage ($id: String) {
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
