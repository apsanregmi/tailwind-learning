import React from 'react';
import Image from 'next/image';

const ImageWithText = ({ imageUrl, text }) => {
  return (
    <div className="relative">
      <Image src={imageUrl} width={295} height={400} />
      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-10 text-white p-4">{text}</p>
    </div>
  );
};

export default ImageWithText;

