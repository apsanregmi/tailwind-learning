// pages/others/case-studies/[slug].js
import React from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './CaseDetail.module.css';
import PageBanner from '@/src/components/PageBanner';
import Layout from '@/src/layout/Layout';

const client = createClient({
  space: '0chql3dwavmp',
  accessToken: '4Z7j49eqaFegh4UEMDl41-Fz9mcbrtF1H4XqJUclxpY',
});

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: 'caseStudies' });

  const paths = entries.items.map((caseStudy) => ({
    params: { slug: caseStudy.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const entry = await client.getEntries({
    content_type: 'caseStudies',
    'fields.slug': slug,
  });

  return {
    props: {
      caseStudy: entry.items[0],
    },
  };
}

const CaseStudyDetail = ({ caseStudy }) => {
  const {
    title,
    introducion,
    challanges,
    solution,
    technologyStack,
    impactAndResults,
    conclusion,
    callToAction,
    clientInformation,
    date,
    author,
    coverImage,
  } = caseStudy.fields;

  const renderRichText = (richText) => {
    return documentToReactComponents(richText);
  };

  const renderDetailItem = (title, content) => {
    if (!content) {
      return null; 
    }

    return (
      <div className={styles.detailItem}>
        <h3>{title}</h3>
        {typeof content === 'string' ? <p>{content}</p> : renderRichText(content)}
      </div>
    );
  };

  return (
    <Layout>
      <PageBanner pageName={title} />
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.caseStudyDetailContainer}>
        {coverImage && (
          <img
            className={styles.image}
            src={coverImage.fields.file.url}
            alt={coverImage.fields.description}
          />
        )}
        <div className={styles.details}>
          {renderDetailItem('Introduction', introducion)}
          {renderDetailItem('Challenges', challanges)}
          {renderDetailItem('Solution', solution)}
          {renderDetailItem('Technology Stack', technologyStack)}
          {renderDetailItem('Impact and Results', impactAndResults)}
          {renderDetailItem('Conclusion', conclusion)}
          {renderDetailItem('Call to Action', callToAction)}
          {renderDetailItem('Client Information', clientInformation)}
          {/* {renderDetailItem('Date', date)} */}
          {renderDetailItem('Author', author | date)}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
