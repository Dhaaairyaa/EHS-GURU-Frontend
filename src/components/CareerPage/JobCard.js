import React from 'react';

const JobCard = ({designation,department,experience,jobLocation,jobDescription,jobId,link}) => {
  return (
    <div className="hover:scale-105 transition transition-all duration-500">
        <div className="w-[350px] bg-white p-5 flex flex-col space-y-2 h-[320px] rounded-lg">
          <h1><span className="font-bold">Job Role - </span>{designation}</h1>
          <p><span className="font-bold">Location- </span>{jobLocation}</p>
          <p><span className="font-bold">Min experience - </span>{experience}</p>
          <p><span className="font-bold">Department - </span>{department}</p>
          <p><span className="font-bold">Job Id - </span>{jobId}</p>
          <p><span className="font-bold">Job Description - </span>{jobDescription} <a href = {link} className="text-[#0066b2]">Know more</a></p>
         
        </div>
    </div>
  );
};

export default JobCard;