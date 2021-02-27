import { Link } from 'gatsby';
import React, { FC } from 'react';
import { PrismicPost } from '../../../graphql-types';
import { styled } from '../../stitches.config';

export interface PostPreviousNextCardProps {
  next?: Partial<PrismicPost>;
  previous?: Partial<PrismicPost>;
}

export const PostPreviousNextCard: FC<PostPreviousNextCardProps> = ({
  next,
  previous,
}) => {
  return (
    <CardContainer>
      {previous && (
        <PreviousCard to={`/posts/${previous.uid}/`}>
          <Label>이전글</Label>
          <PostTitle>{previous.data?.title?.text}</PostTitle>
        </PreviousCard>
      )}
      {next && (
        <NextCard to={`/posts/${next.uid}/`}>
          <Label>다음글</Label>
          <PostTitle>{next.data?.title?.text}</PostTitle>
        </NextCard>
      )}
    </CardContainer>
  );
};

const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '$7 0',
});

const Card = styled(Link, {
  flex: '0 0 calc(50% - 0.5rem)',
  padding: '$5',
  borderRadius: '0.25rem',
  boxSizing: 'border-box',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

const PreviousCard = styled(Card, {
  marginRight: 'auto',
});

const NextCard = styled(Card, {
  marginLeft: 'auto',
  textAlign: 'right',
});

const Label = styled('span', {
  fontSize: '0.875rem',
  color: '$gray800',
});

const PostTitle = styled('p', {
  fontWeight: 'bold',
  color: '$gray900',
  margin: 0,
});
