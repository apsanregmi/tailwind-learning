import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Industries.module.css';

const Industries = () => {
  return (
    <Layout>
      <PageBanner pageName={"Industries"} />

      <section className={styles.industrySection}>
        <Container>
          <Row className="p-50">
            <Col md={5} className={`position-relative ${styles.imageContainer}`}>
              <img
                src="https://www.transperfect.com/sites/default/files/styles/max_650x650/public/media/image/Generative%20AI%20Square.jpg?itok=wV8fIbPh"
                alt="Generative AI"
                className={`rounded-circle ${styles.sectionImage} position-absolute`}
                style={{ maxWidth: "90%", left: "0%" }}
              />
              <img
                src="https://images.wsj.net/im-440998/square"
                alt="Generative AI"
                className={`rounded-circle ${styles.sectionImage} position-absolute`}
                style={{ maxWidth: "100%", left: "-99%" }}
              />
              <img
                src="https://images.wsj.net/im-440998/square"
                alt="Generative AI"
                className={`rounded-circle ${styles.sectionImage} position-absolute`}
                style={{ maxWidth: "100%", left: "240%" }}
              />
            </Col>


            <Col md={7}>
              <h6 className={styles.industryDescription}>
                Leading the way for international success,
                we stand alongside top-tier organizations across diverse industries,
                driving their digital engineering initiatives forward,
                and ensuring they are equipped to meet any future demands.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{backgroundColor: '#f5f5f5', padding: '3%' }}>

        <Container>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
            <h6 style={{
              fontWeight: 'lighter', fontSize: '3rem', textAlign: 'center',
              maxWidth: '75%', lineHeight: '1.5', padding: '3%',
            }}>
              We bring cloud and data best practices to our customers so they can focus on what they do best—not how they get there
            </h6>
          </div>


          <Row className={`${styles.industryOptions} justify-content-center`}>
            {industries.map((industry) => (
              <Col lg={4} md={6} key={industry.name}>
                <Link href={industry.link}>
                  <div className={styles.industryLink}>
                    <div className={`${styles.industryImage} ${styles[industry.className]}`} />
                    <h3 className={styles.industryTitle}>{industry.name}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

        </Container>
      </section>
      <section>
        <div className={styles.professionalSection}>
          <div className={styles.textContainer}>
            <h6 className={styles.sectionText}>
              We empower our clients            with top-tier cloud and data practices,
              enabling them to concentrate
              on their core strengths
              without worrying about the path to success.
            </h6>
          </div>
          <div className={styles.imageContainer}>
            <img src="https://img.freepik.com/premium-photo/business-people-using-ai-technology-digital-transformation-change-management-internet-things_935552-6397.jpg"
              alt="Team Silhouette with Globe"
              className={`${styles.sectionImage} rounded-circle`}
              style={{ maxWidth: '70%' }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;


const industries = [
  { name: 'Media, Entertainment & Gaming', link: '/industries/media-entertainment-gaming', className: 'media-entertainment-gaming' },
  { name: 'Real Estate', link: '/industries/real-estate', className: 'real-estate' },
  { name: 'Alternative Investment', link: '/industries/alternative-investment', className: 'alternative-investment' },
  { name: 'Financial', link: '/industries/financial', className: 'financial' },
  { name: 'Healthcare', link: '/industries/healthcare', className: 'healthcare' },
  { name: 'Education', link: '/industries/education', className: 'education' },
  { name: 'Manufacturing', link: '/industries/manufacturing', className: 'manufacturing' },
  { name: 'Insurance', link: '/industries/insurance', className: 'insurance' },
  { name: 'Security', link: '/industries/security', className: 'security' },
];
