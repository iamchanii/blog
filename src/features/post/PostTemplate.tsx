import { graphql, PageProps } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { withPreview } from 'gatsby-source-prismic';
import { styled } from '../../stitches.config';
import React, { FC } from 'react';
import { JsonLd } from 'react-schemaorg';
import { BlogPosting } from 'schema-dts';
import { PostTemplateQuery, PrismicPostBodyText } from '../../../graphql-types';
import { getPrismicPostBodyTextExcerpt } from '../../utils/getPrismicPostBodyTextExcerpt';
import { AboutProfileCard } from '../about/AboutProfileCard';
import { Layout } from '../layout/Layout';
import { LayoutSeparator } from '../layout/LayoutSeparator';
import { SEO } from '../seo/SEO';
import { PostBodyImage } from './PostBodyImage';
import { PostBodyQuote } from './PostBodyQuote';
import { PostBodyText } from './PostBodyText';
import { PostComments } from './PostComments';
import { PostPreviousNextCard } from './PostPreviousNextCard';
import readingTime from 'reading-time';

const getWordCount = (data: any[]) => {
  const text = data
    .reduce((acc, node) => {
      switch (node.__typename) {
        case 'PrismicPostBodyText':
          acc.push(node.primary.content.text);
          break;
        case 'PrismicPostBodyQuote':
          acc.push(node.primary.quote.text);
          break;
      }

      return acc;
    }, [])
    .join(' ');

  return readingTime(text).words;
};

const PostTemplate: FC<PageProps<PostTemplateQuery>> = ({ data }) => {
  const coverImage = data.prismicPost?.data?.coverImage;
  const excerpt = getPrismicPostBodyTextExcerpt(data.prismicPost?.data?.body);

  const dateRaw =
    data.prismicPost?.data?.migrated_date_raw ||
    data.prismicPost?.publicationDateRaw;

  return (
    <Layout>
      <SEO
        title={data.prismicPost?.data?.title?.text!}
        description={excerpt}
        url={`/posts/${data.prismicPost?.uid}`}
        {...(coverImage && {
          imageUrl: coverImage.localFile?.childImageSharp?.fluid?.src,
          imageWidth:
            coverImage.localFile?.childImageSharp?.fluid?.presentationWidth,
          imageHeight:
            coverImage.localFile?.childImageSharp?.fluid?.presentationHeight,
        })}
      />
      <JsonLd<BlogPosting>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          ...(data.site?.siteMetadata?.siteUrl && {
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': new URL(
                `/posts/${data.prismicPost?.uid}`,
                data.site?.siteMetadata?.siteUrl
              ).href,
            },
          }),
          headline: data.prismicPost?.data?.title?.text!,
          author: {
            '@type': 'Person',
            name: 'iamchanii',
          },
          datePublished: dateRaw,
          dateModified: dateRaw,
          wordCount: getWordCount(data.prismicPost?.data?.body!),
          image: coverImage?.localFile?.childImageSharp?.fluid?.src,
          publisher: {
            '@type': 'Organization',
            name: 'iamchanii',
            logo: {
              '@type': 'ImageObject',
              url: 'https://imch.dev/images/default.png',
            },
          },
        }}
      />

      {coverImage?.localFile?.childImageSharp?.fluid && (
        <CoverImage
          // @ts-ignore
          fluid={coverImage.localFile?.childImageSharp?.fluid}
        />
      )}

      <TitleContainer>
        <Title>{data.prismicPost?.data?.title?.text}</Title>
        <PublicationDate dateTime={dateRaw}>
          {data.prismicPost?.data?.migrated_date ||
            data.prismicPost?.publicationDate}
        </PublicationDate>
        {data.prismicPost?.tags && (
          <Tags>
            {data.prismicPost?.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
      </TitleContainer>

      {data.prismicPost?.data?.body?.map((slice, index) => {
        switch (slice?.__typename) {
          case 'PrismicPostBodyText':
            return (
              <PostBodyText key={index} html={slice?.primary?.content?.html!} />
            );
          case 'PrismicPostBodyImage':
            return (
              <PostBodyImage
                key={index}
                image={
                  slice?.primary?.image?.localFile?.childImageSharp?.fluid!
                }
                alt={slice?.primary?.image?.alt!}
              />
            );
          case 'PrismicPostBodyHr':
            return <PostTemplateSeparator key={index} />;
          case 'PrismicPostBodyQuote':
            return (
              <PostBodyQuote key={index} html={slice?.primary?.quote?.html!} />
            );
        }
      })}

      <ProfileCardArea>
        <PostTemplateSeparator />
        <AboutProfileCard />
      </ProfileCardArea>

      <PostPreviousNextCard
        previous={data.previousPrismicPost!}
        next={data.nextPrismicPost!}
      />

      {data.site?.siteMetadata?.siteUrl && data.prismicPost?.uid && (
        <PostComments
          url={
            new URL(data.prismicPost.uid, data.site.siteMetadata.siteUrl).href
          }
        />
      )}
    </Layout>
  );
};

PostTemplate.displayName = 'PostTemplate';

export default withPreview(PostTemplate);

const CoverImage = styled(GatsbyImage, {
  marginBottom: '$5',
  borderRadius: '4px',
});

const Title = styled('h1', {
  fontSize: '1.5rem',
  margin: 0,
});

const PublicationDate = styled('time', {
  color: '$gray700',
});

const Tags = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: '$3 0 0 0',
});

const Tag = styled('span', {
  fontSize: '0.75rem',
  backgroundColor: '$gray50',
  color: '$gray600',
  padding: '$2 $4',
  borderRadius: '4px',

  ':not(:last-of-type)': {
    marginRight: '$4',
  },
});

const TitleContainer = styled('div', {
  marginBottom: '$7',
});

const PostTemplateSeparator = styled(LayoutSeparator, {
  marginTop: '$7',
  marginBottom: '$7',
});

const ProfileCardArea = styled('div', {
  marginTop: '$8',
});

export const query = graphql`
  query PostTemplate(
    $uid: String!
    $hasNext: Boolean!
    $nextUid: String
    $hasPrevious: Boolean!
    $previousUid: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    prismicPost(uid: { eq: $uid }) {
      publicationDate: first_publication_date(formatString: "YYYY. MM. DD.")
      publicationDateRaw: first_publication_date
      tags
      uid
      data {
        category
        title {
          text
        }
        migrated_date(formatString: "YYYY. MM. DD")
        migrated_date_raw: migrated_date
        coverImage: cover_image {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 640
                maxHeight: 320
                fit: COVER
                webpQuality: 100
                quality: 100
              ) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
                presentationHeight
              }
            }
          }
        }
        body {
          __typename
          ... on PrismicPostBodyText {
            primary {
              content {
                text
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(
                      maxWidth: 640
                      fit: CONTAIN
                      webpQuality: 100
                      quality: 100
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPostBodyQuote {
            primary {
              quote {
                html
                text
              }
            }
          }
        }
      }
    }
    previousPrismicPost: prismicPost(uid: { eq: $previousUid })
      @include(if: $hasPrevious) {
      uid
      data {
        title {
          text
        }
      }
    }
    nextPrismicPost: prismicPost(uid: { eq: $nextUid }) @include(if: $hasNext) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`;
