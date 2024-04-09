// Menu.js
import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main-menu">
      <ul className={`md:flex md:items-center ${isOpen ? 'flex flex-col' : 'hidden'}`}>
        <li>
          <Link legacyBehavior href="/services">
            <a className="text-white hover:text-teal-500 pt-4 md:pt-0">Services</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/products">
            <a className="text-white hover:text-teal-500 pt-4 md:pt-0">Products</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/case-study">
            <a className="text-white hover:text-teal-500 pt-4 md:pt-0">Case Study</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a className="text-white hover:text-teal-500 pt-4 md:pt-0">About Us</a>
          </Link>
        </li>
        <li>
          <button className="btn-contact-us pt-4 md:pt-0 bg-[#83911C] hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="md:hidden block text-white focus:outline-none"
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
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Menu;
