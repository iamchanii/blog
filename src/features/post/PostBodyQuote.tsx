import { styled } from '../../stitches.config';
import React, { FC } from 'react';
import { PostBodyHtmlRenderer } from './PostBodyHtmlRenderer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostBodyQuoteProps {
  html: string;
}

export const PostBodyQuote: FC<PostBodyQuoteProps> = ({ html }) => {
  return html ? (
    <StyledPostBodyHtmlRenderer
      as="blockquote"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : null;
};

PostBodyQuote.displayName = 'PostBodyQuote';

/** Styles */
const StyledPostBodyHtmlRenderer = styled(PostBodyHtmlRenderer, {
  color: '$gray500',
  margin: '$7 0',
  paddingLeft: '$5',
  borderLeft: '2px solid $gray200',
});
