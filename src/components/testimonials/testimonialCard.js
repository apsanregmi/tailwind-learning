import React from "react";

const TestimonialCard = () => {
  return (
    <div className="flex  mb-20 bg-[#F3F4F2] max-w-4xl">
      <div className="w-fit">
        <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
          <img
            src="/assets/images/testimonials/testimonials1.svg"
            alt="Education"
            class="block w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="text max-w-md px-2 pt-2 pb-8">
        <p className="mb-10 px-7">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </p>
        <p className="author font-bold text-black pl-7">Sujan Timilsana</p>
        <p className="designation pl-7 font-inter">CEO & Founder </p>
      </div>
      <div className="stats pt-16 border-l-2 pl-2 ">
        <div>
            <h1 className="text-black font-bold text-4xl"> 20%</h1>
            <p> Business Growth</p>
        </div>
        <div className="mt-4">
            <h1 className="text-black font-bold text-4xl"> 3000K</h1>
            <p> Daily New Sales</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
