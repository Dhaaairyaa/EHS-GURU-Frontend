import React from 'react';
import './VissionMission.css'
const VissionMissionCard = ({frontImgSrc,heading,description,buttonUrl}) => {
  return (
    <div className="">
    <div className="container">
      <div className="card">
          <div className="front flex flex-col ">
            <h1 className="text-center pt-16 playfair-display-headingfont text-4xl">{heading}</h1>
            <img src={frontImgSrc} className="pt-12 w-[1300px]"></img>
          </div>
          <div className="back flex flex-col ">
              <h1 className="text-center pt-12 playfair-display-headingfont text-4xl">{heading}</h1>
              <p className="text-center pt-4 playfair-display-headingfont text-md">{description}</p>        
          </div>
      </div>
    </div>
    </div>
  );
};

export default VissionMissionCard;