import React from 'react';
import CultureAndDiversity from '../components/CareerPage/CultureAndDiversity';
import Intro from "../components/CareerPage/intro";
import Navbar from '../components/Navbar';
const Carrer = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <CultureAndDiversity></CultureAndDiversity>
    </div>
  );
};

export default Carrer;