import React from 'react';
import Image from 'next/image';

const ImageWithText = ({ imageUrl, text }) => {
  return (
    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <div className="relative">
        <a href="#">
          <img className="rounded-lg" src={imageUrl} alt="image description"/>
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6 sm:bottom-0 sm:bg-black sm:bg-opacity-50 sm:p-4 sm:w-full">
          <p className="sm:text-base">{text}</p>
        </figcaption>
      </div>
    </figure>
  );
};

export default ImageWithText;
