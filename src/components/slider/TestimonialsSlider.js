import { testimonialSlider } from "@/src/sliderProps";
import { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

export default class TestimonialsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <div className="row justify-content-between align-items-end mb-30">
          <div className="col-lg-8">
            <div className="section-title mb-25 wow fadeInRight delay-0-2s">
              <span className="sub-title mb-15">Clients Feedback</span>
              <h2>What Our Clients Say Us</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="slider-arrow mb-25 text-lg-end">
              <button
                className="slick-arrow testi-prev"
                onClick={this.previous}
              >
                <i className="far fa-angle-left" />
              </button>
              <button className="slick-arrow testi-next" onClick={this.next}>
                <i className="far fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <Slider
          {...testimonialSlider}
          ref={(c) => (this.slider = c)}
          className="testimonial-slider"
        >
          <div className="testimonial-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author5.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                CloudPro AI has been an invaluable partner in transforming our
                business through their expertise in AI and ML. Their seamless
                integration of cloud solutions and data engineering has elevated
                our operational efficiency, and their exceptional web
                development services have significantly enhanced our online
                presence.
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Roshan D.</h4>
                  <span className="designation">CTO, Fixez </span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-4s">
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                Choosing Cloud Pro AI was a game-changer for our business. Their
                unmatched proficiency in cloud data and AI has not only
                streamlined our operations but propelled us into a new era of
                competitiveness. A partnership with impact, delivering success
                at every turn.
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Jose T. McMichael</h4>
                  <span className="designation">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author4.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                At the forefront of technological innovation, redefines
                excellence in cloud data and AI services. Their Cloud Pro AI
                tailored solutions have empowered us to navigate the
                complexities of the digital landscape with confidence, achieving
                unprecedented results
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}

const TestimonialsSlider2 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <Fragment>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="testi-image-slider"
      >
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author1.jpg"
            alt="Author"
          />
        </div>
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author2.jpg"
            alt="Author"
          />
        </div>
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author3.jpg"
            alt="Author"
          />
        </div>
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author4.jpg"
            alt="Author"
          />
        </div>
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author5.jpg"
            alt="Author"
          />
        </div>
        <div className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author6.jpg"
            alt="Author"
          />
        </div>
      </Slider>
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="testi-content-slider"
      >
        <div className="testi-content-item">
          <h4>Scalable Infrastructure for E-Commerce</h4>
          <p>
            Help e-commerce businesses seamlessly handle fluctuating workloads
            by providing a scalable and flexible cloud infrastructure. Ensure
            high availability during peak shopping seasons and optimize costs
            during quieter periods.
          </p>
          <div className="author">
            <span className="h4">Nimesh Kuinkel</span>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
        <div className="testi-content-item">
          <h4>Agile Software Development with DevOps</h4>
          <p>
            Accelerate software development cycles by implementing a cloud-based
            DevOps strategy. Enable continuous integration, deployment, and
            delivery, fostering collaboration between development and operations
            teams for faster time-to-market.
          </p>
          <div className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>Cloud DevOps Engineer</span>
          </div>
        </div>
        <div className="testi-content-item">
          <h4>Hybrid Cloud for Financial Services:</h4>
          <p>
            Cater to the financial industry's need for a hybrid cloud model,
            combining on-premises and cloud solutions. Offer secure and
            compliant infrastructure for sensitive financial data while enabling
            scalability and innovation.
          </p>
          <div className="author">
            <span className="h4">Dipendra Adhikari</span>
            <span>Hybrid Cloud Solutions Architect for Financial Services</span>
          </div>
        </div>
        <div className="testi-content-item">
          <h4>Cybersecsurity Services for Small Businesse</h4>
          <p>
            Address the cybersecurity needs of small businesses by offering
            cloud-based security solutions. Provide threat detection, data
            encryption, and secure access controls to safeguard sensitive
            business information.
          </p>
          <div className="author">
            <span className="h4">Suman Aryal</span>
            <span>Cloud Security Specialist for Small Businesses</span>
          </div>
        </div>
        <div className="testi-content-item">
          <h4>Data Analytics and Business Intelligence:</h4>
          <p>
            Empower businesses to gain actionable insights from their data.
            Offer cloud-based data analytics solutions for real-time reporting,
            predictive analytics, and business intelligence, enabling informed
            decision-making.
          </p>
          <div className="author">
            <span className="h4">Jay Sloan</span>
            <span>Data Engineer </span>
          </div>
        </div>
        <div className="testi-content-item">
          <h4>Machine Learning for Predictive Maintenance:</h4>
          <p>
            Implement machine learning algorithms on the cloud to predict
            equipment failures and schedule proactive maintenance. Help
            industries such as manufacturing optimize their operations, reduce
            downtime, and extend the lifespan of machinery.
          </p>
          <div className="author">
            <span className="h4">Leslie Parker</span>
            <span>Predictive Maintenance ML Specialist</span>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};
export { TestimonialsSlider2 };
