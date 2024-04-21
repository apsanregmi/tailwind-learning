import React from "react";

const PageBannerMain = ({ title, subtitle }) => {
  return (
    <div className="bg-[#0C2126] flex justify-center items-center h-fit pb-16 pt-14">
      <div className="md:container md:mx-28 md:py-24 px-2 md:px-6 flex md: w-full md:pt-3/4 justify-center ">
        <div className="max-w-2xl mx-2 ">
          <h1 className="text-4xl lg:text-4xl text-white font-bold mb-8 justify-center text-center">
            {title}
          </h1>
          <p className="text-xl lg:text-xl text-white leading-relaxed  space-x-3 text-center justify-center">
            {subtitle}
          </p>
          <div class="flex flex-col items-center  sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-4 pt-10 justify-center">
            <div>
            <button className="bg-[#EDFF6C]  hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                  Contact Us
               </button>
            </div>
            <div>
            <p className="font-normal text-white text-xl flex-col pt-2  cursor-pointer hover:underline">
                 Book a Free Call
                 <span className="ml-2 cursor-pointer font-extrabold"> ↗</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBannerMain;

