import { ReplaceRendererArgs, WrapRootElementNodeArgs } from 'gatsby';
import { PreviewStoreProvider } from 'gatsby-source-prismic';
import * as React from 'react';
import { setup } from './lib';

interface ReplaceRenderer {
  (args: ReplaceRendererArgs, pluginOptions: unknown): any;
}

export const replaceRenderer: ReplaceRenderer = ({
  bodyComponent,
  setHeadComponents,
}) => {
  const instance = setup({ element: bodyComponent as React.ReactElement });
  const styles = instance.collect();

  setHeadComponents([
    <style
      key="stitches"
      data-stitches=""
      dangerouslySetInnerHTML={{ __html: styles }}
    />,
  ]);
};

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
);
