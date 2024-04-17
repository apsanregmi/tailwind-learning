import React from "react";

const ServicesList = () => {
  return (
    // <div className=" container flex flex-col items-center justify-center   lg:place-items-start md:flex bg-green-100">
    <div className=" container flex flex-col items-center justify-center   lg:place-items-start md:flex md:flex-wrap bg-green-100">


      <div className="service m-4 px-4 flex bg-yellow-300 rounded-lg shadow-md h-auto text-center ">
        <div className="service-icon text-3xl">🛡️</div>
        <div className="service-description py-2">AI Implementation Services</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🧠</div>
        <div className="service-description py-2">Deep Learning Services</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🧊</div>
        <div className="service-description py-2">Generative AI</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🏢</div>
        <div className="service-description py-2">Cloud Architecture Consulting</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">💧</div>
        <div className="service-description py-2">
          Cloud Data Lakes and Warehouses
        </div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">💰</div>
        <div className="service-description py-2">
          Cost Optimizations and Maintenance
        </div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🔢</div>
        <div className="service-description py-2">Big Data Analytics Solutions</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🔣</div>
        <div className="service-description py-2">Data Mining Solutions</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">📊</div>
        <div className="service-description py-2">Data Visualization</div>
      </div>
      <div className="service m-4 px-4 flex bg-white rounded-lg shadow-md h-auto text-center">
        <div className="service-icon text-3xl">🔎</div>
        <div className="service-description py-2">Predictive Analysis Solutions</div>
      </div>
    </div>
  );
};

export default ServicesList;
