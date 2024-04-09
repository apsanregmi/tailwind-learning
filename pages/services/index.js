import React from "react";
import PageBanner from "@/src/components/PageBanner";
import DefaultHeader from "@/src/layout/header/DefaultHeader";
import Logolist from "@/src/components/others/Logolist";
import Image from "next/image";
import Link from "next/link";
import ServicesList from "@/src/components/services/ServicesList";

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
      <div className="bg-main container grid grid-cols-1 sm:grid-cols-2">
        <div className="weProvide">
          <h1 className="text-bold  text-3xl m-4 lg:text-5xl">
            We Provide Best Cloud Services
          </h1>
        </div>
      </div>

      <div className="bg-main container grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 mx-auto">
        <div className="left bg-white md:col-span-4 md:m-4 grid-cols-2 rounded-md shadow cursor-pointer">
          <div className="flex flex-col items-center bg-polka h-1/2 p-10 w-auto">
            <Image
              src="/assets/cloudlogo.svg"
              width={240}
              height={240}
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
          <div className="bottom grid-rows-3  md:gap-4 h-1/2">
            <div className="title font-bold text-2xl text-black lg:text-4xl pt:6">
              Cloud Engineering Services
            </div>
            <div className="details mt-5">
              Cloud engineering services encompass the strategic planning,
              implementation, and management
            </div>
            <div className="button flex justify-end mt-8 pr-16">
              {" "}
              <button class="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md">
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="left bg-white md:col-span-8 md:m-4 grid-cols-2 rounded-md shadow cursor-pointer">
          <div className="bottom grid-rows-3  md:gap-4 h-1/2">
            <div className="title font-bold text-2xl  text-black lg:text-4xl pt:6">
              Generative AI and ML
            </div>
            <p className="font-inter text-base px-10  leading-5 text-left font-light">
              Unlock the Power of Intelligent Creation with CloudPro AI In the
              era of data-driven innovation, Generative Artificial Intelligence
              (AI)
            </p>
            <div className="button flex justify-end mt-8 pr-16">
              {" "}
              <button class="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md">
                View More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-polka h-1/2">
            <Image
              src="/assets/group2493.svg"
              width={450}
              height={350}
              alt="Logo"
              className="block cursor-pointer mt-2 ml-2"
            />
          </div>
        </div>
      </div>


<div className="thirdrow container grid grid-cols-1 md:grid-cols-3 gap-2 bg-main">

  <div>
  <div className="left bg-white md:col-span-4 md:m-4 grid-cols-2 rounded-md shadow cursor-pointer">
          
          <div className="bottom grid-rows-3  md:gap-4 h-1/2">
            <div className="title font-bold text-2xl text-black lg:text-4xl pt:6">
            Data Engineering
            </div>
            <div className="details mt-5">
            Data engineering services encompass the design, development, and management of robust data architecture
            </div>
            <div className="button flex justify-end mt-8 pr-16">
              {" "}
              <button class="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md">
                View More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-polka h-1/2 p-10">
            <Image
              src="/assets/group2494.svg"
              width={360}
              height={350}
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
        </div>
  </div>
  <div>
  <div className="left bg-white md:col-span-4 md:m-4 grid-cols-2 rounded-md shadow cursor-pointer">
          <div className="flex flex-col items-center bg-polka h-1/2 p-10">
            <Image
              src="/assets/group2495.svg"
              width={270}
              height={240}
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
          <div className="bottom grid-rows-3  md:gap-4 h-1/2">
            <div className="title font-bold text-2xl text-black lg:text-4xl pt:6">
            BI & Data Analytics
            </div>
            <div className="details mt-5">
            Business Intelligence (BI) and Data Analytics services are critical for organizations aiming to harness the power of data.
            </div>
            <div className="button flex justify-end mt-8 pr-16">
              {" "}
              <button class="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md">
                View More
              </button>
            </div>
          </div>
        </div>
  </div>
  
  <div>
  <div className="left bg-white md:col-span-4 md:m-4 grid-cols-2 rounded-md shadow cursor-pointer">
          
          <div className="bottom grid-rows-3  md:gap-4 h-1/2">
            <div className="title font-bold text-2xl text-black lg:text-4xl pt:6">
            AI Powered Web/APP Development
            </div>
            <div className="details mt-5">
            In the ever-evolving AI landscape, web applications stand as the cornerstone of innovation, offering dynamic and.
            </div>
            <div className="button flex justify-end mt-8 pr-16">
              {" "}
              <button class="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md">
                View More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-polka h-1/2 p-10">
            <Image
              src="/assets/group102.svg"
              width={250}
              height={240}
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
        </div>
  </div>
  </div>

  <ServicesList/>

    </div>
  );
};

export default index;
