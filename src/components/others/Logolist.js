import React from 'react';
import Image from 'next/image';

const Logolist = () => {
  return (
    <div>
       <div className="flex justify-center items-center py-5">
        <div className="logoList">
          <Image
            src="/assets/logolist.svg"
            width={1200}
            height={200}
            alt="Logo"
            className="block cursor-pointer text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Logolist
