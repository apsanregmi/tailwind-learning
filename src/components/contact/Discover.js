import React from "react";

const PageBannerRev = ({ title, subtitle }) => {
  return (
    <div className="bg-[#0C2126] flex justify-start items-center h-fit pb-16 pt-14">
      <div className="md:container md:mx-28 py-24 px-2 md:px-6 flex md:w-1/2 w-full md:pt-3/4">
        <div className="max-w-2xl mx-2">
          <p className="text-xl lg:text-xl text-white leading-relaxed max-w-xl space-x-3 my-4">
            {subtitle}
          </p>
          <h1 className="text-4xl lg:text-4xl xxl:text-6xl text-yellow-200 font-bold mb-8">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="w-fit">
              <button className="bg-[#EDFF6C] hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </a>
            <p className="font-normal text-white text-xl flex items-center cursor-pointer hover:underline">
            <a href="/schedule-appointment">

              Book a Free Call
              <span className="ml-2 font-extrabold"> ↗</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Background image for medium screens */}
      <style jsx>{`
        @media (min-width: 768px) {
          .bg-image {
            background-image: url('/assets/Vector15.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            flex: 1;
          }
        }
      `}</style>
      <div className="bg-image hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default PageBannerRev;
