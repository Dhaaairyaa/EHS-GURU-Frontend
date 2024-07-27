import React from 'react';
import ServiceData from '../../data/ServiceData';
import ServiceCard from '../trials/ServiceCard';
import './Service.css'; // Assuming you create a Service.css file for styling

const Service = () => {
  return (
    <div className="h-auto bg-[#ECE8E0] px-28 pb-20 ">
      <div className="pt-20">
        <h1 className="text-center text-5xl">Core Focus Areas</h1>
        <div className="flex space-x-12 mt-14 overflow-x-scroll scrollbar-black">
          {ServiceData.map((item, index) => (
            <div key={index} className="mt-4 mb-4">
              <ServiceCard 
                ImgSrc={item.ImgSrc}
                ServiceName={item.ServiceName}
                description={item.description}
                buttonUrl={item.buttonUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
