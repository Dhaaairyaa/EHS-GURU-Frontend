import React, { useState, useEffect } from 'react';
import FireAndLifeSafetyImages from '../../../data/fire_and_life_safety_images'; // Adjust the path as necessary

const FireAndLifeIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FireAndLifeSafetyImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {FireAndLifeSafetyImages.map((client, index) => (
        <img
          key={index}
          src={client.imageUrls}
          alt={`Client ${index}`}
          className={`absolute w-full h-screen transition-transform duration-500 ease-in-out ${
            currentIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{
            objectFit: 'cover',
          }}
        />
      ))}
     <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end mb-28 text-white text-center">
        <div className="flex flex-col text-center w-2/3 space-y-8 pt-4">
          <h1 className="text-6xl font-bold text-center">Fire and Life Safety</h1>
          <p className="text-xl">Here at EHS Guru, you will find versatility in the field of fire safety, capable of not only conducting a technical fire safety audit of your occupancy but also providing high-level training to all your employees. Our qualified fire safety professionals are highly trained, well versed in fire load calculations, and other important aspects of fire safety, which are crucial to the structural and occupational safety.</p>
        </div>
        <div className="flex space-x-2 pt-10">
        <div onClick={() => handleIndexChange(0)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 0 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(1)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 1 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 2 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 3 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        </div>
      </div>

    </div>
  );
};

export default FireAndLifeIntro;
