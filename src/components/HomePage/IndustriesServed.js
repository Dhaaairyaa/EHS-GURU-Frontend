import React from 'react';
import IndustriesServed from "../../data/IndustriesServed";
import IndustryCard from './IndustryCard'; // Make sure this path is correct

const IndustryServed = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center pt-20 pb-20 bg-white">
      <h1 className="text-5xl">Industries Served</h1>
      <div className="grid grid-cols-4 gap-10 p-20"> {/* Adjust the grid as needed */}
        {IndustriesServed.map((item, index) => (
          <IndustryCard
            key={index}
            Logourl={item.Logourl}
            name={item.name}
            description={item.description}
            urls={item.Urls}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryServed;
