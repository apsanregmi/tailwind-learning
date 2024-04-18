import React from "react";

const ExtraHeader = () => {
  return (
    <div className="header flex gap-4 mb-4 bg-black">
      <div className="text">
        CloudPro Ai Conference on Cloud Computing, Computer Vision and Image
        Processing.
      </div>
      <div className="bookNow">
        <a href='/schedule-appointment'>
        <h3 className="underline text-white font-light text">Book Now</h3>
        </a>
      </div>
    </div>
  );
};

export default ExtraHeader;
