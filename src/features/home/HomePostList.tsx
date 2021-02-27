import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import { capitalize } from 'lodash-es';
import React, { FC } from 'react';
import { IndexQuery, PrismicPostGroupConnection } from '../../../graphql-types';
import { getPrismicPostBodyTextExcerpt } from '../../utils/getPrismicPostBodyTextExcerpt';

export interface HomePostListProps {
  postTotalCount: number;
  categories: Partial<PrismicPostGroupConnection>[];
  currentCategory?: string;
  posts: IndexQuery['allPrismicPost']['nodes'];
}

export const HomePostList: FC<HomePostListProps> = ({
  postTotalCount,
  categories,
  currentCategory,
  posts,
}) => {
  return (
    <>
      <Categories>
        <Category status={!currentCategory ? 'active' : undefined} to="/">
          All ({postTotalCount})
        </Category>
        {categories.map(category => (
          <Category
            key={category.fieldValue}
            status={
              category.fieldValue === currentCategory ? 'active' : undefined
            }
            to={`/category/${category.fieldValue}/`}
          >
            {capitalize(category.fieldValue!)} ({category.totalCount})
          </Category>
        ))}
      </Categories>

      <PostCards>
        {posts.map(post => (
          <PostCard key={post.uid} to={`/posts/${post.uid}/`}>
            <PostTitle>{post.data?.title?.text}</PostTitle>
            <PublicationDate
              dateTime={
                post.data?.migrated_date_raw || post.first_publication_date_raw
              }
            >
              {post.data?.migrated_date || post.first_publication_date}
            </PublicationDate>
            <Excerpt>{getPrismicPostBodyTextExcerpt(post.data?.body)}</Excerpt>
          </PostCard>
        ))}
      </PostCards>
    </>
  );
};

HomePostList.displayName = 'HomePostList';

const Categories = styled('div', {
  marginBottom: '$6',
});

const Category = styled(Link, {
  fontSize: '0.875rem',
  color: '$violet800',
  padding: '$3 $4',
  borderRadius: '0.25rem',

  ':not(:last-of-type)': {
    marginRight: '$4',
  },

  variants: {
    status: {
      active: {
        backgroundColor: '$violet800',
        color: '#fff',
      },
    },
  },
});

const PostCards = styled('div', {
  margin: '0 -$5',
});

const PostCard = styled(Link, {
  padding: '$5',
  boxSizing: 'border-box',
  display: 'block',
  borderRadius: '0.25rem',
  color: '$gray800',
  marginBottom: '$5',

  ':hover': {
    backgroundColor: '$gray100',
  },
});

const PostTitle = styled('h2', {
  fontSize: '1.125rem',
  color: '$gray900',
  fontWeight: 'bold',
  margin: 0,
});

const PublicationDate = styled('time', {
  color: '$gray700',
});

const Excerpt = styled('p', {
  margin: '$5 0 0',
  lineHeight: 1.625,
});
