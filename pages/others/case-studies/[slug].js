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
  if (!caseStudy) {
    return <div>No case study found.</div>;
  }

  const {
    title,
    introduction,
    challenges,
    solution,
    technologyStack,
    impactAndResults,
    conclusion,
    callToAction,
    clientInformation,
    coverImage,
  } = caseStudy.fields;

  const renderRichText = (richText) => {
    if (!richText || !richText.content) {
      return null;
    }
    return documentToReactComponents(richText);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 175, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };

  const renderSectionLink = (title, id, content) => {
    if (!content || !content.content) {
      return null;
    }

    return (
      <li key={id} className={styles.sectionLink} onClick={() => scrollToSection(id)}>
        {title}
      </li>
    );
  };

  const renderSection = (title, content, id) => {
    if (!content || !content.content) {
      return null;
    }

    return (
      <section className={styles.section} id={id}>
        <p className={styles.titleTypography}>{title}</p>
        {renderRichText(content)}
      </section>
    );
  };

  return (
    <Layout>
      <PageBanner pageTitle={title} bannerImage={coverImage.fields.file.url} pageName='CASE STUDY' />

      <div className={styles.caseStudyDetailContainer}>
        <div className={styles.sidebar}>
          <div className={styles.centeredText}>
            <div className={styles.sidebarTitle}>In this Case Study</div>
            <ul className={styles.sectionList}>
              {renderSectionLink('Introduction', 'introduction', introduction)}
              {renderSectionLink('Challenges', 'challenges', challenges)}
              {renderSectionLink('Solution', 'solution', solution)}
              {renderSectionLink('Technology Stack', 'technology-stack', technologyStack)}
              {renderSectionLink('Impact and Results', 'impact-and-results', impactAndResults)}
              {renderSectionLink('Conclusion', 'conclusion', conclusion)}
              {renderSectionLink('Call to Action', 'call-to-action', callToAction)}
              {renderSectionLink('Client Information', 'client-information', clientInformation)}
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          {renderSection('Introduction', introduction, 'introduction')}
          {renderSection('Challenges', challenges, 'challenges')}
          {renderSection('Solution', solution, 'solution')}
          {renderSection('Technology Stack', technologyStack, 'technology-stack')}
          {renderSection('Impact and Results', impactAndResults, 'impact-and-results')}
          {renderSection('Conclusion', conclusion, 'conclusion')}
          {renderSection('Call to Action', callToAction, 'call-to-action')}
          {renderSection('Client Information', clientInformation, 'client-information')}
          {/* <section className={styles.section} id="author">
            <h2>Author</h2>
            {author}
          </section> */}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
