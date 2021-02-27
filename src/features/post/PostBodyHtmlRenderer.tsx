import { styled } from '../../stitches.config';

export const PostBodyHtmlRenderer = styled('div', {
  lineHeight: 1.625,
  color: '$gray700',

  a: {
    color: '$violet800',
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$gray800',
  },

  h1: {
    fontSize: '1.5rem',
  },

  h2: {
    fontSize: '1.35rem',
  },

  h3: {
    fontSize: '1.2rem',
  },

  pre: {
    overflow: 'auto',
    background: '$gray800',
    color: '$gray300',
    padding: '$6',
    borderRadius: '4px',
  },
});

PostBodyHtmlRenderer.displayName = 'PostBodyHtmlRenderer';
