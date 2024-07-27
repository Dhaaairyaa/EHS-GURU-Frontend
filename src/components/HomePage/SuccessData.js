import React, { useState } from 'react';
import CountUp from 'react-countup'; // Correct import for CountUp
import ScrollTrigger from 'react-scroll-trigger'; // Correct import for ScrollTrigger
const SuccessData = () => {
  const [counterOn,setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="h-auto bg-[#ECE8E0]">
            <div className="p-8 bg-[#ECE8E0] ml-28 mr-28 pt-20 pb-20 left-0 right-0 bottom-0 m-auto z-10 rounded-lg flex-col space-y-7  items-center justify-center">
              <h1 className="text-center text-5xl pb-10"> Our Key Milestones </h1>
                <div className="flex items-center justify-between playfair-display-headingfont text-xl mx-28">
                    {counterOn && 
                      <div className="flex flex-col text-center">
                        <h1 className="text-[#175b34] text-3xl"><CountUp start={0} end={1000} duration={5} /> +</h1>
                        <p>Happy Clients</p>
                        </div>
                    }
                    
                    {counterOn && 
                    <div className="flex flex-col text-center">
                       <h1 className="text-[#175b34] text-3xl"><CountUp start={0} end={500} duration={5} /> +</h1>
                       <p>successful Audits</p>
                    </div>
                    }
                    
                    {counterOn && 
                    <div className="flex flex-col text-center"> 
                      <h1 className="text-[#175b34] text-3xl"><CountUp start={0} end={1000} duration={5} /> +</h1>
                      <p>Comprehensive Tranning</p>
                    </div>
                    }
                   
                    {counterOn &&
                     <div className="flex flex-col text-center"> 
                      <h1 className="text-[#175b34] text-3xl"><CountUp start={0} end={600} duration={5} /> + Cr</h1>
                      <p>Investments supported</p>
                      </div>
                      }
                </div>
                
            </div>
        </div>
    </ScrollTrigger>
  );
};

export default SuccessData;
