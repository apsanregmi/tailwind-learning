import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import ContactForm from "@/components/forms/ContactForm"
const Contact = () => {

  return (
    <Layout title={"Contact- CloudProAI"}>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Help</span>
                <h3>Contact Us</h3>
              </div>
              {/* <p>
                Ensuring a seamless line of communication is at the heart of our
                commitment to client satisfaction. Cloud Pro AI values the
                importance of staying connected. For any inquiries,
                collaborations, or simply to reach out and connect, feel free to
                use the contact information provided below
              </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span>584 Castro St #2165, San Francisco, CA 94114-2512</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:supportitinfo@gmail.com">
                  contact@cloudproai.com
                </a>
                <br />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Phone </h4>
                <span>
                  Mobile : <a href="callto:+000(123)45667">+1 415-393-2021</a>
                </span>
                <span>{/* Teliphone : <a href="callto:+1234566"></a> */}</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Business Hours</h4>
                <b>Monday - Friday,</b>
                <span>8:00am -5:00pm PST </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1033732124775!2d-122.4371189847955!3d37.76271087976288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807b4e1ae0ef%3A0xf4a32d9b8c4b60f0!2s584%20Castro%20St%20%232165%2C%20San%20Francisco%2C%20CA%2094114-2512!5e0!3m2!1sen!2sus!4v1663473911885!5m2!1sen!2sus"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Send Us Message</h2>
                </div>
                <p>
                  Submitting a message is easy. Fill out the form below,
                  providing details about your inquiry or request, and our
                  dedicated team will get back to you as soon as possible. Your
                  journey to innovation and excellence begins with a simple
                  message. We look forward to hearing from you and exploring the
                  possibilities of working together.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;