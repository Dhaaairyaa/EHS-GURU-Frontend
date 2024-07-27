import React, { useState, useEffect } from 'react';
import ClientImages from '../../data/ClientImages'; // Adjust the path as necessary

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ClientImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {ClientImages.map((client, index) => (
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
          <h1 className="text-4xl font-bold text-center">Our Esteemed Clients</h1>
          <p className="text-xl"> At EHS Guru Sustainable Solutions (EGSS), we pride ourselves on building trust and fostering long-term relationships with our clients. Since our founding in 2017, we have dedicated ourselves to providing specialized Environment, Health, and Safety (EHS) services that cater to over 10000+ clients across various industries. By leveraging the latest industry knowledge and best practices, we ensure the highest standards of safety and compliance, helping our clients achieve their goals with confidence. At EGSS, your safety and success are our top priorities, and we are honored to be your trusted partner in creating sustainable, system-based solutions.</p>
        </div>
        <div className="flex space-x-2 pt-10">
        <div onClick={() => handleIndexChange(0)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 0 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(1)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 1 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 2 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(3)} className={`cursor-pointer rounded-full h-[10px] w-[10px] ${currentIndex === 3 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        <div onClick={() => handleIndexChange(4)} className={`cursor-pointer rounded-full h-[10px] w-[10px] ${currentIndex === 4 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
        </div>
      </div>

    </div>
  );
};

export default Intro;
