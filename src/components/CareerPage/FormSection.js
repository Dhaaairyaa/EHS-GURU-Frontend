import React from 'react';
import Applicationform from './Applicationform';
const FormSection = () => {
  return (
    <div className="p-20 bg-white ">
    <div className="flex  pt-10 space-x-20">
        <div className="flex flex-col space-y-8">
            <div>
                <h1 className="text-4xl mb-4">Join Us Today </h1>
                <h1 className="text-4xl mb-4">and Watch Your </h1>
                <h1 className="text-4xl mb-4">Career Thrive with</h1>
                <h1 className="text-5xl mb-4 text-[#175b34]">Endless Opportunities</h1>
            </div>
            
            <p className="pb-14 text-lg ">At EHS Guru Sustainable Solutions Pvt. Ltd., we believe that a diverse and inclusive workplace is essential for fostering innovation and achieving excellence. Our culture is built on the foundation of respect, collaboration, and continuous learning. We are committed to creating an environment where every team member feels valued and empowered to bring their unique perspectives and talents to the table. By embracing diversity in all its forms, we drive creativity and develop sustainable solutions that benefit our clients and communities. Join us in making a difference and be part of a team that celebrates individuality, supports growth, and works together towards a greener future.</p>
        </div>
        <div>
            <Applicationform></Applicationform>
        </div>
    
    
    </div>
    </div>

   
  );
};

export default FormSection;