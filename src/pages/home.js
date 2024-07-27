import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/HomePage/Hero';
import { displayData } from '../data/display_data';
import { useState,useEffect } from 'react';
import IntroPart from '../components/HomePage/IntroPart';
import ClientScroll from '../components/HomePage/ClientScroll';
import SuccessStory from '../components/HomePage/SuccessStory';
import SuccessData from '../components/HomePage/SuccessData';
import Service from '../components/HomePage/Service';
import Testimonials from '../components/HomePage/Testimonials';
import Products from '../components/HomePage/Products';
import Service1 from '../components/HomePage/Service1';
import Footer from '../components/Footer';
import OurValue from '../components/HomePage/OurValues';
import Global from '../components/HomePage/Global';
import IndustryServed from '../components/HomePage/IndustriesServed';
const Home = () => {
  const[imageCount, setimageCount] = useState(6);
//   useEffect(() => {
//     const interval = setInterval(() => {
//         setimageCount(prevCount => (prevCount + 1) % 6);
//     }, 500000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Hero data={displayData[imageCount]} displayData={displayData[imageCount]} imageCount = {imageCount} setimageCount={setimageCount}></Hero>
      {/* <IntroPart></IntroPart> */}
      <SuccessStory></SuccessStory>
      <Products></Products>
      {/* <Service1></Service1> */}
      <Service></Service>
      <IndustryServed></IndustryServed>
      <SuccessData></SuccessData>
      <OurValue></OurValue>
      
     
      {/* <ServiceStack></ServiceStack> */}
      <Testimonials></Testimonials>
      <Global></Global>
      <ClientScroll></ClientScroll>
     
      
      <Footer></Footer>
      

       
 
      
      <div className="h-[500px] bg-richblack-50"></div>
          
    </div>
  );
};

export default Home;