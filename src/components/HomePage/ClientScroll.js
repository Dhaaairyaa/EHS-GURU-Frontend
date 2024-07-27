import React, { useEffect, useState } from 'react';
import clientLogo from '../../data/ClientLogo';
import './clientLogo.css';
import SuccessData from './SuccessData';

const ClientScroll = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const logoWidth = 130; // Image width + margin (50px + 40px left + 40px right)
    setWidth(logoWidth * clientLogo.length * 2); // Times 2 for the duplicate set
  }, []);

  return (
    <div className="bg-black">
      
      <div className="logos">
          <div className="logos-slide image-container" style={{ width: `${width}px` }}>
            {clientLogo.map((item, index) => (
              <img key={index} src={item.logoUrl} alt={item.clientName} className="" />
            ))}
            {clientLogo.map((item, index) => (
              <img key={`duplicate-${index}`} src={item.logoUrl} alt={item.clientName} />
            ))}
          </div>
        </div>
       
    </div>
  );
};

export default ClientScroll;
