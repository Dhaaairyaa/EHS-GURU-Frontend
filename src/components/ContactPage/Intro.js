import React from 'react';
import ContactForm from "../ContactPage/form"
const Intro = () => {
  const email = 'ehssolutions@ehsguru.com';
  const phoneNumber = '+91-8123552278';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  return (
    <div className="relative">
      <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/deep-forest-in-summer-free-photo.webp?alt=media&token=4e000cc3-7df6-4f1f-88fb-5e99120b7c3d')] bg-cover h-screen ">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
        <div className="relative flex items-center justify-center h-full pt-24">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg mt-2">Want to get in touch? We'd love to hear from you...</p>
            <ContactForm></ContactForm>
            <div className = "">

            </div>
            
            {/* <div className="mt-4">
            <button onClick={handleEmailClick}  className=" relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#0a2b14] border-2 border-[#8BBE87] rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#8BBE87] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                </span>
                <span className="relative">{text}</span>
            </button>
              <button  className="text-blue-500 underline">Email Us</button>
              <button onClick={handlePhoneClick} className="ml-4 text-blue-500 underline">Call Us</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;




// <div className="mx-auto p-8 bg-white rounded-lg shadow-lg flex w-1/2">
//             <div className="flex flex-col space-y-4">
//                 <h2 className="text-3xl font-bold mb-4">Get In Touch Now</h2>
//                 
//           </div>
//           <div>

//           </div>
// </div>


// filter grayscale