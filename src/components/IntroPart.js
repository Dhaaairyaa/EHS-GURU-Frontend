import React from 'react';
import CustomButton from './common/button';
const IntroPart = () => {
  return (
    <div className="bg-richblack-50 pb-20">
      <div className="flex pt-32 ">
        <div className="w-1/2">
            <img className="pl-32" src = "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/HomePage%2F6_ehs.jpg?alt=media&token=039fa1fd-db04-4f8e-9bec-0a37da208041" alt = "team_image"></img>
        </div>
        <div className="w-1/2 pl-28 pr-16">
            <h1 className="text-xl pb-4">System based approach, Quality and Sustainable Solution is our fundamental principles for overall governance during any assignment.</h1>
            <p className= "playfair-display-headingfont pb-3">We started our journey in 2017 and now we are growing with more than 328 clients in our list and privileged to claim our first client as Government of India and now serving with our team EHS capabilities to Multinational Companies, big corporate, as well as our society through various non-profit programs as well.
            A dynamic, young and professional team of quality, environmental, health, safety & social professionals having expertise in diverse domain of EHS includes Fire Safety, ESDD, Wellbeing, Technical Due Diligence, Disaster Management, Regulatory Compliance, Management System Implementation, Industrial Safety, Risk Assessments, Environment, Health & Safety, First Aid, Ergonomics, Labour Compliance, Social Audits.</p>
            <CustomButton text={"Read More"} address={"/about"} ></CustomButton>
        </div>
        
      </div>
    </div>
  );
};

export default IntroPart;