import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FireAndLifeIntro from "../components/servicePages/fire_and_life_safety/FireAndLifeIntro"
import FireAndLifeServices from "../components/servicePages/fire_and_life_safety/FireAndLifeServices"
import FireAndLifeSafetyWhyChoose from "../components/servicePages/fire_and_life_safety/FireAndLifeWhyChoose"
const FireAndLifeSafety = () => {
  return (
    <div>
        <Navbar></Navbar>
        <FireAndLifeIntro></FireAndLifeIntro>
        <FireAndLifeServices></FireAndLifeServices>
        <FireAndLifeSafetyWhyChoose></FireAndLifeSafetyWhyChoose>
        <Footer></Footer>
    </div>
  );

};

export default FireAndLifeSafety;