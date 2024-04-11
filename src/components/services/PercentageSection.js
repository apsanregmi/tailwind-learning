import React from "react";

const PercentageSection = ({percent,bold,description}) => {
  return (
    <div className="grid grid-rows-2">
      <div className="row1">
        <h1 class="font-inter text-6xl font-semibold leading-none text-left py-10 px-14">
          {percent}
        </h1>
      </div>
      <div className="row2">
      <p className="pb-10 px-16">
        <span className="font-bold text-black">{bold}</span> {description}
    </p>
      </div>
    </div>
  );
};

export default PercentageSection;
