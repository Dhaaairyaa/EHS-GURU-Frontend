import React, { useState, useEffect } from 'react';
import ErgonomicsImages from '../../../data/ErgonomicsImages'; // Adjust the path as necessary

const ErgonomicsIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ErgonomicsImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {ErgonomicsImages.map((client, index) => (
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
          <h1 className="text-6xl font-bold text-center">Ergonomics</h1>
          <p className="text-xl">Ergonomics (or human factors) is the scientific discipline concerned with the understanding of interactions among humans and other elements of a system, and the profession that applies theory, principles, data and methods to design to optimize human well-being and overall system performance. We aim to improve workspaces and environments to minimize risk of injury or harm by providing quality ergonomics assessments and training. Our service does not limit to only assessing and problem reporting. We provide practical and easy to implement recommendations for improvement. Our interactive trainings sessions cover all the relevant topics associated with the workspace. ErgoTattva is our dedicated department for Ergonomics and Human Factor Services.</p>
        </div>
        <div className="flex space-x-2 pt-10">
        <div onClick={() => handleIndexChange(0)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 0 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(1)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 1 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 2 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 3 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 4 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        </div>
      </div>

    </div>
  );
};

export default ErgonomicsIntro;
