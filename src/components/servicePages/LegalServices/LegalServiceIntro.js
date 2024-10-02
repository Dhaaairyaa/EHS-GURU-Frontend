import React from 'react';
import Legal_service_images from '../../../data/legal_service_images';
import { useEffect,useState } from 'react';
const LegalServiceIntro = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Legal_service_images.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, [currentIndex]);
  
    const handleIndexChange = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="relative h-screen overflow-hidden">
        {Legal_service_images.map((client, index) => (
          <img
            key={index}
            src={client.imageUrls}
            alt={`Client ${index}`}
            className={`absolute w-full h-screen transition-transform duration-500 ease-in-out ${
              currentIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{
              objectFit: 'cover',
            }}
          />
        ))}
       <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
  
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-28 text-white text-center">
          <div className="flex flex-col text-center w-2/3 space-y-8 pt-4">
            <h1 className="text-6xl font-bold text-center">Legal Services</h1>
            <p className="text-xl">Every operation, industry, facility or establishment needs to function as per the laws, rules and regulations governing the sector in which they operate. Given the diverse, evolving and expansive nature of the legal infrastructure in India, business entities find it difficult to manage their regulatory compliance requirements. However, adhering to the legal requirements is an essential step towards averting legal risks, which could otherwise prove counter-productive to business operations and brand reputation. 
In an era where matters pertaining to environment, social, governance, health and safety are increasingly garnering focus, businesses must be particularly careful about ensuring that the legal and regulatory compliance requirements (licenses and permits) with respect to these aspects are in place and the conditions imposed under each license and permit are being duly followed. 
To assist businesses in understanding their compliance requirements and remaining compliant therefor, we have a dedicated line of services, pertaining to EHS (Environment, Health and Safety) and ESG (Environment, Social and Governance) compliance management in India. Through this service, we assess the laws applicable to different businesses, help them identify potential risk areas, and assist them in managing the risks by assisting in seeking the desired licenses, permits, renewals etc. Considering the evolutionary nature of law and the dynamic nature of the field, we also provide legal advisory services to businesses, to keep them abreast of the changing regulatory landscape.</p>
          </div>
          <div className="flex space-x-2 pt-10">
          <div onClick={() => handleIndexChange(0)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 0 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
          <div onClick={() => handleIndexChange(1)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 1 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
          <div onClick={() => handleIndexChange(2)} className={`rounded-full cursor-pointer h-[10px] w-[10px] ${currentIndex === 2 ? "bg-[#ffA500] w-[12px] h-[12px]" : "bg-white"}`}></div>
          
          </div>
        </div>
  
      </div>
    );
  };


export default LegalServiceIntro;