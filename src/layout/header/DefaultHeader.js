// DefaultHeader.js

import React, { useState } from 'react';
import FlyoutMenu from './FlyoutMenu';

const DefaultHeader = () => {
  const [showServicesFlyout, setShowServicesFlyout] = useState(false);
  const [showProductsFlyout, setShowProductsFlyout] = useState(false);

  const handleServicesHover = () => {
    setShowServicesFlyout(true);
    setShowProductsFlyout(false);
  };

  const handleProductsHover = () => {
    setShowServicesFlyout(false);
    setShowProductsFlyout(true);
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="text-white text-xl font-bold">Cloud ProAI</a>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <div
              className="relative group"
              onMouseEnter={handleServicesHover}
              onMouseLeave={() => setShowServicesFlyout(false)}
            >
              <a href="#" className="text-white hover:text-gray-300">Services</a>
              {/* Services Flyout Menu */}
              <FlyoutMenu 
                showFlyout={showServicesFlyout} 
                setShowFlyout={setShowServicesFlyout} 
                category="Services" 
              />
            </div>
            <div
              className="relative group"
              onMouseEnter={handleProductsHover}
              onMouseLeave={() => setShowProductsFlyout(false)}
            >
              <a href="#" className="text-white hover:text-gray-300">Products</a>
              {/* Products Flyout Menu */}
              <FlyoutMenu 
                showFlyout={showProductsFlyout} 
                setShowFlyout={setShowProductsFlyout} 
                category="Products" 
              />
            </div>
            <a href="#" className="text-white hover:text-gray-300">Case Study</a>
            <a href="#" className="text-white hover:text-gray-300">About us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DefaultHeader;
