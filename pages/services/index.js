import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import styles from "./Service.module.css";

const Pricing = () => {
  const [cloudServices, setCloudServices] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/cloudengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setCloudServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [dataServices, setDataServices] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/dataengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setDataServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [aiServices, setAiServices] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/generativeaiandml/services")
      .then((response) => response.json())
      .then((parsed) => {
        setAiServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [biServices, setBiServices] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/bianddataanalytics/services")
      .then((response) => response.json())
      .then((parsed) => {
        setBiServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [mobileApp, setMobileApp] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/mobileappdevelopment/services")
      .then((response) => response.json())
      .then((parsed) => {
        setMobileApp(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [webApp, setWebApp] = useState([]);
  useEffect(() => {
    fetch(window.origin + "/api/services/webappdevelopment/services")
      .then((response) => response.json())
      .then((parsed) => {
        setWebApp(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const services = [
    {
      name: "Cloud Engineering",
      roundImage: "https://cdn.pixabay.com/photo/2020/02/03/20/49/technology-4816658_1280.jpg",
      title: "Revolutionize Your Infrastructure with Cloud Engineering",
      link: "/services/cloudengineering",
      className: "cloud-engineering",
      description:
        "Revolutionize your infrastructure with Cloud Engineering, the cornerstone for establishing highly scalable and efficient environments. Going beyond conventional management, our services bring forth a paradigm shift, harnessing the full power of cloud services to propel your business into the future.",
    },
    {
      name: "Generative AI and ML",
      roundImage: "",

      link: "/services/generativeaiandml",
      className: "generative-ai-and-ml",
      title: "Embark on a Journey of Innovation with Generative AI and ML",
      description:
        "Embark on a journey of innovation and intelligence with our Generative AI and Machine Learning services. Empowering businesses to unlock new dimensions, optimize processes, and achieve transformative outcomes, we deploy cutting-edge technologies that redefine possibilities in the realm of artificial intelligence and machine learning.",
    },
    {
      name: "Data Engineering",
      roundImage: "",

      link: "/services/dataengineering",
      className: "data-engineering",
      title: "Elevate Your Data into Actionable Insights",
      description:
        "Elevate your data into actionable insights with our Data Engineering services. Transforming raw data into powerful solutions, we employ advanced techniques to organize, process, and analyze data. Our commitment is to provide businesses with actionable insights for informed decision-making and sustainable growth.",
    },
    {
      name: "Web App Development",
      roundImage: "",

      link: "/services/webappdevelopment",
      className: "web-app-development",
      title: "Immerse Your Audience in Dynamic Web Experiences",
      description:
        "Immerse your audience in dynamic web experiences crafted to perfection. Our Web App Development services focus on creating engaging, user-friendly interfaces that go beyond functionality. We ensure your online presence is a seamless blend of innovation and impact, setting you apart in the digital landscape.",
    },
    {
      name: "BI and Data Analytics",
      roundImage: "",

      link: "/services/bianddataanalytics",
      className: "bi-and-data-analytics",
      title: "Empower Your Decision-Making with BI and Data Analytics",
      description:
        "Empower your decision-making with precision using our BI and Data Analytics services. Our advanced analytics solutions are designed to extract meaningful insights from data, enabling businesses to make informed, strategic choices. Navigate the future with confidence and stay ahead of the competition.",
    },
    {
      name: "Mobile App Development",
      roundImage: "",

      link: "/services/mobileappdevelopment",
      className: "mobile-app-development",
      title: "Unleash Innovation with Mobile App Development",
      description:
        "Unleash innovation with our Mobile App Development services tailored to your unique needs. We go beyond traditional solutions, creating apps that not only enhance user experiences but also boost engagement. Put your business at the fingertips of your audience with our innovative mobile solutions.",
    },
  ];

  return (
    <Layout title={"Services - CloudProAI"}>
      <PageBanner pageName={"Services"} />
      <section className="price-plan-page-top pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          {/* ... */}
          {/* Cloud Engineering Section */}
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-2s">
                <Link href="/services/dataengineering">
                  <h4 className="title">Data Engineering</h4>
                </Link>

                <span className="price-count">Services We Offer</span>

                <ul>
                  {dataServices.slice(0, 5).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/dataengineering/${service.slug}`}>
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="/services/dataengineering">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Generative AI and ML Section */}
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-4s">
                <Link href="/services/generativeaiandml">
                  <h4 className="title">Generative AI and ML</h4>
                </Link>

                <span className="price-count">
                  Services We Offer
                  {/* {aiServices.length} Services Included */}
                </span>

                <ul>
                  {aiServices.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/generativeaiandml/${service.slug}`}
                      >
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="/services/generativeaiandml">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Cloud Engineering Section */}
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-6s">
                <Link href="/services/cloudengineering">
                  <h4 className="title">Cloud Engineering </h4>
                </Link>

                <span className="price-count">
                  Services We Offer
                  {/* {aiServices.length} Services Included */}
                </span>
                <ul>
                  {cloudServices.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/cloudengineering/${service.slug}`}>
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="../services/cloudengineering">
                  <a className="theme-btn style-two">
                    Show More
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>

            {/* BI And Data Analytics Section */}
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-4s">
                <Link href="/services/bianddatanalytics">
                  <h4 className="title">BI And Data Analytics</h4>
                </Link>

                <span className="price-count">
                  Services We Offer
                  {/* {aiServices.length} Services Included */}
                </span>

                <ul>
                  {biServices.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/bianddataanalytics/${service.slug}`}
                      >
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="/services/bianddataanalytics">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Web App Development Section */}
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-4s">
                <Link href="/services/webappdevelopment">
                  <h4 className="title">Web App Development</h4>
                </Link>

                <span className="price-count">
                  Services We Offer
                  {/* {aiServices.length} Services Included */}
                </span>

                <ul>
                  {webApp.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/webappdevelopment/${service.slug}`}
                      >
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="/services/webappdevelopment">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Mobile App Development Section */}
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-4s">
                <Link href="/services/mobileappdevelopment">
                  <h4 className="title">Mobile App Development</h4>
                </Link>

                <span className="price-count">Services We Offer</span>

                <ul>
                  {mobileApp.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/mobileappdevelopment/${service.slug}`}
                      >
                        <h5>{service.title}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link legacyBehavior href="/services/generativeaiandml">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f5f5f5", padding: "3%" }}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
            }}
          >
            <h6
              style={{
                fontWeight: "lighter",
                fontSize: "3rem",
                textAlign: "center",
                maxWidth: "75%",
                lineHeight: "1.5",
                padding: "3%",
              }}
            >
              Empowering Your Growth Through Specialized Solutions{" "}
            </h6>
          </div>

          <Row className={`${styles.industryOptions} justify-content-center`}>
            {services.map((industry) => (
              <Col lg={4} md={6} key={industry.name}>
                <Link href={industry.link}>
                  <div className={styles.industryLink}>
                    <div
                      className={`${styles.industryImage} ${
                        styles[industry.className]
                      }`}
                    />
                    <h3 className={styles.industryTitle}>{industry.name}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>

        <section className={styles.industrySection}>
          {services.map((service) => (
            <div key={service.className}>
              <Container  className={` ${
                        styles[service.className]
                      }`}>
                <Row className="p-50">
                  <Col
                    md={5}
                    className={`position-relative ${styles.imageContainer}`}
                  >
                   
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
                    <h2 className={styles.industryDescription}>{service.title}</h2>
                    <h6 className={styles.industryDescription}>
                      {service.description}
                    </h6>
                    <Link href={service.link}>
                      <p> Learn more about {service.name}</p>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </section>
      </section>
    </Layout>
  );
};

export default Pricing;