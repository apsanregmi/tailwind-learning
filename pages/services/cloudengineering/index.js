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

    fetch(window.origin + "/api/services/cloudengineering/services")
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
      <PageBanner pageName={"Services"} pageTitle={"Cloud Engineering Services"}/>
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Cloud Engineering Services</h2>
                </div>
                <p>
                  Cloud engineering services encompass the strategic planning,
                  implementation, and management of cloud-based solutions to
                  optimize organizational processes. This includes designing
                  scalable cloud architectures, employing Infrastructure as Code
                  (IaC) for efficient deployments, facilitating seamless
                  migrations, integrating DevOps practices for collaboration,
                  ensuring robust security measures, optimizing performance and
                  costs, managing data effectively, implementing monitoring and
                  analytics tools, and providing comprehensive training and
                  documentation
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What Are Cloud Services?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Flexibility</li>
                      <li>Scalability</li>
                      <li>Cost-Efficiency</li>
                      <li>Security</li>
                      <li>Collaboration and Remote Work</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Cloud engineering services encompass a comprehensive suite
                      of solutions designed to architect, build, and optimize
                      cloud-based infrastructures. At CloudPro AI, our cloud
                      engineering expertise extends across platforms like AWS,
                      Azure, and Google Cloud, offering tailored solutions for
                      businesses seeking seamless migration, scalable
                      architectures, and efficient cloud management. From
                      designing robust cloud architectures to implementing
                      DevOps practices, our services ensure that clients harness
                      the full potential of the cloud. With a focus on agility,
                      security, and cost-effectiveness, we empower organizations
                      to thrive in the digital era through cutting-edge cloud
                      engineering solutions.
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
                  In the rapidly evolving landscape of technology, Generative
                  Artificial Intelligence (AI) and Machine Learning (ML) stand
                  at the forefront, promising groundbreaking innovations that
                  redefine how businesses operate. As organizations embrace
                  these advanced technologies, effective service management
                  becomes paramount to harness their full potential and drive
                  meaningful outcomes. The collaboration between service
                  management experts and data science teams is becoming more
                  pronounced. Service managers bring their domain expertise to
                  the table, ensuring that AI and ML models not only deliver
                  accurate predictions but also align with the broader business
                  context.
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
                            href={`/services/cloudengineering/${service.slug}`}
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
                      Cloud engineering services revolutionize the way
                      organizations manage their IT infrastructure and
                      applications, bringing a host of transformative benefits.
                      One of the key advantages is scalability, allowing
                      businesses to seamlessly expand or contract their
                      resources based on demand. This scalability translates
                      into cost efficiency, as companies only pay for the
                      computing power and storage they actually use, eliminating
                      the need for substantial upfront investments.
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
                    Understanding Cloud Services
                  </Link>
                </h4>
                <p>
                  Cloud services provide on-demand access to a shared pool of
                  computing resources, including servers, storage, databases,
                  networking, software, analytics, and more, over the internet.
                  Users can leverage these resources without the need for
                  upfront investments in hardware or infrastructure.
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
                  Service management encompasses various key components to
                  ensure the effective delivery of services.Service Strategy,
                  which involves defining the services' goals and aligning them
                  with business objectives. Service Design focuses on designing
                  services that meet customer needs, considering aspects like
                  technology, processes, and people.
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
                  Cloud services face challenges such as security concerns,
                  downtime, compliance issues, and data integration
                  complexities. To overcome these challenges, robust security
                  measures, redundancy systems for reliability, adherence to
                  compliance frameworks, and effective data management
                  strategies are essential.
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
                  The future outlook of cloud services is promising, with
                  continuous advancements in technologies like edge computing,
                  AI, and 5G. As businesses increasingly rely on digital
                  transformation, cloud services will play a pivotal role in
                  providing scalable, flexible, and innovative solutions. The
                  integration of emerging technologies will enhance efficiency,
                  security, and customization, shaping the future landscape of
                  cloud services to meet evolving business needs.
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
                    Strategic Deployment of Cloud Services
                  </Link>
                </h4>
                <p>
                  Strategic deployment of cloud services involves thoughtfully
                  aligning business goals with cloud solutions. By leveraging
                  the scalability, flexibility, and cost-effectiveness of cloud
                  platforms, organizations can optimize operations, enhance
                  agility, and drive innovation. This strategic approach ensures
                  that cloud services contribute to the overall business
                  strategy, fostering growth and competitive advantage.
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
                  The evolution of service delivery has undergone a
                  transformative journey, propelled by technological
                  advancements. From traditional, on-premise models to the
                  cloud-driven paradigm, businesses now experience a shift
                  towards more agile, scalable, and efficient service delivery
                  mechanisms. This evolution encompasses streamlined processes,
                  automation, and a heightened focus on user experience,
                  fostering a responsive and customer-centric approach.
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
                  <Link legacyBehavior href="/services/dataengineering">
                    Data Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/dataengineering">
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
                <Link legacyBehavior href="/services/generativeaiandml">
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
