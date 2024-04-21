import React from "react";

const IndustriesImage = () => {
  return (
    <div className="bg-[#0C2126] ">
      <div className="container mt-16">
        <h4 className="text-[#EDFF6C] font-bold text-sm  md:p-6 p-2 pt-4 md:pt-10">
          Industries
        </h4>
        <p className="text-white text-3xl md:w-1/2 lg:w-1/3 sm:p-10 p-2">
          The wide spectrum of industries we serve
        </p>
        <div className="images grid grid-cols-1 sm:grid-cols-3 lg:flex pb-16 pt-4 gap-4 justify-center sm:justify-start">
        <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/airlinesImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-right py-2">
              Airlines
            </p>
          </div>
          <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/AutomotiveImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-right py-2">
              Automotive
            </p>
          </div>
          <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/bankingAndFinancialImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-right py-2">
              Banking and Financial
            </p>
          </div>
          <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/constructionImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-right  py-2">
              Construction
            </p>
          </div>
          <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/educationImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white  text-right py-2">
              Education
            </p>
          </div>
          <div class="relative bg-white rounded-md cursor-pointer h-64 w-52">
            <img
              src="/assets/images/industries/retailsImage.svg"
              alt="Education"
              class="block w-full h-full object-cover rounded-md"
            />
            <p class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-right py-2">
              Retails
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesImage;
