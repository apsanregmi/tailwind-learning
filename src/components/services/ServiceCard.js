import React from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceCard = ({ title, description, position, image, link }) => {
  return (
    <div className="container ">
      <div className="grid  gap-1  cursor-pointer  ">
        <div className="top bg-polka flex justify-center p-6 pt-8  px-12 row-span-3">
          <div>
            <img
              src={image}
              
              alt="Logo"
              className="block cursor-pointer"
            />
          </div>
        </div>
        <div className="bottom  row-span-6">
          <div className="title font-bold text-2xl text-black md:2xl xxl:text-4xl m-4">
            <h1>{title}</h1>
          </div>
          <div className="text-base m-4">
            <p> {description}</p>
          </div>
          {/* <div className=" w-fit p-4 relative  bottom-0 left-72">
            <Link href="/services/dataengineering" passHref legacyBehavior>
              <a className="bg-gray-100 hover:bg-blue-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-md block">
                View More
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
