import React, { useState, useRef, useEffect } from "react";
import FlyoutMenu from "./FlyoutMenu";
import ExtraHeader from "./ExtraHeader";

const DefaultHeader = () => {
  const [showServicesFlyout, setShowServicesFlyout] = useState(false);
  const [showProductsFlyout, setShowProductsFlyout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    setShowServicesFlyout(false);
    setShowProductsFlyout(false);
    setSelectedCategory(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#071518] p-4 fixed top-0 left-0 right-0 z-50  ${
        isScrolled || isMobileMenuOpen ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {!isScrolled && !isMobileMenuOpen && (
          <div className="hidden lg:flex max-w-7xl mx-auto items-center justify-center">
            <ExtraHeader />
          </div>
        )}

        <div className="flex lg:gap-52 items-center justify-between lg:justify-stretch lg:pl-56 relative">
          <div>
            <a href="/" className="text-white text-xl font-bold">
              Cloud ProAI
            </a>
          </div>
          <div
            className={`hidden md:flex mt-2 space-x-4 ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            <div
              className="relative group mt-2"
              onMouseEnter={handleServicesHover}
              onMouseLeave={() => setShowServicesFlyout(false)}
            >
              <a href="/services" className="text-white hover:text-gray-300  ">
                Services ▼
              </a>
              {showServicesFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showServicesFlyout}
                  setShowFlyout={setShowServicesFlyout}
                  category="Services"
                  subCategories={["Category 1", "Category 2", "Category 3"]}
                  onSelectCategory={handleCategoryClick}
                  className={`absolute top-28 left-64 z-50 bg-black transition-opacity duration-300 ${
                    showServicesFlyout ? "opacity-100" : "opacity-0"
                  } ${isScrolled ? "opacity-100" : "opacity-0"}`}
                />
              )}
            </div>
            <div
              className="relative group mt-2"
              onMouseEnter={handleProductsHover}
              onMouseLeave={() => setShowProductsFlyout(false)}
            >
              <a href="/products" className="text-white hover:text-gray-300 ">
                Products ▼
              </a>
              {showProductsFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showProductsFlyout}
                  setShowFlyout={setShowProductsFlyout}
                  category="Products"
                  subCategories={["Category A", "Category B", "Category C"]}
                  onSelectCategory={handleCategoryClick}
                  className={`absolute top-full left-0 z-50 bg-black transition-opacity duration-300 ${
                    showProductsFlyout ? "opacity-100" : "opacity-0"
                  } ${isScrolled ? "opacity-100" : "opacity-0"}`}
                />
              )}
            </div>
            <a
              href="/others/case-studies"
              className="text-white hover:text-gray-300 py-2"
            >
              Case Study
            </a>
            <a href="/about" className="text-white hover:text-gray-300 py-2">
              About us
            </a>
            <a href="/contact">
              <button className="bg-[#EDFF6C]  hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden block mt-4">
            <div
              className="relative group"
              onClick={() => {
                setShowServicesFlyout(true);
                setShowProductsFlyout(false);
                toggleMobileMenu();
              }}
            >
              <a
                href="/services"
                className="block text-white  hover:text-gray-300"
              >
                Services 
              </a>
              {showServicesFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showServicesFlyout}
                  setShowFlyout={setShowServicesFlyout}
                  category="Services"
                  subCategories={["Category 1", "Category 2", "Category 3"]}
                  onSelectCategory={handleCategoryClick}
                  className={`absolute top-full left-0 z-50 bg-black ${
                    isScrolled ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            <div
              className="relative group"
              onClick={() => {
                setShowServicesFlyout(false);
                setShowProductsFlyout(true);
                toggleMobileMenu();
              }}
            >
              <a
                href="/products"
                className="block text-white  hover:text-gray-300"
              >
                Products 
              </a>
              {showProductsFlyout && (
                <FlyoutMenu
                  ref={flyoutMenuRef}
                  showFlyout={showProductsFlyout}
                  setShowFlyout={setShowProductsFlyout}
                  category="Products"
                  subCategories={["Category A", "Category B", "Category C"]}
                  onSelectCategory={handleCategoryClick}
                  className={`absolute top-full left-0 z-50 bg-black ${
                    isScrolled ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            <a
              href="/others/case-studies"
              className="block text-white py-2 hover:text-gray-300"
            >
              Case Study
            </a>
            <a
              href="/about"
              className="block text-white py-2 hover:text-gray-300"
            >
              About us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DefaultHeader;
