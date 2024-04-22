import React from "react";

const TestimonialCard = ({ text, author, image, designation, stat1, stat1Text, stat2, stat2Text }) => {
  return (
    <div className="flex  mb-20 bg-[#F3F4F2] max-w-4xl">
      <div className="w-fit">
        <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
          <img
            src={image}
            alt="testimonials1"
            class="block w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="text max-w-md px-2 pt-2 pb-8">
        <p className="mb-10 px-7">
         {text}
        </p>
        <p className="author font-bold text-black pl-7">{author}</p>
        <p className="designation pl-7 font-inter">{designation} </p>
      </div>
      <div className="stats pt-16 border-l-2 pl-2 ">
        <div>
            <h1 className="text-black font-bold text-4xl"> {stat1}</h1>
            <p> {stat1Text}</p>
        </div>
        <div className="mt-4">
            <h1 className="text-black font-bold text-4xl"> {stat2}</h1>
            <p> {stat1Text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
