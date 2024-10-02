import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SuccessStory = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };
//E2F0E9
  return (
    <div className="bg-[#ECE8E0]" > 
      <div className="flex p-10">
        <div className="w-1/2 p-20">
          <div 
            className="relative"
            style={{
              transform: `translate(${cursorPosition.x * 0.025}px, ${cursorPosition.y * 0.025}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img onMouseMove={handleMouseMove}
              className="w-[700px]"
              src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/HomePage%2F6_ehs.jpg?alt=media&token=039fa1fd-db04-4f8e-9bec-0a37da208041"
              alt="EmployeeImg"
            />
          </div>
        </div>
        <div className="w-1/2 p-20">
          <h1 className="text-5xl ">
            Our Success Story
          </h1>
          <p className="pt-5 text-md leading-8 tracking-wider">
            From a spark in September 2017, we've ignited into a global force. We've built a team of qualified EHS, ESG, Sustainability, and Safety professionals, now exceeding 1000+ satisfied clients across India, USA, UK, Denmark, Bhutan, Thailand, Australia, and more. Our unwavering commitment to excellence has earned us the trust of numerous businesses, making us a leading name in the EHS, ESG, and Sustainability industry.
          </p>
          <Link to="/more-info">
            <div className="rounded-full relative inline-flex items-center px-5 py-1 mt-5 overflow-hidden text-lg font-medium border-2 border-black bg-[#ECE8E0] text-black hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative">Know More</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
