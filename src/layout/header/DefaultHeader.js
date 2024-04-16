import React, { useState, useRef, useEffect } from 'react';
import FlyoutMenu from './FlyoutMenu';

const DefaultHeader = () => {
  const [showServicesFlyout, setShowServicesFlyout] = useState(false);
  const [showProductsFlyout, setShowProductsFlyout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const flyoutMenuRef = useRef(null);

  const handleServicesHover = () => {
    if (!isMobileMenuOpen) {
      setShowServicesFlyout(true);
      setShowProductsFlyout(false);
    }
  };

  const handleProductsHover = () => {
    if (!isMobileMenuOpen) {
      setShowServicesFlyout(false);
      setShowProductsFlyout(true);
    }
  };

  const handleCategoryClick = (category) => {
    if (!isMobileMenuOpen) {
      setSelectedCategory(category);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowServicesFlyout(false); // Close services flyout menu when toggling mobile menu
    setShowProductsFlyout(false); // Close products flyout menu when toggling mobile menu
    setSelectedCategory(null); // Reset selected category when toggling mobile menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flyoutMenuRef.current && !flyoutMenuRef.current.contains(event.target)) {
        setShowServicesFlyout(false);
        setShowProductsFlyout(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setShowServicesFlyout(false);
        setShowProductsFlyout(false);
        setSelectedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-black p-4 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" className="text-white text-xl font-bold">Cloud ProAI</a>
          </div>
          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
            <div
              className="relative group"
              onMouseEnter={handleServicesHover}
              onMouseLeave={() => setShowServicesFlyout(false)}
            >
              <a href="/services" className="text-white hover:text-gray-300">Services</a>
              {/* Services Flyout Menu */}
              {showServicesFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showServicesFlyout}
                  setShowFlyout={setShowServicesFlyout}
                  category="Services"
                  subCategories={['Category 1', 'Category 2', 'Category 3']} // Example subcategories
                  onSelectCategory={handleCategoryClick}
                  className="absolute top-full left-0 z-50 bg-black"
                />
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={handleProductsHover}
              onMouseLeave={() => setShowProductsFlyout(false)}
            >
              <a href="/products" className="text-white hover:text-gray-300">Products</a>
              {/* Products Flyout Menu */}
              {showProductsFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showProductsFlyout}
                  setShowFlyout={setShowProductsFlyout}
                  category="Products"
                  subCategories={['Category A', 'Category B', 'Category C']} 
                  onSelectCategory={handleCategoryClick}
                  className="absolute top-full left-0 z-50 bg-black"
                />
              )}
            </div>
            <a href="/others/case-studies" className="text-white hover:text-gray-300">Case Study</a>
            <a href="/about" className="text-white hover:text-gray-300">About us</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden block mt-4">
            <div
              className="relative group"
              onClick={() => {
                setShowServicesFlyout(true);
                setShowProductsFlyout(false);
                toggleMobileMenu(); // Close mobile menu after clicking on Services
              }}
            >
              <a href="/services" className="block text-white py-2 hover:text-gray-300">Services</a>
              {/* Services Flyout Menu */}
              {showServicesFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showServicesFlyout}
                  setShowFlyout={setShowServicesFlyout}
                  category="Services"
                  subCategories={['Category 1', 'Category 2', 'Category 3']} // Example subcategories
                  onSelectCategory={handleCategoryClick}
                  className="absolute top-full left-0 z-50 bg-black"
                />
              )}
            </div>
            <div
              className="relative group"
              onClick={() => {
                setShowServicesFlyout(false);
                setShowProductsFlyout(true);
                toggleMobileMenu(); // Close mobile menu after clicking on Products
              }}
            >
              <a href="/products" className="block text-white py-2 hover:text-gray-300">Products</a>
              {/* Products Flyout Menu */}
              {showProductsFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showProductsFlyout}
                  setShowFlyout={setShowProductsFlyout}
                  category="Products"
                  subCategories={['Category A', 'Category B', 'Category C']} 
                  onSelectCategory={handleCategoryClick}
                  className="absolute top-full left-0 z-50 bg-black"
                />
              )}
            </div>
            <a href="/others/case-studies" className="block text-white py-2 hover:text-gray-300">Case Study</a>
            <a href="/about" className="block text-white py-2 hover:text-gray-300">About us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DefaultHeader;
