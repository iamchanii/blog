import GatsbyImage from 'gatsby-image';
import { styled } from '../../stitches.config';
import React, { FC } from 'react';
import {
  GatsbyImageSharpFluid_WithWebpFragment,
  Maybe,
} from '../../../graphql-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostBodyImageProps {
  image: Maybe<GatsbyImageSharpFluid_WithWebpFragment>;
  alt?: string;
}

export const PostBodyImage: FC<PostBodyImageProps> = ({ image, alt }) => {
  return image ? (
    <ImageBlock>
      <Image
        // @ts-ignore
        fluid={image}
        alt={alt}
      />
      {alt && <Alt>{alt}</Alt>}
    </ImageBlock>
  ) : null;
};

PostBodyImage.displayName = 'PostBodyImage';

/** Styles */
const Image = styled(GatsbyImage, {
  borderRadius: '4px',
});

const ImageBlock = styled('div', {
  margin: '$6 0',
});

const Alt = styled('p', {
  fontSize: '0.875rem',
  textAlign: 'center',
  color: '$gray500',
});
