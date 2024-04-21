import React from "react";

const IndustriesImage = () => {
  return (
    <div className="bg-[#0C2126] ">
      <div className="container pt-16">
        <h4 className="text-[#EDFF6C] font-bold text-sm  md:p-6 p-2 pt-4 md:pt-10">
          Industries
        </h4>
        <p className="text-white text-3xl md:w-1/2 lg:w-1/3 sm:p-10 p-2">
        The wide spectrum of industries we serve
        </p>
        <div className="images grid grid-cols-1 sm:grid-cols-3 lg:flex pb-16 pt-4 gap-4 justify-center sm:justify-start">
        <div class="absolute w-193 h-296 top-1969 left-205 gap-0 border-l-16 border-t-16 border-blue-500 rounded-tl-16 opacity-0">
            <img
              src="/assets/images/industries/airlinesImage.svg"
              alt="Airlines"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Airlines</p>
          </div>
          <div className="bg-white rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/automotiveImage.svg"
              alt="Automotive"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Automotive</p>
          </div>
          <div className="bg-white rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/bankingAndFinancialImage.svg"
              alt="Finance"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Finance</p>
          </div>
          <div className="bg-white rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/constructionImage.svg"
              alt="Construction"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Construction</p>
          </div>
          <div className="bg-white rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/educationImage.svg"
              alt="Education"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Education</p>
          </div>
          <div className="bg-white rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/retailsImage.svg"
              alt="Education"
              className="block w-full h-full object-cover"
            />
            <p className="text-black text-center font-bold">Retails</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesImage;
