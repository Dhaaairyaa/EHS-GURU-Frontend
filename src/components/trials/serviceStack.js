import React from 'react';
import ServiceCards from './serviceCards';
// import clientData from '../data/clientData';
// import Clientdata from '../data/ClientData1'

import ServiceData from '../../data/ServiceData'
const serviceStack = () => {
  return (
    <div className="pt-40">
      <h1 className="text-center text-5xl mb-10 sticky top-28 text-[#0a2b14] playfair-display-headingfont ">We Excell in</h1>
      <div className="w-[70%] mx-auto">
        <ul className="list-none pl-0 grid grid-cols-1 gap-[4vw] mb-[4vw] ">
          {ServiceData.map((item, index) => (
            <li
              key={index}
              className={`sticky top-60 pt-[${(index + 1) * 1.5}em] z-[${index}]`}
              style={{ 
                backgroundImage: `linear-gradient(176deg, rgba(9,9,9,0.8) 21%, rgba(12,13,13,0.8) 66%), url(${item.bgImage})`,
                backgroundSize: 'cover',}}
            >
                <ServiceCards ImgSrc={item.ImgSrc} ServiceName={item.ServiceName} description={item.description} buttonUrl={item.buttonUrl} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default serviceStack;
