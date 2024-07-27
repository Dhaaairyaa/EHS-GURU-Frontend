import React from 'react';
import Button from "../common/button";
const serviceCards = ({imgUrl,description,name,Post,Linkedin}) => {
  // bg-[#8BBE87]
  return (
    <div className="flex bg-white h-[400px]">
      <div className="playfair-display-headingfont w-1/2  flex flex-col items-center space-y-5 pt-10 ">
        <h1 className="text-2xl text-center">{name}</h1>
        <p>{description}</p>
        <p>{Post}</p>
        <a classname = "text-center" href = "${Linkedin}"><img className="w-[40px]" src = "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/linekdin.webp?alt=media&token=f83f1b29-180f-40b0-94a8-96303cc2fdf2"></img></a>
        <Button text={"Know More"} ></Button>
      </div>
      <div className="w-1/2">
      <img src={imgUrl} alt="NameOfUser" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default serviceCards;
