import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ ImgSrc, ServiceName, description, buttonUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const bgNoGradient = {
    backgroundImage: `linear-gradient(176deg, rgba(94,89,89,0.3) 17%, rgba(45,45,45,0.5) 78%), url(${ImgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 10s ease-in-out', 
    height: '100%',
    width: '100%',
    borderRadius: '10px',
  };

  const bgGradient = {
    backgroundImage: `linear-gradient(0deg, rgba(9, 9, 9, 0.8) 45%, rgba(12, 13, 13, 0.2) 70%), url(${ImgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 10s ease-in-out', 
    height: '100%',
    width: '100%',
    borderRadius: '10px',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-[280px] h-[400px] relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute inset-0" style={isHovered ? bgGradient : bgNoGradient}></div>
      <div className="text-center absolute inset-0 flex flex-col justify-center items-center text-white relative pt-60 flex flex-col space-y-3">
        <h2 className="text-xl z-10">{ServiceName}</h2>
        <p className="z-10">{description}</p>
        <Link
          to={buttonUrl}
          target="_blank"
          className="relative inline-flex items-center px-10 py-2 overflow-hidden text-md font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative">Learn More</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
