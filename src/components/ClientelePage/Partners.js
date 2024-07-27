import React from 'react';
import PartnersAndCollabs from "../../data/Partners";

const PartnerAndCollaboration = () => {
  return (
    <div className="bg-white text-center p-20 flex flex-col space-y-5">
      <h1 className="text-5xl">Partners & Collaborations</h1>
      <p className="text-lg">
        At EHS Guru Sustainable Solutions (EGSS), we believe in strong partnerships to drive innovation and success. We value mutual respect, transparency, and shared goals, leveraging our strengths for top safety and compliance standards while promoting sustainable growth. Together, we innovate, lead, and create meaningful change, ensuring mutual success and lasting benefits for our clients and communities.
      </p>
      <div className="grid grid-cols-5 gap-8 p-10">
        {PartnersAndCollabs.map((item, index) => (
          <div key={index} className=" hover:text-[#b69974] bg-[#ECE8E0] flex flex-col items-center justify-center p-2 hover:scale-105 hover:border-4 border-[#b69974] hover:text-white transition-transform duration-300 w-[220px] h-[200px] space-y-3">
            <img src={item.url} alt={item.name} className="h-[100px] object-contain" />
            <h1 className="text-lg">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerAndCollaboration;
