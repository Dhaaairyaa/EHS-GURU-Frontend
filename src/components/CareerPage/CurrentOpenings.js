import React from 'react';
import JobCard from './JobCard';
import CurrentOpeningsData from "../../data/CurrentOpenings";

const CurrentOpenings = () => {
  if (!CurrentOpeningsData || CurrentOpeningsData.length === 0) {
    return null; // or you can return a message like "No current openings available."
  }

  return (
    <div className="bg-[#ECE8E0] p-20">
      <h1 className="text-5xl">Current Openings :</h1>
      <div className="grid grid-cols-3 gap-y-8 pt-10">
        {CurrentOpeningsData.map((item, index) => (
          <div key={index}>
            <JobCard 
              designation={item.designation} 
              department={item.department} 
              experience={item.experience} 
              jobLocation={item.jobLocation} 
              jobDescription={item.jobDescription} 
              jobId={item.jobId}
              link = {item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentOpenings;
