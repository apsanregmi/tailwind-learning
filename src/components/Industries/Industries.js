import React from "react";

const Industries = () => {
  return (
    <div
      className="bg-[#0C2126] rounded-t-3xl
        "
    >
      <div className="container">
        <h1 className="text-white font-bold text-xl md:text-3xl ld:text-5xl md:p-6 p-2 pt-4 md:pt-10">
          Industries
        </h1>
        <p className="text-white md:w-1/2 lg:w-1/3 sm:p-10 p-2">
          We bring cloud and data best practices to our customers so they can
          focus on what they do best—not how they get there
        </p>
        {/* <div className="images grid grid-cols-1 sm:grid-cols-3 lg:flex pb-16 pt-4 gap-4 justify-center sm:justify-start  "> */}
        <div className="images grid grid-cols-1 sm:grid-cols-3 lg:flex pb-16 pt-4 gap-4 justify-center sm:justify-start">

          <div className="bg-white  px-10 pt-6 rounded-md cursor-pointer h-52 w-52">
            <img
              src="/assets/images/industries/airlines.svg"
              alt="Logo"
              className="block cursor-pointer"
            />
            <p className="text-black relative top-8 left-16 font-bold"> Airlines</p>
          </div>
          <div className="bg-white  px-10 pt-6 rounded-md cursor-pointer h-52 w-52">

            <img
              src="/assets/images/industries/automotive.svg"
              alt="Logo"
              className="block cursor-pointer"
            />
            <p className="text-black relative top-8 left-14 font-bold"> Automotive</p>
          </div>
          <div className="bg-white  px-10 pt-6 rounded-md cursor-pointer h-52 w-52">

            <img
              src="/assets/images/industries/finance.svg"
              alt="Logo"
              className="block cursor-pointer"
            />
            <p className="text-black relative top-8 left-16 font-bold"> Finance</p>
          </div>
          <div className="bg-white  px-10 pt-6 rounded-md cursor-pointer h-52 w-52">

            
            <img
              src="/assets/images/industries/construction.svg"
              alt="Logo"
              className="block cursor-pointer"
            />
            <p className="text-black relative top-8 left-10 font-bold"> Construction</p>
          </div>
          <div className="bg-white  px-10 pt-6 rounded-md cursor-pointer h-52 w-52">

            <img
              src="/assets/images/industries/education.svg"
              alt="Logo"
              className="block cursor-pointer"
            />
            <p className="text-black relative top-8 left-12 font-bold"> Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
