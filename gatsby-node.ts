import { CreatePagesArgs } from 'gatsby';
import * as path from 'path';

// You can delete this file if you're not using it
export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const pages = await graphql(`
    query Post {
      allPrismicPost(
        sort: {
          fields: [data___migrated_date, first_publication_date]
          order: DESC
        }
      ) {
        groupByCategory: group(field: data___category) {
          fieldValue
          totalCount
        }
        groupByTag: group(field: tags) {
          fieldValue
          totalCount
        }
        edges {
          previous {
            uid
          }
          next {
            uid
          }
          node {
            uid
          }
        }
      }
    }
  `);

  const postTemplatePath = path.resolve(
    __dirname,
    'src/features/post/PostTemplate.tsx'
  );
  const homePostListTemplatePath = path.resolve(
    __dirname,
    'src/features/home/HomePostListTemplate.tsx'
  );

  if (pages.data) {
    (pages.data as any).allPrismicPost.groupByCategory.forEach((data: any) => {
      createPage({
        path: `/category/${data.fieldValue}/`,
        component: homePostListTemplatePath,
        context: {
          category: data.fieldValue,
        },
      });
    });

    (pages.data as any).allPrismicPost.groupByTag.forEach((data: any) => {
      createPage({
        path: `/tag/${data.fieldValue}/`,
        component: homePostListTemplatePath,
        context: {
          tag: data.fieldValue,
        },
      });
    });

    (pages.data as any).allPrismicPost.edges.forEach((edge: any) => {
      createPage({
        path: `/posts/${edge.node.uid}/`,
        component: postTemplatePath,
        context: {
          hasPrevious: !!edge.previous?.uid ?? false,
          previousUid: edge.previous?.uid,
          uid: edge.node.uid,
          hasNext: !!edge.next?.uid ?? false,
          nextUid: edge.next?.uid,
        },
      });
    });
  }
};
