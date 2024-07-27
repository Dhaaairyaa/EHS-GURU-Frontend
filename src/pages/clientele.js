import React from 'react';
import Intro from '../components/ClientelePage/intro';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import DisplayClient from '../components/ClientelePage/DisplayClient';
import Testimonial from '../components/HomePage/Testimonials';
import Global from '../components/HomePage/Global';
import PartnerAndCollaboration from '../components/ClientelePage/Partners';

const Clientele = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <DisplayClient></DisplayClient>
        <PartnerAndCollaboration></PartnerAndCollaboration>
        <Testimonial></Testimonial>
        <Global></Global>
        
        <Footer></Footer>

        
    </div>
  );
};

export default Clientele;