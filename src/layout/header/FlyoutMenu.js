import React from "react";
import { servicesData, productsData } from "./data";

const FlyoutMenu = ({ showFlyout, setShowFlyout, category }) => {
  const data = category === "Services" ? servicesData : productsData;

  return (
    showFlyout && (
      <div className="fixed top-14 left-0 right-0 bg-white p-4 z-50 shadow-lg rounded-t-lg w-full rounded-lg mx-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {Object.entries(data).map(([categoryName, categoryData]) => (
            <div key={categoryName} className="flex flex-col items-center">
              <div className="flex flex-row space-x-4">
              <div className="mb-4 bg-[#E7F96A] w-64 rounded-sm border-solid border-1">
                <img
                  src="
              \assets\images\services\clodudengineering\cloudEngineering.svg
                
                "
                  alt={categoryName}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-black font-bold mb-2">{categoryName}</h3>
              

              </div>
              <ul className="space-y-2  ">
                {categoryData.services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={service.link}
                      className="text-black hover:text-yellow-300 ml-28"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default FlyoutMenu;
