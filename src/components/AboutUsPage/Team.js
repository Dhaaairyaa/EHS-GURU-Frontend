import React, { useState,useRef } from 'react';
import EmployeeData from "../../data/EmployeeData";
import EmployeeCard from './EmployeeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const modalBackgroundRef = useRef(null);
  const handleCardClick = (employee) => {
    setSelectedEmployee(employee);
    console.log(employee);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };
  const handleEmailClick = () => {
    window.location.href = `mailto:${selectedEmployee.Email}`;
  };

  const handleClickOutside = (e) => {
    if (modalBackgroundRef.current && modalBackgroundRef.current === e.target) {
      closeModal();
    }
  };


  const leadersAndAdvisors = EmployeeData.filter(employee => employee.category === "Leaders&Advisors");
  const Experts = EmployeeData.filter(employee => employee.category === "Our_Experts");
  return (
    <div className="bg-white  p-20">
      <div className="">
        <h1 className="text-5xl">Meet Our Team</h1>
        <p className="text-lg pt-7 mr-20">Each one of us at EGSS is a Value Catalyst for whom furthering client business in the most effective manner is the solo aim. Backed by a team of global industry leaders, EGSS comes armed both with technical know-how and multi jurisdiction expertise.</p>
      </div>
      <div className="pt-20">
        <h1 className="text-3xl">Our Leaders & Advisors</h1>
        <div className="grid grid-cols-4 gap-4 pt-10">
          {leadersAndAdvisors.map((item, index) => (
            <EmployeeCard key={index} name = {item.name} designation = {item.designation} description1 = {item.des1} description2 = {item.des2} education = {item.education} certifications = {item.certifications} email = {item.Email} linkedin = {item.Linkedin} imgUrl = {item.ImgrUrl} onClick={() => handleCardClick(item)}/>
          ))}
        </div>
      </div>

      <div className="pt-20">
        <h1 className="text-3xl">Our Experts</h1>
        <div className="grid grid-cols-4 gap-4 pt-10">
          {Experts.map((item, index) => (
            <EmployeeCard key={index}  name = {item.name} designation = {item.designation} description1 = {item.des1} description2 = {item.des2} education = {item.education} certifications = {item.certifications} email = {item.Email} linkedin = {item.Linkedin} imgUrl = {item.ImgrUrl} onClick={() => handleCardClick(item)}/>
          ))}
        </div>
      </div>
      {/* absolute  inset-20 ml-52 z-55 */}
      {
        selectedEmployee &&(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleClickOutside} ref={modalBackgroundRef}>
          <div className="relative bg-white h-[700px] w-[800px] overflow-scroll p-10 rounded-lg shadow-lg"  onClick={(e) => e.stopPropagation()}>
         

            <button
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 text-2xl"
            onClick={closeModal} 
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
        
          <div className="flex space-x-5">
          <div className="w-1/4 h-[150px] rounded-lg overflow-hidden">
            <img
              className="h-[150px] w-[150px] rounded-lg object-cover"
              src={selectedEmployee.ImgrUrl}
              alt={`${selectedEmployee.name}'s profile`}
            />
          </div>
          <div className="flex flex-col space-y-3 w-3/4">
            <h1 className="text-3xl font-bold">{selectedEmployee.name}</h1>
            <p className="text-lg">{selectedEmployee.designation}</p>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          
          
        </div>
        <div>
          <p  className="pt-5">{selectedEmployee.des1}</p>
          <p  className="pt-5">{selectedEmployee.des2}</p>
          
          {selectedEmployee.education && selectedEmployee.education.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <h1 className="pt-5 font-bold pb-2 text-xl">Professional Qualifications</h1>
              {Object.values(item).map((educationItem, subIndex) => (
                <p key={subIndex}>- {educationItem}</p>
                
              ))}
            </div>
          ))}

          {selectedEmployee.certifications && selectedEmployee.certifications.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <h1 className="pt-5 font-bold pb-2 text-xl">Certifications</h1>
              {Object.values(item).map((certificationItem, subIndex) => (
                <p key={subIndex}>- {certificationItem}</p>
                
              ))}
            </div>
          ))}

            <p  onClick={handleEmailClick} className="text-xl cursor-pointer pt-5">
                <FontAwesomeIcon icon={faEnvelope} className="pr-3" />
                <span  className=" text-[#204ab1]">
                  {selectedEmployee.Email}
                </span>
            </p>

            <p className="text-xl cursor-pointer pt-5">
                <FontAwesomeIcon icon={faLinkedin} className="pr-3" />
                <span  className=" text-[#204ab1]">
                <a href = {selectedEmployee.Linkedin} target="_blank"> Linkedin   </a>
                </span>
            </p>
          
        </div>
        
            
          </div>
            
          </div>
        )
      }


    </div>
  );
};

export default OurTeam;
