// CaseStudies.js

import React from 'react';
import { createClient } from 'contentful';
import CaseStudyCard from '@/src/components/caseStudies/CaseStudyCard';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';
import styles from './CaseStudies.module.css';

const client = createClient({
  space: '0chql3dwavmp',
  accessToken: '4Z7j49eqaFegh4UEMDl41-Fz9mcbrtF1H4XqJUclxpY',
});

export async function getStaticProps() {
  const entries = await client.getEntries({ content_type: 'caseStudies' });

  return {
    props: {
      caseStudies: entries.items.map(item => ({
        title: item.fields.title,
        date: item.sys.createdAt,
        slug: item.fields.slug, // Make sure to fetch the slug field
        imageUrl: item.fields.coverImage.fields.file.url,
        imageDescription: item.fields.coverImage.fields.description
      })),
    },
  };
}

const CaseStudies = ({ caseStudies }) => {
  return (
    <Layout title={"Case Studies - CloudProAI"}>
      <PageBanner pageName={"Case Studies "} />
      <div className={styles.caseStudiesContainer}>
        <div className={styles.caseStudiesList}>
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.slug} className={styles.caseStudyCard}>
              <CaseStudyCard
                title={caseStudy.title}
                date={caseStudy.date}
                slug={caseStudy.slug} // Pass the slug prop here
                imageUrl={caseStudy.imageUrl}
                imageDescription={caseStudy.imageDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;