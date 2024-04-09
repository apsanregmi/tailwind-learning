import React from "react";

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className="bg-[#0C2126] flex justify-start items-center h-fit pb-16 pt-14">
      <div className="md:container mx-28 py-24 px-6 flex w-1/2 md:pt-3/4 ">
        <div className="max-w-2xl mx-2">
          <h1 className="text-4xl lg:text-4xl text-white font-bold mb-8">
            {title}
          </h1>
          <p className="text-xl lg:text-xl text-white leading-relaxed max-w-xl space-x-3">
            {subtitle}
          </p>
          <div className="flex">
            <li className="pt-12 flex-col sm:block">
              <a className="hover:text-gray-200 md:pb-6 w-fit " href="/contact">
                <button className="bg-[#EDFF6C]  hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </a>
            </li>
            <li>
              <p className="font-normal text-white text-xl flex-col pt-14 ml-16 cursor-pointer hover:underline">
                
                Book a Free Call
                <span className="ml-2 cursor-pointer font-extrabold"> ↗</span>
              </p>
              <div>
                
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
