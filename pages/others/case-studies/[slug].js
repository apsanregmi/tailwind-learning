import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CaseStudy.module.css";
import { useRouter } from 'next/router';

const CaseStudy = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(window.origin + `/api/case-studies/getcase-study?slug=${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((parsed) => {
          setCaseStudy(parsed);  // Fix: Correct function name
        })
        .catch((error) => {
          console.error('Error fetching case study:', error);
        });
    }
  }, [slug]);

  if (!caseStudy) {
    return <p>Loading...</p>;

  }

  return (
    <Layout>
      <PageBanner pageName={`${caseStudy.title.slice(0, 25)}...`} />


      <Row>
        <Col>
          <h2 className={styles.caseStudyTitle}>{caseStudy.title}</h2>
          <p className={styles.caseStudyDescription}>{caseStudy.description}</p>
        </Col>
      </Row>
      {caseStudy.sections.map((section, index) => (
        <Row key={index} className="mb-100">
          <Col lg={12}>
            <div className={styles.sectionTitle}><h6 className={styles.sectionTitleName}>{section.sectionTitle}</h6></div>
            <div className={styles.sectionContentDiv}><h6 className={styles.sectionContent}>{section.content}</h6></div>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export default CaseStudy;
