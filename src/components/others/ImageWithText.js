import React from 'react';
import Image from 'next/image';

const ImageWithText = ({ imageUrl, text }) => {
  return (
   
<figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img class="rounded-lg" src={imageUrl} alt="image description"/>
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>{text}</p>
  </figcaption>
</figure>

  );
};

export default ImageWithText;

