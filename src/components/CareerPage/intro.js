import React, { useState, useEffect } from 'react';
import CarrerImage from '../../data/CarrerImages';

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CarrerImage.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {CarrerImage.map((TeamImg, index) => (
        <img
          key={index}
          src={TeamImg.url}
          alt={`Client ${index}`}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            currentIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{
            objectFit: 'cover',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-end mb-28 text-white text-center">
        <h1 className="text-4xl font-bold w-1/2">{CarrerImage[currentIndex]?.heading}</h1>
        <p className="mt-4 text-xl w-1/2">{CarrerImage[currentIndex]?.description}</p>
        <a href="/" target="_blank" className="mt-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-3 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative">Learn More</span>
        </a>

        <div className="flex space-x-2 pt-10">
        <div onClick={() => handleIndexChange(0)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 0 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(1)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 1 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 2 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(3)} className={`cursor-pointer rounded-full h-[10px] w-[10px] ${currentIndex === 3 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
