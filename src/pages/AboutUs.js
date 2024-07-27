import React from 'react';
import Intro from "../components/AboutUsPage/intro";
import Navbar from "../components/Navbar";
import Team from "../components/AboutUsPage/Team";
const AboutUs = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Intro></Intro>
      <Team></Team>
    </div>
  );
};

export default AboutUs;