import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Signup from "@/src/components/forms/SignupForm";

import Partner from "@/src/components/Partner";
import SignupForm from "@/src/components/forms/SignupForm";
import TechnologyUsed from "@/src/components/technologyused/TechnologyUsed";
import { Col, Container, Figure, Row } from "react-bootstrap";
import FeaturedProduct from "@/src/components/featured/FeaturedProduct";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {

  console.log(process.env);
  console.log("hello world", process.env);
  return (

    
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container pb-40">
          {/* <div className="row align-items-center"> */}
          <div>
            <div className="align-self-center">
              {/* <div className="hero-content pt-50 pb-125 rpb-0 wow fadeInUp delay-0-4s"> */}
              <div className=" pt-50 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h1 className="text-white pt-50 pb-30">Cloud Pro AI</h1>
                <br />
                <h2 className="text-white ">
                  Data, AI and Software Cloud : Services Consultant
                </h2>

                <p className="tagline">
                  <u>
                    Transform Your Vision into Reality with our Data-Driven
                    Intelligence, AI and Cutting-Edge Cloud Solutions
                  </u>
                </p>

                <p>
                  We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
                  Business and Infrastructure Readiness for the Ultimate
                  Technological Leap.
                </p>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                  <img
                    className="shape one"
                    src="/assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="/assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="/assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6" >
              <FeaturedProduct/>
              
            </div> */}
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="/assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          <img
            className="shape right-shape wow fadeInRight delay-0-8s"
            src="/assets/images/shapes/hero-right-shape.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Partners Area start */}
      <section className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>Our Esteemed Partners - Guiding the Journey to Success</h2>
            <p>
              At Cloud Pro AI, we take pride in fostering meaningful and
              enduring partnerships. Our collaborative network consists of
              industry leaders, innovators, and visionaries who share our
              commitment to excellence. Together, we navigate the dynamic realms
              of technology, pooling our expertise and resources to create
              synergies that drive success. Our partners play a pivotal role in
              shaping the future, and we are privileged to embark on this
              transformative journey together
            </p>
          </div>
        </div>
        <Partner />
      </section>
      {/* Partners Area end */}
      {/* About Area start */}
      <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Small Enough to Care Big Enough to Success</h2>
                </div>
                <p>
                  Cloud Pro AI - Where innovation meets precision. We believe in
                  being small enough to provide personalized attention to each
                  client, ensuring their unique needs are met with precision.
                  Yet, we stand tall with a wealth of expertise, empowering
                  businesses to reach new heights through cutting-edge cloud
                  solutions. With Cloud Pro AI, success is not just a goal; it's
                  a commitment we keep to make your journey to the cloud
                  seamless and triumphant.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+000(123)45688">+1 415-393-2021</a>
                    </div>
                  </div>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Cloud Consulting
                        </Link>
                      </h4>
                      <p>
                        Unleashing Possibilities, Empowering Growth. In the
                        dynamic realm of digital evolution, cloud consulting
                        stands as a beacon.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="/assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Generative AI and ML
                        </Link>
                      </h4>
                      <p>
                        Pioneering the Future of Intelligent Creativity.
                        Harnessing the extraordinary capabilities of Generative
                        AI and Machine Learning,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="/assets/images/about/about1(1).jpg"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="/assets/images/about/about-logo.png"
                    alt="About"
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="/assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="/assets/images/about/about2.jpg"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best Cloud Services</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>

                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cloud Architecture Consulting
                    </Link>
                  </h4>
                  <p>
                    Cloud Architecture Consulting at Cloud Pro AI involves
                    providing expert guidance and strategic planning for
                    designing, implementing, and optimizing cloud-based
                    solutions. Our consultants work closely with clients to
                    assess their unique requirements, recommend suitable cloud
                    architectures, and ensure alignment with business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cost Optimization for Cloud Infrastructure
                    </Link>
                  </h4>
                  <p>
                    Cost Optimization for Cloud Infrastructure involves
                    analyzing and implementing strategies to efficiently manage
                    expenses related to cloud services. Cloud Pro AI offers
                    tailored solutions to optimize resource utilization,
                    leverage reserved capacity, and implement auto-scaling
                    mechanisms, ensuring clients achieve maximum performance at
                    minimal costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Information Governance
                    </Link>
                  </h4>
                  <p>
                    At Cloud Pro AI, our Information Governance service is
                    dedicated to ensuring data integrity, security, and
                    compliance. We implement comprehensive strategies and
                    frameworks to govern data throughout its lifecycle, covering
                    data quality, privacy, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Data Lakes and Warehouses
                    </Link>
                  </h4>
                  <p>
                    our Data Lakes and Warehouses service empowers businesses by
                    creating centralized repositories for diverse data types. We
                    design and implement robust data lakes and warehouses,
                    facilitating seamless data integration, analysis, and
                    retrieval.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Data Architecture
                    </Link>
                  </h4>
                  <p>
                    Cloud Pro AI's Data Architecture Service provides robust and
                    scalable solutions for organizing, managing, and optimizing
                    data structures. Our experts design architecture tailored to
                    your business needs, ensuring efficient data storage,
                    retrieval, and analytics to drive informed decision-making."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discovery And Assessment</h4>
                  <p>
                    We conduct a comprehensive assessment of your existing
                    infrastructure, applications, and workflows to identify
                    opportunities for improvement and optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Strategic Planning</h4>
                  <p>
                    We develop a tailored cloud strategy that aligns with your
                    business objectives. This includes selecting the right cloud
                    service models (IaaS, PaaS, SaaS).
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Implementation and Migration </h4>
                  <p>
                    With a detailed plan in place, we proceed to implement the
                    cloud solutions. This involves migrating applications, data,
                    and services to the cloud environment
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Optimization and Performance Tuning</h4>
                  <p>
                    Post-implementation, we continuously monitor the cloud
                    infrastructure to identify areas for optimization. This
                    includes fine-tuning configurations, scaling resources based
                    on demand,
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Continuous Improvement and Support:</h4>
                  <p>
                    Cloud Pro AI is committed to ongoing support and
                    improvement. We stay updated with the latest cloud
                    technologies and trends, providing proactive support,
                    managing updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-area-two pt-130 rpt-100 pb-100 ">
        <TechnologyUsed />
      </section>

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

      <section className="testimonials-area pt-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Experts Say About Business Use Cases</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />

                <div className="dot-shapes">
                  <img
                    src="/assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="/assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <div class="container">
  <div class="row justify-content-center align-items-center"> 
    <div class="col-12 col-md-8">
      {/* <h2 class="text-center" style="color: #30f0b6;">Explore Our Products</h2> */}
      {/* <h2 class="text-center" style="color: #30f0b6;">Explore Our Products</h2> */}
      <h2 className="text-center" style={{ color: '#30f0b6' }}>Explore Our Products</h2>


      

      <div class="container mb-120">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4">
            <FeaturedProduct/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

    </Layout>
  );
};
export default Index;