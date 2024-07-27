import React from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/ContactPage/Intro';

const ContactUs = () => {
  return (
    <div > {/* Adjust the top padding here */}
      <Navbar />
      <Intro className="pt-20"/>
      {/* Add other components/content of ContactUs page here */}
    </div>
  );
};

export default ContactUs;
