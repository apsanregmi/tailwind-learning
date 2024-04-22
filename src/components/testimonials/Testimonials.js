import React, { useState } from "react";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.",
      author: "Sujan Timilsana",
      designation: "Founder",
      image: "/assets/images/testimonials/testimonials1.svg",
      stat1: "20%",
      stat1Text: "Business Growth",
      stat2: "3000K",
      stat2Text: "Daily Sales",
    },
    {
      id: 2,
      text: "We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.",
      author: "Mukesh Nepal",
      designation: "Founder & CEO",
      image: "/assets/images/testimonials/testimonials2.svg",

      stat1: "30%",
      stat1Text: "Revenue Increase",
      stat2: "5000K",
      stat2Text: "Monthly Sales",
    },
    // Add more testimonials here if needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="text">
        <h2 className="text-3xl font-bold pt-10">What our clients say</h2>
        <div className="sm:flex justify-between mb-6">
          <p className="md:w-1/3 mt-6">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
          </p>
          <div className="buttons flex justify-end mt-4">
            <button onClick={prevTestimonial} className="mr-2">
              <img
                src="/assets/images/icons/leftarrow.svg"
                className="border border-black rounded-full hover:bg-gray-300"
                alt="Previous"
              />
            </button>
            <button onClick={nextTestimonial}>
              <img
                src="/assets/images/icons/rightarrow.svg"
                className="border border-black rounded-full hover:bg-gray-300"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <TestimonialCard
            text={testimonials[currentTestimonial].text}
            author={testimonials[currentTestimonial].author}
            image={testimonials[currentTestimonial].image}
            designation={testimonials[currentTestimonial].designation}
            stat1={testimonials[currentTestimonial].stat1}
            stat1Text={testimonials[currentTestimonial].stat1Text}
            stat2={testimonials[currentTestimonial].stat2}
            stat2Text={testimonials[currentTestimonial].stat2Text}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
