import React from 'react';
import Cards from './Cards';
import clientData from '../data/clientData';

const CardStack = () => {
  return (
    <div className="pt-16">
      <h1 className="text-center text-5xl mb-10 sticky top-28 text-[#0a2b14] playfair-display-headingfont ">Our Esteemed Clients</h1>
      <div className="w-[70%] mx-auto mt-16">
        <ul className="list-none pl-0 grid grid-cols-1 gap-[4vw] mb-[4vw]">
          {clientData.map((item, index) => (
            <li
              key={index}
              className={`sticky top-52 pt-[${(index + 1) * 1.5}em] z-[${index}]`}
              style={{ 
                backgroundImage: `linear-gradient(176deg, rgba(9,9,9,0.8) 21%, rgba(12,13,13,0.8) 66%), url(${item.bgImage})`,
                backgroundSize: 'cover',}}
            >
                <Cards heading={item.heading} logos={item.imageUrls} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardStack;
