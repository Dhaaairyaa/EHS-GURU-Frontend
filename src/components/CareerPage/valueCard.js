import React from 'react';

const ValueCard = ({image,message,name,index}) => {
  return (
    <div className ={`${index % 2 === 0 ? '  bg-white' : 'bg-[#ECE8E0]'} flex flex-col space-y-3 justify-center items-center  w-[400px] h-[300px] `}>
     <div className=  "p-4 flex flex-col justify-center items-center space-y-3 text-center">
          <img src = {image} className="w-[80px]"></img>
          <h1 className="text-xl">{name}</h1>
          <div className="h-[1px] bg-black w-[100px]">

          </div>
          <p>{message}</p>
      </div>
    </div>
  );
};

export default ValueCard;