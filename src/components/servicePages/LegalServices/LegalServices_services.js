import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LegalService_services_data from "../../../data/LegalService_services_data"
const LegalService_services = () => {
  return (
    <div>
        <div className="bg-[#ECE8E0] p-28 flex flex-col space-y-3">
        <h1 className="text-xl text-[#175B34]">Legal Services</h1>
        <h2 className="text-5xl">Services</h2>
        
        <div className="grid grid-cols-2 gap-8 pt-8">
            {LegalService_services_data.map((item, index) => (
            <div key={index} className="bg-white backdrop-blur-sm rounded-lg shadow-lg p-5 transition transition-all duration-500 hover:scale-105 ">
                <div className>
                <h3 className="text-2xl pt-4">{item.name}</h3>
                <p className="pt-4">{item.description}</p>
                <Link to="/contactUs" className="inline-block text-lg pt-2 transform hover:scale-105 transition-transform duration-200 origin-left text-[#175B34]">
                    Consult Now <FontAwesomeIcon className=" ml-1 text-sm" icon={faArrowRight} />
                </Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default LegalService_services;