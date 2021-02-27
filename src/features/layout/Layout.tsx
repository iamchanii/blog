import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { styled } from '../../stitches.config';
import './layout.css';

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  height: '$8',
  boxSizing: 'border-box',
  borderBottom: '1px solid $gray200',
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(10px)',
});

const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '$container',
  height: '100%',
  padding: '0 $6',
  margin: 'auto',
});

const Main = styled('main', {
  maxWidth: '$container',
  margin: '$8 auto 0',
  padding: '$6',
});

const HeaderLink = styled(Link, {
  textDecoration: 'none',
  color: '$violet800',
  fontSize: '1.125rem',

  variants: {
    variant: {
      bold: {
        fontWeight: 'bold',
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { site } = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderLink variant="bold" to="/">
            {site?.siteMetadata?.title}
          </HeaderLink>
          <HeaderLink to="/about">about</HeaderLink>
        </HeaderContainer>
      </Header>
      <Main>{children}</Main>
    </>
  );
};

Layout.displayName = 'Layout';

/** Styles */
