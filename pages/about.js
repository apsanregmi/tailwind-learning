import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Partner from "@/src/components/Partner";
import { Col, Container, Figure, Row } from "react-bootstrap";


const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="/assets/images/about/about-five1.jpg" alt="About" />
                <img src="/assets/images/about/about-five2.jpg" alt="About" />
                {/* <div className="experience-years">
                  <span className="years">25</span>
                  <h4>Years Of ExperienceIT Solutions</h4>
                </div> */}
                <img
                  className="abut-bg-shape"
                  src="/assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <p>
                    At Cloud Pro AI, we are driven by a passion for innovation
                    and a commitment to empowering businesses through
                    cutting-edge cloud solutions. Our journey began with a
                    vision to redefine the landscape of artificial intelligence
                    and data engineering, providing our clients with
                    unparalleled services that propel them toward success. With
                    a dedicated team of experts, we navigate the complexities of
                    cloud architecture, data lakes, and machine learning to
                    deliver comprehensive solutions tailored to meet the unique
                    needs of each client. We pride ourselves on fostering a
                    culture of excellence, continuous learning, and
                    client-centricity. At Cloud Pro AI, we don't just provide
                    services; we forge partnerships, turning visions into
                    reality and aspirations into achievements. Join us on a
                    transformative journey where the possibilities are
                    limitless, and the future is powered by innovation.
                  </p>
                </div>

                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">Our Mission</span>
                  <p>
                    In the ever-evolving landscape of technology, businesses
                    face the constant challenge of staying ahead in a digital
                    world. At our consulting firm, we understand the importance
                    of innovation and adaptation. With a dedicated focus on data
                    engineering, cloud engineering, web app development, AI,
                    Machine Learning, and Generative AI services, our mission is
                    clear: to empower organizations to harness the
                    transformative power of technology. We provide tailored
                    solutions that not only address current needs but also
                    prepare clients for future challenges. Through expertise,
                    collaboration, and a commitment to excellence, we strive to
                    help our clients thrive in an increasingly competitive and
                    data-driven environment. 
                    <br></br>Our mission is to be at the
                    forefront of technological advancement and provide top-notch
                    services that empower businesses to innovate, grow, and
                    succeed. We exist to empower organizations with the tools
                    and expertise they need to thrive in a data-centric world.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
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
                    Innovative Solutions:
                  </Link>
                </h4>
                <p>
                  At Cloud Pro AI, innovation is at the core of everything we
                  do. We consistently push boundaries and explore new horizons
                  to deliver cutting-edge solutions that meet the evolving needs
                  of our clients. Our commitment to staying ahead in the rapidly
                  advancing fields of artificial intelligence and cloud services
                  sets us apart as a leader in the industry.
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
                    Client-Centric Approach:
                  </Link>
                </h4>
                <p>
                  We prioritize the success and satisfaction of our clients
                  above all else. Our team works closely with each client to
                  understand their unique challenges and goals, ensuring that
                  our solutions are tailor-made to address their specific needs.
                  The long-term success of our clients is a testament to our
                  unwavering dedication to building strong, collaborative
                  partnerships.
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
                    Expert Team
                  </Link>
                </h4>
                <p>
                  Our success is driven by a team of skilled and passionate
                  professionals who are experts in their respective fields. From
                  cloud architects to data engineers and machine learning
                  specialists, our diverse team brings a wealth of knowledge and
                  experience to every project. This expertise allows us to
                  deliver high-quality services that make a meaningful impact on
                  our clients' businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Company Statistics</span>
                    <h2>Learn About Our Company Statistics</h2>
                  </div>
                  <Link legacyBehavior href="/about">
                    <a className="read-more">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={50}
                      >
                        <Counter end={50} />
                      </span>
                      <span className="counter-title">Project Completed</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="99.8"
                      >
                        <Counter end={99.8} decimals="1" />
                      </span>
                      <span className="counter-title">Clinets Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="5"
                      >
                        <Counter end={5} decimals="1" />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={10}
                      >
                        <Counter end={10} />
                      </span>
                      <span className="counter-title">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Team Area start */}

      <section className="services-area bgc-gray text-white p-30 pt-100 pb-100 rel z-1">
        <h2 style={{ textAlign: "center" }}>Message From CEO</h2>

        <Container>
          <Row>
            <Col lg={6} className="text-center">
              <Figure>
                <Figure.Image
                  src="assets/images/team/member1.jpg"
                  alt="CEO"
                  roundedCircle
                  fluid
                  style={{ width: "40%", height: "40%%" }} // Adjust the size as needed
                />
              </Figure>
              <h4 className="fw-lighter mt-30">Nimesh Kuinkel</h4>
              <h4>CEO & Founder</h4>
              <a href="https://www.linkedin.com/in/nimesh-kuinkel-78a622120/">
                <i className="fab fa-linkedin-in" />
              </a>
            </Col>
            <Col lg={6}>
              <blockquote className="blockquote text-center mt-30"></blockquote>
              <h6 className="fw-lighter" style={{ fontSize: "100%" }}>
                {" "}
                {/* Adjust the font size as needed */}
                With over a decade of experience in the IT industry, I bring a
                wealth of knowledge in diverse domains to my role. My focus is
                on innovation, especially in harnessing Data and AI
                technologies. This expertise is crucial in developing
                cutting-edge software products that keep our clients at the
                forefront of the digital landscape. I am deeply passionate about
                using data for effective decision-making. In leading our team, I
                emphasize creativity and technical excellence, constantly
                pushing the boundaries in AI and software development. This
                approach fosters a culture where breakthroughs are not just
                possible, but expected
              </h6>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Team Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>Top-Notch Cloud Service Consultant</h2>
              </div>
            </div>
          </div>
          <div className="why-choose-tab">
            <ul className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#wc-tap1"
                >
                  <i className="flaticon-creativity" />{" "}
                  <span>Cloud Architecture Consulting</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap2">
                  <i className="flaticon-test" />{" "}
                  <span>Data Engineering Solutions</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap3">
                  <i className="flaticon-cyber-security-1" />{" "}
                  <span>Generative AI and ML Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap4">
                  <i className="flaticon-support" />{" "}
                  <span>Cost Optimization for Cloud Infrastructure</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="wc-tap1">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src="/assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        At Cloud Pro AI, we believe that a truly impactful
                        application is born from the synergy of innovation and
                        interactivity. Our commitment to pushing technological
                        boundaries and introducing innovative solutions defines
                        our approach. Through interactive and user-centric
                        designs, we strive to create applications that not only
                        meet but exceed user expectations, delivering a seamless
                        and engaging experience.
                      </p>
                      {/* <ul className="list-style-one pt-5">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul> */}
                      <Link legacyBehavior href="404">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap2">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img
                        src="/assets/images/about/why-choose1.jpg"
                        alt="Why Choose?"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap3">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src="/assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
      <Partner />
      {/* Testimonials Area Two end */}
      {/* Partners Area start */}
    </Layout>
  );
};
export default About;
