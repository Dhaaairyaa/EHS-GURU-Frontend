import React from 'react';
import { Link } from 'react-router-dom';
const IndustryCard = ({ key, Logourl, name, description, urls }) => {
  return (
    <div className= "bg-[#ECE8E0] p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-500">
      <img src={Logourl} alt={`${name} logo`} className="w-20 h-20 mx-auto" />
      <h2 className="text-2xl text-center mt-4">{name}</h2>
      <p className="text-center mt-2">{description}</p>
      <Link
          to={urls}
          target="_blank"
          className="mt-2 relative inline-flex items-center px-10 py-2 overflow-hidden text-md font-medium text-black border border-black rounded-full hover:text-black hover:border-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative">Learn More</span>
        </Link>
    </div>
  );
};

export default IndustryCard;
