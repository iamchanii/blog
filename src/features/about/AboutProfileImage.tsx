import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React, { FC } from 'react';
import { AboutProfileQuery } from '../../../graphql-types';
import { styled } from '../../stitches.config';

export const AboutProfileImage: FC = () => {
  const data = useStaticQuery<GatsbyTypes.AboutProfileQuery>(graphql`
    query AboutProfile {
      prismicAbout {
        data {
          profile {
            alt
            localFile {
              childImageSharp {
                fixed(width: 100, height: 100, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ProfileImageContainer>
      <ProfileImage
        // @ts-ignore
        fixed={
          data.prismicAbout?.data?.profile?.localFile?.childImageSharp?.fixed
        }
      />
    </ProfileImageContainer>
  );
};

AboutProfileImage.displayName = 'AboutProfileImage';

/** Styles */
const ProfileImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '$6 0 $7',
});

const ProfileImage = styled(GatsbyImage, {
  borderRadius: '9999px',
});
