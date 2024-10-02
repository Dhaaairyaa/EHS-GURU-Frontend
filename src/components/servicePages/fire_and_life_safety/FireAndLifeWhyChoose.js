import React from 'react';
import fireAndLifeSafetyWhyChooseUs from "../../../data/fireAndLifeSafetyWhyChooseUs"
const FireAndLifeSafetyWhyChoose = () => {
  return (
    <div className="bg-white p-28">


        <div className="flex flex-col space-y-5">
            <h1 className="text-xl text-[#175B34]">Fire & Electrical Safety</h1>
            <h2 className="text-5xl">Why Choose Us</h2>
           
            <p className="">Fire and life safety is a very vast field and this field is much more than just audit/assessment and training. Here at EHS Guru, we understand the requirements of our clients very well. We have our own dedicated team of fire safety experts who examine and test the fire safety assignments at various levels and present the correct and valuable solutions to our valued clients in the presence of all the resources and logic. We, at EHS Guru, thoroughly understand and carry out Fire & Life Safety Audits with full compliance of National Building Code 2005/2016 Part II, Part III, & Part IV along with Indian Standards like IS 2189, IS 2190, IS 3844, IS 13039, IS 15105, IS 15301, IS 15683, and other relevant statewise rules & regulations.</p>
            <p>We at EHS Guru also carry out fire load calculations for our clients manually and with the help of special software which is very important for determining the structural fire rating of your building. Apart from this, we also have a fire safety training team which provides regular fire safety trainings as well as occupancy specific fire safety trainings which include mock evacuation drills, hydrant operations, fire pump operations and its maintenance, training of firemen, etc.</p>
            <p>Our fire safety experts are highly competent in investigating fire incidents in depth. Our experts investigate the causes of fire and provide complete and accurate information to our valuable clients by conducting a root cause analysis along with the actual incident.</p>
            <p>Our fire safety team is also capable of conducting technical inspections of fire systems and preparing corrective action plans if any system maintenance deficiency is found. We at EHS Guru have also performed refitting pump performance tests, hydraulic calculations, and water demand calculations for more than 500 clients and all our clients are completely satisfied with all the technical services provided by the fire safety team of EHS Guru and happily give us the opportunity to serve again and again. Thank you!</p>
        </div>

        <div className="flex space-x-20 pt-5">
            {fireAndLifeSafetyWhyChooseUs.map((item,index) => (
                <div>
                    <div className="flex flex-col items-center justify-between">
                        <img src = {item.url} alt ="why_choose_us" className="w-[110px]"></img>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>

      
    </div>


  );
};

export default FireAndLifeSafetyWhyChoose;