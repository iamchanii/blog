import type React from 'react';
import { renderToString } from 'react-dom/server';
import { getCssString } from './src/stitches.config';

let renderBody: () => void;

interface Setup {
  (props: { element: React.ReactElement }): {
    collect: () => string;
  };
}

export const setup: Setup = ({ element }) => {
  renderBody = () => renderToString(element);

  const collect = () => {
    renderBody();
    return getCssString();
  };

  return {
    collect,
  };
};