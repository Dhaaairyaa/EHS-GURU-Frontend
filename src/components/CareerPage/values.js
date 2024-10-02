import React from 'react';
import careerEmoticons from "../../data/career_emoticons";
import ValueCard from './valueCard';
const Values = () => {
  return (
      <div className="bg-white p-20">
          <h1 className="text-5xl pt-5 pb-5 ">What We Offer</h1>
          
        <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-4">
                
                <div className="grid grid-cols-3">
                    {
                        careerEmoticons.map((item,index)=>(
                            <div>
                                <ValueCard image = {item.imageUrl} name = {item.name} message = {item.message} index = {index}></ValueCard>
                            </div>
                        ))
                    }
                </div>
        </div>
      </div>
    
  );
};

export default Values;