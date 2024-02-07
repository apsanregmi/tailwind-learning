import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
// import Link from "next/link";
const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/bianddataanalytics/services")
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <Layout>
      <PageBanner
        pageName={"Services"}
        pageTitle={"BI And Data Analytics Services"}
      />

      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>What Are BI And Data Analytics Services?</h2>
                </div>
                <p>
                  Business Intelligence (BI) and Data Analytics services are
                  critical for organizations aiming to harness the power of
                  data. BI involves visualizing data through tools like
                  dashboards and reports, offering real-time insights into key
                  performance indicators. On the other hand, Data Analytics
                  includes descriptive, predictive, and prescriptive analytics,
                  uncovering patterns and trends for informed decision-making.
                  With Data Warehousing ensuring efficient data storage and
                  integration, and Advanced Analytics incorporating machine
                  learning and big data analysis, these services empower
                  organizations to transform raw data into actionable insights,
                  enhancing operational efficiency and strategic
                  decision-making.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What Are BI And Data Analytics Services?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Informed Decision-Making</li>
                      <li>Innovation and Business Growth</li>
                      <li>Descriptive Analytics</li>
                      <li>Operational Optimization</li>
                      <li>Competitive Edge</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Business Intelligence (BI) and Data Analytics services
                      involve leveraging technology to collect, analyze, and
                      present business data for informed decision-making. BI
                      includes data visualization, reporting, and dashboard
                      development to offer a comprehensive view of key
                      performance indicators. Data Analytics encompasses
                      descriptive analytics for historical pattern
                      identification, predictive analytics for forecasting
                      future trends, and prescriptive analytics for recommending
                      optimal actions. Data Warehousing ensures efficient data
                      storage and integration, and Advanced Analytics,
                      incorporating machine learning and big data analysis,
                      enhances analytical capabilities. These services empower
                      organizations to transform raw data into actionable
                      insights, optimize operations, and stay competitive in the
                      evolving business landscape.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="/assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Service management is a comprehensive approach to planning,
                  designing, and delivering high-quality services to meet
                  organizational goals. It involves strategic considerations,
                  such as defining service goals aligned with business
                  objectives, and encompasses key stages like Service Strategy,
                  Service Design, Service Transition, Service Operation, and
                  Continual Service Improvement. Service management ensures
                  efficiency, customer satisfaction, and continual adaptation to
                  changing needs, making it an essential framework for
                  organizations aiming to deliver value through their services.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  {/* <JeenaAccordion2 accordionsData={accordionData} /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    {services.map((service) => (
                      <div key={service.slug}>
                        <li>
                          <Link
                            href={`/services/bianddataanalytics/${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        </li>

                        {/* <p>{service.description.slice(0.10)}</p> */}
                      </div>
                    ))}
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(/assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3 className="benefits" style={{ color: "white" }}>
                      Benefits
                    </h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      BI and Data Analytics services offer numerous benefits to
                      organizations. They provide actionable insights from data,
                      enabling informed decision-making and strategic planning.
                      Visualization tools enhance data understanding, and
                      reporting mechanisms facilitate monitoring of key
                      performance indicators.
                    </p>
                  </div>
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+000(123)45688" className="number">
                    <i className="fas fa-phone" /> +1 415-393-2021
                  </a>
                  <img
                    className="bg-shape"
                    src="/assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Understanding BI And Data Analytics Services
                  </Link>
                </h4>
                <p>
                  BI and Data Analytics services leverage technology to collect,
                  analyze, and present business data for informed
                  decision-making. Through data visualization, reporting, and
                  dashboard development, these services enhance understanding
                  and facilitate monitoring of key performance indicators.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Key Components of Service Management
                  </Link>
                </h4>
                <p>
                  The key components of service management in BI and Data
                  Analytics include efficient data storage and integration,
                  advanced analytics leveraging machine learning and big data,
                  visualization tools for data interpretation, and reporting
                  mechanisms for continuous monitoring of key performance
                  indicators.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-mission-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Challenges and Solutions
                  </Link>
                </h4>
                <p>
                  Challenges in BI and Data Analytics: handling complex data,
                  ensuring security, seamless integration, and scalability.
                  Solutions include advanced analytics for insights, robust
                  cybersecurity, effective data integration strategies, and
                  scalable infrastructure. These solutions empower organizations
                  to navigate challenges and extract actionable insights from
                  their data efficiently.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Future Outlook
                  </Link>
                </h4>
                <p>
                  The future outlook for BI and Data Analytics services is
                  promising, driven by advancing technologies. CloudPro AI
                  anticipates staying at the forefront of innovation,
                  integrating cutting-edge tools and methodologies. With a focus
                  on user experience, responsive design, and AI integration, our
                  services aim to deliver even more sophisticated, secure, and
                  user-centric solutions
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Strategic Deployment of BI Services
                  </Link>
                </h4>
                <p>
                  In strategic deployment, CloudPro AI ensures optimal BI
                  services execution. Our approach aligns with client objectives
                  and industry best practices, emphasizing agility for quick
                  adaptations. Prioritizing scalability, we design BI solutions
                  that seamlessly evolve with business needs. With a focus on
                  performance, security, and user experience, our strategic
                  deployment positions clients for sustained success in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    The Evolution of Service Delivery
                  </Link>
                </h4>
                <p>
                  The evolution of service delivery at CloudPro AI in web app
                  development showcases transformative shifts driven by
                  technology and user expectations. Adopting agile
                  methodologies, automation, and DevOps practices accelerates
                  development cycles, enhances collaboration, and ensures rapid,
                  reliable service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu-btns">
        <Link legacyBehavior href="/others/case-studies">
          <a className="theme-btn">
            Learn More About Business use cases
            <i className="fas fa-long-arrow-right" />
          </a>
        </Link>
      </div>

      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="/assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/services/cloudengineering">
                    Cloud Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/cloudengineering">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="services/generativeaiandml">
                    Generative AI And ML
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/cloudengineering">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="/assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
