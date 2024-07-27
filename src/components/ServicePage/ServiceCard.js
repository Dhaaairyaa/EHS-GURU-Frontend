import React from 'react';

const SmallServiceCard = ({ imgUrl, name, onClick, isActive }) => {
  return (
    <div
      className ={`rounded-full relative w-[200px] h-[200px] bg-cover bg-center cursor-pointer hover:border-4 border-white hover:scale-110 transition-all duration-500  ${isActive ? 'border-4 border-white scale-110' : ''} `}
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={onClick}
>
        <div className="rounded-full absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.2)] via-[rgba(12,13,13,0.2)] to-[rgba(9,9,9,0.2)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl text-center">{name}</h1>
        </div>
    </div>

  );
};

export default SmallServiceCard;
