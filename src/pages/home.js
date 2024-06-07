import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { displayData } from '../data/display_data';
import { useState,useEffect } from 'react';
import IntroPart from '../components/IntroPart';
import CardStack from '../components/cardStack';
import Testimonials from '../components/Testimonials';
const Home = () => {
  const[imageCount, setimageCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
        setimageCount(prevCount => (prevCount + 1) % 6);
    }, 500000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Hero data={displayData[imageCount]} displayData={displayData[imageCount]} imageCount = {imageCount} setimageCount={setimageCount}></Hero>
      <IntroPart></IntroPart>
      <CardStack></CardStack>
      <Testimonials></Testimonials>
      <div className="bg-richblack-50 h-[1500px]"></div>    
    </div>
  );
};

export default Home;