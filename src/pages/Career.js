import React from 'react';
import Intro from "../components/CareerPage/intro";
import Values from '../components/CareerPage/values';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import CurrentOpenings from '../components/CareerPage/CurrentOpenings';
import FormSection from '../components/CareerPage/FormSection';
const Carrer = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <Values></Values>
        <CurrentOpenings></CurrentOpenings>
        <FormSection></FormSection>
        <Footer></Footer>

        
        
    </div>
  );
};

export default Carrer;