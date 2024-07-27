import React from 'react';

const EmployeeCard = ({ name, designation, imgUrl,onClick }) => {
  return (
    <div
      className="cursor-pointer w-[300px] h-[350px] text-white p-4 rounded mb-24 hover:scale-105 transition-all duration-500 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
      onClick={onClick}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div> */}
      <div
        className="w-[270px] bg-white h-[130px] rounded-lg mt-[270px] border border-black relative z-10"
        style={{ boxShadow: '1px 23px 41px -15px rgba(0,0,0,0.77)' }}
      >
        <div className="p-2">
          <h1 className="text-black">{name}</h1>
          <p className="text-[#83868d]">{designation}</p>
          <p className="text-[#7c6304] group-hover:scale-110 transition-all duration-500">Know More</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
