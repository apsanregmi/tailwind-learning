import React from "react";

const DefaultHeader = () => {
  return (
    <div>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto md:mr-48">
          <nav className="sticky top-0 z-50 flex justify-between bg-black text-white w-screen h-24 md:mx-auto md:text-center md:pt-4">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center md:space-x-0 md:text-sm lg:text-xl md:pl-56 lg:space-x-12 md:mr-960">
              <a className=" lg:mx-auto lg:ml-20 text-3xl font-bold font-heading md:pt-[-4] md:pb-6 md:items-right md:justify-center " href="/">
                <img
                  className="navBarLogo xxl:ml-80"
                  src="/assets/images/logos/cloudpro.png"
                  alt="Logo"
                  title="Logo"
                  height={125}
                  width={125}
                />
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ">
                <li>
                  <a className="hover:text-gray-200 md:pt-6" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200 md:pt-6" href="/products">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200 md:pt-6" href="/others/case-study">
                    Case Study
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200 md:pt-6" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200 md:pb-10" href="/contact">
                    <button className="bg-[#EDFF6C]  hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                      Contact Us
                    </button>
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 ">
                
              </div>
            </div>
          
            <a className="navbar-burger self-center mr-12  md:hidden xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      
    </div>
  );
};

export default DefaultHeader;
