import React from 'react';

const Cards = ({ heading, logos }) => {
  return (
    <div className="text-white text-center box-border p-8 rounded-[50px] h-[50vh] transition-all duration-500 flex flex-col">
      <h2 className="text-4xl">{heading}</h2>
      <div className="grid grid-cols-7 gap-4 mt-8">
        {logos && logos.map((logo, index) => (
          <div key={index} className="relative w-[80px] h-[80px]">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className=" inset-0 w-full h-full object-cover rounded-lg z-[${index}]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
