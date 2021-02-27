import { styled } from '../../stitches.config';

export const LayoutSeparator = styled('hr', {
  width: '75%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 0,
  border: 0,
  borderTop: '1px solid $gray200',
});

LayoutSeparator.displayName = 'LayoutSeparator';
