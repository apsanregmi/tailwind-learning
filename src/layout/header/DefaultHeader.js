// DefaultHeader.js
import React from 'react';
import MegaMenu from './MegaMenu';

const DefaultHeader = () => {
  return (
    <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div className="container mx-auto flex justify-between">
        <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
        <ul className="flex">
          <li className="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Services</a>
            <MegaMenu />
          </li>
          <li className="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Products</a>
            <MegaMenu />
          </li>
          <li className="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Blogs</a>
            <MegaMenu />
          </li>
          <li className="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Contact Us</a>
            <MegaMenu />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DefaultHeader;
