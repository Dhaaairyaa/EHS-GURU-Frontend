import React from 'react';
import Navbar from '../components/Navbar';
import LegalServiceIntro from '../components/servicePages/LegalServices/LegalServiceIntro';
import LegalService_services from '../components/servicePages/LegalServices/LegalServices_services';
const LegalServices = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LegalServiceIntro></LegalServiceIntro>
      <LegalService_services></LegalService_services>
    </div>
  );
};

export default LegalServices;