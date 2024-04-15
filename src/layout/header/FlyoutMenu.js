// FlyoutMenu.js

import React from 'react';

const FlyoutMenu = ({ showFlyout, setShowFlyout, category, data, onSelectCategory, className }) => {
  const handleClick = (category) => {
    onSelectCategory(category);
    setShowFlyout(false);
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-start w-full">
        {data[category].map((service, index) => (
          <a
            key={index}
            href={service.link}
            onClick={() => handleClick(service.title)}
            className="text-white hover:text-gray-300 py-1 px-4 block w-full"
          >
            {service.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FlyoutMenu;
