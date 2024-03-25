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
          infinite={true}
          
        >
          <div class="testimonial-item wow fadeInUp delay-0-2s">
  <div class="image">
    <img src="https://contradagroup.com/wp-content/uploads/2013/11/dummy-person.jpg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
      <h4>Revolutionizing Our Business</h4>
      <div class="ratting">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
    <div class="testi-text">
      Cloud Pro AI has truly revolutionized our business with their expertise in AI and ML. Their seamless integration of cutting-edge cloud solutions and data engineering has elevated our operational efficiency to new heights. Thanks to their exceptional web development services, our online presence has experienced remarkable growth.
    </div>
    <div class="testi-footer">
      <div class="icon">
        <i class="flaticon-quotation"></i>
      </div>
      <div class="title">
        <h4>Rachel T.</h4>
        <span class="designation">Director of Technology, Luminate Industries</span>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-item wow fadeInUp delay-0-4s">
<div class="image">
    <img src="https://i.gzn.jp/img/2022/03/29/ai-generated-faces-marketing-tactic-linkedin/00_m.jpg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
      <h4>A Strategic Partner for Success</h4>
      <div class="ratting">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
    <div class="testi-text">
      Choosing Cloud Pro AI has been a game-changer for our company. Their unparalleled proficiency in cloud data and AI has not only streamlined our operations but also propelled us into a new era of competitiveness. Their partnership has delivered success at every turn.
    </div>
    <div class="testi-footer">
      <div class="icon">
        <i class="flaticon-quotation"></i>
      </div>
      <div class="title">
        <h4>David M.</h4>
        <span class="designation">Chief Technology Officer, NovaTech Solutions</span>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-item wow fadeInUp delay-0-6s">
  <div class="image">
    <img src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
      <h4>Empowering Innovation and Growth</h4>
      <div class="ratting">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
    <div class="testi-text">
      Cloud Pro AI is at the forefront of technological innovation, redefining excellence in cloud data and AI services. Their tailored solutions have empowered us to navigate the complexities of the digital landscape with confidence, achieving unprecedented results.
    </div>
    <div class="testi-footer">
      <div class="icon">
        <i class="flaticon-quotation"></i>
      </div>
      <div class="title">
        <h4>Emily R.</h4>
        <span class="designation">CEO, Synthetix Technologies</span>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-item wow fadeInUp delay-0-8s">
<div class="image">
    <img src="https://dims.apnews.com/dims4/default/1675109/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F09dc41e4beda456aa6c1b8d8bbe36c3d%2F3000.jpeg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
      <h4>Exceptional Service, Exceptional Results</h4>
      <div class="ratting">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
    <div class="testi-text">
      Working with Cloud Pro AI has been an exceptional experience. Their expertise in AI and ML combined with their dedication to excellence has significantly impacted our business. They have not only met but exceeded our expectations, delivering results that have propelled our company forward.
    </div>
    <div class="testi-footer">
      <div class="icon">
        <i class="flaticon-quotation"></i>
      </div>
      <div class="title">
        <h4>Michael P.</h4>
        <span class="designation">Chief Innovation Officer, Nexus Innovations</span>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-item wow fadeInUp delay-1s">
  <div class="image">
    <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
      <h4>Transformative Solutions for Success</h4>
      <div class="ratting">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
    <div class="testi-text">
      Cloud Pro AI has provided transformative solutions that have propelled our business to new heights of success. Their deep understanding of cloud architecture and data engineering, coupled with their innovative approach to AI, has allowed us to innovate and grow with confidence.
    </div>
    <div class="testi-footer">
      <div class="icon">
        <i class="flaticon-quotation"></i>
      </div>
      <div class="title">
        <h4>Sarah L.</h4>
        <span class="designation">Director of Operations, Spark Solutions</span>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-item wow fadeInUp delay-1-2s">
<div class="image">
    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg" alt="Author" />
  </div>
  <div class="content">
    <div class="testi-header">
    <h4>Innovative Partnerships, Exceptional Results</h4>
  <div class="ratting">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
  </div>
</div>
<div class="testi-text">
  Cloud Pro AI has been an invaluable partner in our journey towards digital transformation. Their innovative solutions and dedication to excellence have enabled us to stay ahead of the curve in a rapidly evolving technological landscape. With their support, we have achieved remarkable results and continue to drive innovation within our organization.
</div>
<div class="testi-footer">
  <div class="icon">
    <i class="flaticon-quotation"></i>
  </div>
  <div class="title">
    <h4>John K.</h4>
    <span class="designation">Chief Digital Officer, Quantum Dynamics</span>
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
