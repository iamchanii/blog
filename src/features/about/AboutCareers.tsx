import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { AboutCareersQuery } from '../../../graphql-types';
import { styled } from '../../stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AboutCareersProps {}

export const AboutCareers: FC<AboutCareersProps> = props => {
  const data = useStaticQuery<GatsbyTypes.AboutCareersQuery>(graphql`
    query AboutCareers {
      prismicAbout {
        data {
          careers {
            company_name
            description {
              html
            }
            end_date(formatString: "YYYY.MM")
            from_date(formatString: "YYYY.MM")
          }
        }
      }
    }
  `);

  return (
    <div>
      <h2>Projects</h2>

      {data.prismicAbout?.data?.careers?.map(career => (
        <CareerSection>
          <header>
            <CareerCompanyName>{career!.company_name}</CareerCompanyName>
          </header>
          <aside>
            <CareerRange>
              {career!.from_date} ~ {career?.end_date}
            </CareerRange>
          </aside>
          <div
            dangerouslySetInnerHTML={{ __html: career!.description?.html! }}
          />
        </CareerSection>
      ))}
    </div>
  );
};

AboutCareers.displayName = 'AboutCareers';

/** Styles */
const CareerCompanyName = styled('h3', {
  margin: '0 0 $4',
  padding: '0 0 $4',
  borderBottom: '1px solid $gray200',
});

const CareerRange = styled('span', {
  fontFamily: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
  fontSize: '85%',
  background: '$gray100',
  display: 'inline-block',
  padding: '$2 $4',
  borderRadius: '4px',
});

const CareerSection = styled('section', {
  '&:not(:last-of-type)': {
    marginBottom: '$7',
  },
});
