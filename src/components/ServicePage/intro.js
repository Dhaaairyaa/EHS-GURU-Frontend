import React, { useState } from 'react';
import ServiceData1 from '../../data/ServicePage';
import SmallServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
const Intro = () => {
  const [current, setCurrent] = useState(ServiceData1[0]);

  const handleCardClick = (service) => {
    setCurrent(service);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: current ? `url(${current.imgUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.2)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
      {current && (
        <div className="fixed inset-0 z-10 flex items-center justify-center mb-20">
          <div className="text-center text-white p-10 rounded bg-black bg-opacity-50 max-w-3xl mx-auto">
            <h1 className="text-5xl mb-4">{current.name}</h1>
            <p className="text-lg w-full mx-auto">{current.description}</p>

            <Link
              to={current.url}
              target="_blank"
              className="mt-5 relative inline-flex items-center px-10 py-2 overflow-hidden text-md font-medium text-white border border-white rounded-full hover:text-black hover:border-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative">Consult Now</span>
        </Link>

          </div>
        </div>
      )}

      <div className="absolute bottom-0 z-50 w-full flex justify-center space-x-7 p-4 ">
        {ServiceData1.map((item, index) => (
          <SmallServiceCard
            key={index}
            imgUrl={item.imgUrl}
            name={item.name}
            isActive={current === item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
