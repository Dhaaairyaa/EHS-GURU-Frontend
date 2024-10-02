import React from 'react';
import Intro from "../components/AboutUsPage/intro";
import Navbar from "../components/Navbar";
import Team from "../components/AboutUsPage/Team";
import Footer from '../components/Footer';
const AboutUs = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Intro></Intro>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;