import React from "react";
import PageBanner from "@/src/components/PageBanner";
import DefaultHeader from "@/src/layout/header/DefaultHeader";
import Logolist from "@/src/components/others/Logolist";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <DefaultHeader />
      <PageBanner
        title="Data, AI and Software Cloud Services Consultant"
        subtitle="We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap."
      />
      <container className="bg-white mt-8">
        <Logolist />
      </container>
      <div className="bg-main">
        <div className="container block md:mt-14 space-y-10 ">
          <div className="weProvide flex-col pt-10 md:w-2/5 text-3xl xl:text-5xl font-bold text-black md:pt-12">
            {" "}
            We Provide Best Cloud Services
          </div>
          <div className="Services md:flex md:flex-row space-x-9 space-y-9">
            <div className="left bg-yellow-200 items-center md:w-2/5  md:h-[36rem] md:flex-col">
              <div className="top bg-polka h-1/2 ">
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/cloudlogo.svg"
                    width={240}
                    height={240}
                    alt="Logo"
                    className="block cursor-pointer"
                  />
                </div>
              </div>
              <div className="bottom h-1/2">
                <div>
                  <h1 className="font-plus-jakarta-sans text-5xl font-bold leading-42 text-left p-10">
                    Cloud Engineering Services
                  </h1>
                  <p className="font-inter text-base px-10  leading-5 text-left font-light">
                    Cloud engineering services encompass the strategic planning,
                    implementation, and management
                  </p>
                  <div className="flex justify-end pt-20 pr-16">
                    <Link href="/">View More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="right bg-green-500 items-center md:w-3/5  md:h-[36rem] md:flex-col">
              <div className="top h-1/2">
                <div>
                  <h1 className="font-plus-jakarta-sans text-5xl font-bold leading-42 text-left p-10">
                    Generative AI and ML
                  </h1>
                  <p className="font-inter text-base px-10  leading-5 text-left line-clamp-4 font-light">
                    Unlock the Power of Intelligent Creation with CloudPro AI In
                    the era of data-driven innovation, Generative Artificial
                    Intelligence (AI)
                  </p>
                  
                </div>
                <div className="bottom bg-polka h-1/2 ">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/group2493.svg"
                      width={240}
                      height={240}
                      alt="Logo"
                      className="block cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-20 pr-16">
                    <Link href="/">View More</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
