import ergonomics_services from "../../../data/ergonomics_services";
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ErgonomicsServices = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (index) =>{
        if(selected === index){
            return setSelected(null);
        }
        else{
            return setSelected(index);
        }
    }
  return (


    <div 
      className="flex flex-col items-center justify-center p-20" 
    >
   

    <p className="text-md text-center">At ErgoTattva, we are dedicated to enhancing your workspace, health, and productivity through the principles of ergonomics. Our team of experienced professionals provides tailored solutions to optimize your workspace, prevent discomfort, and foster a culture of well-being. We specialize in ergonomic assessments for all types of workplaces and offer custom training based on assessment reports. Our services include assessments, training, workstation design recommendations, and consultations. Our expertise in ergonomic methodology sets us apart, as we specialize in over 45 methodologies. Our esteemed clients include Titan Company Ltd., Johnson & Johnson, Mahindra, and many more. Some methodologies we use for assessment of different workspaces were:</p>
    <Link to="/contactUs" className="inline-block text-lg pt-2 transform hover:scale-105 transition-transform duration-200 origin-left text-[#175B34]">
        Consult Now <FontAwesomeIcon className=" ml-1 text-sm" icon={faArrowRight} />
    </Link>

      <div className="w-[900px] pt-10">
        {ergonomics_services.map((item, index) => (
          <div key={index} className="mb-4 bg-white bg-opacity-80 p-3 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
                <h2 className={`text-2xl mb-2 ${selected===index?'text-[#175B34]':''}`}>{item.name}</h2>
                <span className="text-xl">
                    {selected === index ? '-' : '+'}
                </span>

            </div>
                <div className={`transition-opacity duration-300 ease-in-out ${selected === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    <p>{item.description}</p>
                </div>

          </div>
        ))}
      </div>
      <iframe className="rounded-lg" width="900" height="515" src="https://www.youtube.com/embed/C-aRf-2nssM?si=kidiOBA5WilpXfyO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

  );
};

export default ErgonomicsServices;
