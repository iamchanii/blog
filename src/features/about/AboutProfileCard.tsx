import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { FaGithub } from 'react-icons/all';
import { styled } from '../../stitches.config';

export const AboutProfileCard: FC = () => {
  const { prismicAbout } = useStaticQuery<
    GatsbyTypes.PostProfileCardQuery
  >(graphql`
    query PostProfileCard {
      prismicAbout {
        data {
          name {
            text
          }
          description {
            text
          }
          github_link {
            url
          }
        }
      }
    }
  `);

  return (
    <div>
      <AboutLink to="/about/">{prismicAbout?.data?.name?.text}</AboutLink>
      <Description>{prismicAbout?.data?.description?.text}</Description>
      {prismicAbout?.data?.github_link?.url && (
        <SocialLink href={prismicAbout?.data?.github_link?.url}>
          <FaGithub />
          GitHub
        </SocialLink>
      )}
    </div>
  );
};

AboutProfileCard.displayName = 'AboutProfileCard';

const AboutLink = styled(Link, {
  fontSize: '1rem',
  color: '$violet800',
  fontWeight: 'bold',
});

const Description = styled('p', {
  margin: '0 0 $5',
});

const SocialLink = styled('a', {
  fontSize: '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  color: '$violet800',

  '> svg': {
    margin: '0 $4 0 0',
  },
});
