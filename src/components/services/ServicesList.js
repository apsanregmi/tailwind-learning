import React from "react";
import Image from "next/image";

const ServicesList = () => {
  return (
    <div className="container bg-main">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 space-y-5">
        <div className="bg-white shadow border-emerald-950" >
          <Image
            src="/assets/images/services/servicesList/Frame88.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          {" "}
          <Image
            src="/assets/images/services/servicesList/Frame89.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          {" "}
          <Image
            src="/assets/images/services/servicesList/Frame91.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div >
        <div className="bg-white shadow border-emerald-950">
          <Image
            src="/assets/images/services/servicesList/Frame92.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
      </div >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-white shadow border-emerald-950">
          <Image
            src="/assets/images/services/servicesList/Frame88.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          {" "}
          <Image
            src="/assets/images/services/servicesList/Frame88.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          <Image
            src="/assets/images/services/servicesList/Frame88.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow border-emerald-950">
          <Image
            src="/assets/images/services/servicesList/Frame88.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          {" "}
          <Image
            src="/assets/images/services/servicesList/Frame89.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          {" "}
          <Image
            src="/assets/images/services/servicesList/Frame91.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
        <div className="bg-white shadow border-emerald-950">
          <Image
            src="/assets/images/services/servicesList/Frame92.svg"
            width={240}
            height={240}
            alt="Logo"
            className="block cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
