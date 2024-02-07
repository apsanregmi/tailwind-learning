import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      );
  
      if (res.status === 200) {
        alert("Sent Successfully, We will get back to you soon.");
  
        // Reset the form fields
        setFormData({
          name: '',
          phone_number: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      alert("Can't send, please check and try again.");
    }
  };
  


  return (
    <form onSubmit={handleSubmit} className="contactForm">

      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Message"
          required
        />
      </div>
      <div className="form-group text-center mb-0">
        <button type="submit" className="theme-btn style-two">
          Send Message <i className="far fa-long-arrow-right" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;