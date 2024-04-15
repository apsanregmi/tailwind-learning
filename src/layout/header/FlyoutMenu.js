import React from 'react';
import { Fragment } from 'react';
import { services, products } from '../header/data';

function FlyoutMenu() {
  return (
    <div className="absolute left-0 mt-2 w-72 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {/* Services Section */}
      <div className="py-1">
        <h3 className="text-sm font-medium leading-6 text-gray-500 px-4">Services</h3>
        <div className="mt-1">
          {services.map((service, index) => (
            <div key={index}>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                onClick={() => console.log(`${service.name} clicked`)} // Add click handler for service
              >
                {service.name}
              </button>
              <div className="mt-1">
                {service.subServices.map((subService, subIndex) => (
                  <a
                    key={subIndex}
                    href={subService.href}
                    className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none"
                  >
                    {subService.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products Section */}
      <div className="py-1">
        <h3 className="text-sm font-medium leading-6 text-gray-500 px-4">Products</h3>
        <div className="mt-1">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.href}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {product.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlyoutMenu;
