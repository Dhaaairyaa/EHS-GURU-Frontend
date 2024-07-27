import React from 'react';
import valueData from "../../data/valueImages";

const OurValue = () => {
  return (
    <div className="bg-white pt-20 pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center flex flex-col space-y-5 w-2/3">
            <h1 className="text-5xl">OUR VALUES AND PRINCIPLES</h1>
            <h1 className="text-2xl"> “Together Towards Tomorrow” </h1>
            <p className=" text-md">At EHS Guru Sustainable Solutions Pvt. Ltd., success is a journey guided by Respect, Ownership, and Passion. Respect fosters collaboration, Ownership drives accountability, and Passion fuels innovation. Our principles reflect our unwavering commitment, illustrating how they guide our actions and shape our vision for the future. We are united in our pursuit of excellence and ready to face the challenges of tomorrow with confidence and integrity.</p>
        </div>

        <div className="flex flex-wrap gap-8 p-10 justify-center">
          {valueData.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3 justify-center items-center hover:scale-110 transition transition-all duration-500">
              {item.type === 'Value' && (
                <>
                <div className="bg-[#ECE8E0] rounded-full p-10 flex flex-col justify-center items-center space-y-3">
                  <img src={item.url} alt="values" className="w-[80px]" />
                  <p>{item.name}</p>
                </div>
                  
                </>
              )}
            </div>
          ))}
        </div>

        {/* <div className = "text-center flex flex-col space-y-5 w-2/3">
            <h1 className="text-5xl">OUR PRINCIPLES</h1>
            <h1 className="text-2xl">“Together Towards Tomorrow”</h1>
            <p className=" text-md">At EHS Guru Sustainable Solutions Pvt. Ltd., our principles reflect our unwavering commitment, illustrating how they guide our actions and shape our vision for the future. We are united in our pursuit of excellence and ready to face the challenges of tomorrow with confidence and integrity.</p>
        </div>
        */}

        <div className="grid grid-cols-5 gap-8">
          {valueData.map((item, index) =>  item.type === 'Principle' &&(
                (
                <div key={index} className="flex flex-col space-y-3 justify-center items-center hover:scale-110 transition tranisition-all duration-500">
                
                  <img src={item.url} alt="values" className="w-[80px]" />
                  <p>{item.name}</p>
                </div>
              )
          ))}
        
        </div> 

      </div>
    </div>
  );
};

export default OurValue;
