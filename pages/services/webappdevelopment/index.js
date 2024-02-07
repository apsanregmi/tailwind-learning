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

    fetch(window.origin + "/api/services/webappdevelopment/services")
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
      <PageBanner pageName={"Services"} pageTitle={"Web App Develpoment"} />

      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Web App Development Services</h2>
                </div>
                <p>
                  In the ever-evolving digital landscape, web applications stand
                  as the cornerstone of innovation, offering dynamic and
                  interactive solutions that drive businesses forward. Web app
                  development services encompass a broad spectrum of expertise,
                  seamlessly blending technology, creativity, and functionality
                  to deliver bespoke solutions tailored to the unique needs of
                  businesses across industries.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What are Web App Development Services?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Customization and Innovation</li>
                      <li>User-Centric Design</li>
                      <li>Scalability and Performance</li>
                      <li>Data Quality Improvement</li>
                      <li>Comprehensive Services</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Web app development services involve the creation,
                      deployment, and maintenance of applications accessible via
                      web browsers. These services encompass a range of tasks,
                      including designing user interfaces, programming backend
                      functionality, integrating databases, and ensuring
                      seamless performance. Web app development focuses on
                      crafting interactive, scalable, and user-friendly
                      applications tailored to meet specific business needs.
                      Developers leverage technologies like HTML, CSS,
                      JavaScript, and various frameworks to create dynamic web
                      applications that enhance digital experiences.
                    </p>
                    <p>
                      The development process extends to backend programming,
                      where servers, databases, and application logic are
                      intricately woven together to ensure seamless
                      functionality. These services also include database
                      management, API integrations, and the implementation of
                      scalable architecture, enabling applications to grow with
                      the evolving needs of businesses. Quality assurance,
                      testing, and ongoing maintenance play pivotal roles,
                      guaranteeing the reliability, security, and optimal
                      performance of web applications. Strategic consulting is
                      often part of the service, guiding clients in aligning
                      their digital objectives with the broader goals of their
                      businesses. In essence, web app development services offer
                      a holistic approach to crafting tailored, user-centric
                      solutions that elevate online experiences and drive
                      business success.
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
                            href={`/services/webappdevelopment/${service.slug}`}
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
                      Web app development offers businesses a global reach and
                      cross-platform compatibility, enabling users to access
                      applications from any device with an internet connection.
                      Cost-effective and easy to maintain, web apps allow for
                      rapid development and real-time updates without requiring
                      manual intervention from users. With scalability and
                      user-centric design, web apps provide a responsive and
                      engaging interface.
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
                    Understanding Data Web App Dev Services
                  </Link>
                </h4>
                <p>
                  Embrace the power of innovation with our Web App Development
                  Services. At CloudPro AI, we pride ourselves on delivering
                  cutting-edge solutions tailored to meet the unique needs of
                  your business. Our expert team understands the dynamics of web
                  application development, ensuring seamless and user-centric
                  experiences.
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
                  In our Web Development Services, service management is a key
                  component that ensures a seamless and client-centric
                  experience. CloudPro AI places great emphasis on understanding
                  and aligning with our clients' goals. Our service management
                  approach encompasses efficient communication, transparent
                  project tracking, and proactive issue resolution.
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
                  Web development faces challenges in diverse client needs,
                  evolving technologies, and device compatibility. CloudPro AI
                  tackles these by fostering a culture of innovation, staying
                  agile with continuous learning, and implementing rigorous
                  testing and quality assurance. Our solutions prioritize
                  adaptability, ensuring robust and scalable web applications
                  that meet the dynamic demands of the digital landscape.
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
                  The future outlook for web development services holds exciting
                  possibilities as technology continues to advance. CloudPro AI
                  is committed to staying at the forefront of innovation,
                  anticipating emerging trends, and incorporating cutting-edge
                  technologies. With a focus on user experience, responsive
                  design, and integration of artificial intelligence, we aim to
                  enhance the functionality and accessibility of web
                  applications.
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
                    Strategic Deployment of Web Development Services
                  </Link>
                </h4>
                <p>
                  At CloudPro AI, strategic deployment is at the core of our web
                  development services. We meticulously plan and execute each
                  project, aligning our approach with client objectives and
                  industry best practices. Our deployment strategy emphasizes
                  agility, allowing for quick adaptations to changing
                  requirements. We prioritize scalability, ensuring that web
                  applications can grow seamlessly with evolving business needs.
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
                  The evolution of service delivery in web app development
                  services has been transformative, driven by technological
                  advancements and changing user expectations. CloudPro AI has
                  played a pivotal role in this evolution by adopting agile
                  methodologies, embracing automation, and integrating DevOps
                  practices. This approach accelerates the development life
                  cycle, enhances collaboration, and ensures rapid and reliable
                  service delivery.
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
