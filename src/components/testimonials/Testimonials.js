import React, { useState } from "react";
import TestimonialCard from "./testimonialCard";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras nec sagittis ipsum.",
      author: "John Doe",
      designation:"Founder"
    },
    {
      id: 2,
      text: "Nullam vitae justo ac dolor fermentum efficitur. Integer vestibulum eros nec vestibulum consectetur. In hac habitasse platea dictumst.",
      author: "Jane Smith",
      designation:"Founder"

    },
    {
      id: 3,
      text: "Curabitur vehicula lacus nec fermentum efficitur. Fusce at odio nisi. Vivamus a ullamcorper lectus, a dignissim nisi. Morbi vel sem vitae ante tempus lacinia.",
      author: "David Johnson",
      designation:"Founder"

    },
    {
      id: 4,
      text: "Integer euismod diam quis lacus condimentum, eget posuere nisl aliquet. Sed fermentum turpis sit amet velit finibus, eget suscipit justo interdum.",
      author: "Emily Brown",
      designation:"Founder"

    },
    {
      id: 5,
      text: "Praesent consectetur justo at eros ullamcorper volutpat. Ut vitae arcu sed libero varius malesuada. Suspendisse at arcu et ipsum tincidunt fermentum.",
      author: "Michael Wilson",
      designation:"Founder"

    },
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
            <img src="/assets/images/icons/leftarrow.svg" className="border border-black rounded-full hover:bg-gray-300"></img>
            </button>
            <button onClick={nextTestimonial}><img src="/assets/images/icons/rightarrow.svg" className="border border-black rounded-full hover:bg-gray-300"></img></button>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>{testimonials[currentTestimonial].text}</p>
          <p>- {testimonials[currentTestimonial].author}</p>
        </div>
      </div>
      <TestimonialCard/>
      
    </div>
  );
};

export default Testimonials;
