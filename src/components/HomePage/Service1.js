import React, { useState, useEffect } from 'react';
const Service1 = () => {
    const [currentVal, setCurrentVal] = useState("EHS");

    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % ClientImages.length);
    //   }, 5000);
  
    //   return () => clearInterval(timer);
    // }, []);
  
  
    return (
      <div className="bg-white pl-28 pr-28 p-28">
        <h1 className="text-5xl">Our Core Focus Areas</h1>
  
        <div className="flex space-x-3 mt-5">
            <div onClick={()=>setCurrentVal("EHS")} className={` relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal==="EHS" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}  `}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-600 ease"></span>
              <span className="relative">EHS</span>
            </div>
  
            <div onClick={()=>setCurrentVal("ESG & Sustainability")} className={` relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal==="ESG & Sustainability" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}  `}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative">ESG & Sustainability</span>
            </div>
  
            <div onClick={()=>setCurrentVal("Fire & Life Safety")} className={` relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal==="Fire & Life Safety" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}  `}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative">Fire & Life Safety</span>
            </div>

            <div onClick={()=>setCurrentVal("Legal Services")} className={` relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal==="Legal Services" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}  `}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative">Legal Services</span>
            </div>

            <div onClick={()=>setCurrentVal("Ergonomics")} className={` relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal==="Ergonomics" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}  `}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative">Ergonomics</span>
            </div>
  
            
          </div>
  
          <div className="full h-[500px] border-2 border-black mt-5">
  
          </div>
  
        {/* <div className="flex space-x-6 p-16 justify-between items-center">
        {
          ProductsData.map((item, index) => (
            <ProductCard key={index} name={item.productName} description  = {item.description} url = {item.url}  />
          ))
        }
         </div> */}
      </div>
    );
  };


export default Service1;