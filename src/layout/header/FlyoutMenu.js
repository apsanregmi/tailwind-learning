// FlyoutMenu.js

import React from 'react';
import { servicesData, productsData } from './data';

const FlyoutMenu = ({ showFlyout, setShowFlyout, category }) => {
  const data = category === 'Services' ? servicesData : productsData;

  return (
    showFlyout && (
      <div className="fixed top-14 left-0 right-o bg-white p-4 z-50 shadow-lg rounded-t-lg w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {Object.entries(data).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-black font-bold mb-2">{category}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item.id}>
                    <a href={item.link} className="text-black hover:text-yellow-300">{item.title}</a>
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
