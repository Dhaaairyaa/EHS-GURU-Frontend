import React from 'react';
import CustomButton from '../common/button';
import VissionMissionCard from '../HomePage/VissionMissionCard';
import VisssionMissionData from '../../data/VissionMissionData';
const IntroPart = () => {
  return (
    <div className="h-[775px] bg-white relative">
        <div className="flex justify-between z-1 bg cards relative">    
            <div 
                className="absolute top-0 left-0 w-0 h-0" 
                style={{ 
                //   borderLeft: '25px solid transparent', 
                borderRight: '600px solid transparent', 
                borderTop: '700px solid #175b34' 
                }}
            ></div>
            <div className="absolute top-0 right-0 w-0 h-0 mt-20" 
                style={{ 
                //   borderLeft: '25px solid transparent', 
                borderLeft: '650px solid transparent', 
                borderBottom: '700px solid #175b34' 
                }}
            >
            </div>
            
        </div>

        <div className="absolute inset-0 flex items-center justify-center space-x-32">
        {VisssionMissionData.map((item, index) => (
            <VissionMissionCard
            key={index} // Ensure a unique key
            frontImgSrc={item.frontImgSrc}
            heading={item.heading}
            description={item.description}
            buttonUrl={item.buttonUrl}
            />
        ))}
        </div>

    </div>
  );
};

export default IntroPart;
