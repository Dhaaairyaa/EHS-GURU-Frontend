import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ErgonomicsIntro from '../components/servicePages/Ergonomics/ErgonomicsIntro';
import ErgonomicsServices from '../components/servicePages/Ergonomics/ErgonomicsServices';
const Ergonomics = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ErgonomicsIntro></ErgonomicsIntro>
      <ErgonomicsServices></ErgonomicsServices>
      <Footer></Footer>
    </div>
  );
};

export default Ergonomics;