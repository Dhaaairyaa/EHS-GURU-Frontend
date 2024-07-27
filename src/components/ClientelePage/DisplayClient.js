import React, { useState } from 'react';
import ClientCategories from '../../data/ClientCategories';
import clientLogo from '../../data/ClientLogo';
const DisplayClient = () => {
  const [clickedCategory, setClickedCategory] = useState("Corporates");

  const handleClick = (value) => {
    setClickedCategory(value);
    console.log(value); // Log the updated value directly
  };
  const filteredLogos = clickedCategory
    ? clientLogo.filter((item) => item.category === clickedCategory)
    : clientLogo;



  return (
    <div className="bg-[#ECE8E0] h-auto">
      <div className="pt-20 flex justify-center">
        <ul className="flex space-x-4">
          {ClientCategories.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer bg-[#F1F2F3] p-2 hover:scale-105 hover:bg-[#b69974] hover:text-white transition-transform duration-300 ${
                clickedCategory === item.value ? 'bg-[#b69974] text-white' : ''
              }`}
              onClick={() => handleClick(item.value)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        </div>
      <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-12 p-10">
              {filteredLogos.map((item, index) => (
                  <div
                  key={index}
                  className=" hover:text-[#b69974] bg-[#F1F2F3] flex flex-col items-center justify-center p-2 hover:scale-105 hover:border-4 border-[#b69974] transition-transform duration-300 w-[220px] h-[200px]"
                  onClick={() => handleClick(item.category)}
                  >
                  <img
                      src={item.logoUrl}
                      alt={item.clientName}
                      className="h-[100px] object-contain"
                      // style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                  <h1 className="pt-4 text-center text-lg">{item.clientName}</h1>
                  </div>
              ))}
              {/* {clientLogo.map()} */}
          </div>
        </div>
      </div>
    
  );
};

export default DisplayClient;
