// pages/others/case-studies/index.js
import React from 'react';
import { createClient } from 'contentful';
import CaseStudyCard from '@/src/components/caseStudies/CaseStudyCard';
import styles from './CaseStudies.module.css';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';

const client = createClient({
  space: '0chql3dwavmp',
  accessToken: '4Z7j49eqaFegh4UEMDl41-Fz9mcbrtF1H4XqJUclxpY',
});

export async function getStaticProps() {
  const entries = await client.getEntries({ content_type: 'caseStudies' });

  return {
    props: {
      caseStudies: entries.items,
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
          <CaseStudyCard key={caseStudy.sys.id} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default CaseStudies;
