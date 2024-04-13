// MegaMenu.js
import React from 'react';

const MegaMenu = () => {
  return (
    <div className="absolute bg-white w-full left-0 mt-2 p-4 hidden group-hover:block">
      <ul>
        <li className="mt-2"><a href="#" className="text-gray-900 hover:text-blue-600">Service 1</a></li>
        <li className="mt-2"><a href="#" className="text-gray-900 hover:text-blue-600">Service 2</a></li>
        <li className="mt-2"><a href="#" className="text-gray-900 hover:text-blue-600">Service 3</a></li>
        {/* Add more service items here */}
      </ul>
    </div>
  );
};

export default MegaMenu;
