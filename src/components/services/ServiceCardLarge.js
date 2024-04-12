import React from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceCardLarge = ({ title, description, position, link}) => {
  return (
    <div className="container ">
      <div className="flex  gap-4 cursor-pointer w-auto   ">
        
        <div className="bottom ">
          <div className="title font-bold text-2xl text-black md:text-3xl xxl:text-4xl m-4">
            <h1>{title}</h1>
            
          </div>
          <div className="pl-4">
            <p> {description}</p>
          </div>
          <div className=" w-fit p-4 relative  bottom-44 left-96 ml-48">
            <Link href={link} legacyBehavior>
              <a className="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md block">
                View More
              </a>
            </Link>
          </div>
          
        </div>
        <div className="top bg-polka flex justify-center  px-12 ">

          <div className="pt-16">
            <img
              src="/assets/group2493.svg"
             
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardLarge;
