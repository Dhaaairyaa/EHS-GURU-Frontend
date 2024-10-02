import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faSquareXTwitter,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    const phoneNumber = '+91-8123552278';
    const email = 'ehssolutions@ehsguru.com';
    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
      };
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
      };
  return (
    <div className="bg-[#152d5d] h-[400px]">
     <div>
         <div className="flex p-10">
            <div className="flex flex-col space-y-2 w-1/5">
                <img className="w-[200px]" alt = "logo" src = "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/black%20background.png?alt=media&token=8ce94e41-3be9-4eb5-8407-a910237426fb"></img>
                <div className="pt-20">
                    <p className="text-white">Contact Details</p>
                    <p className="text-lg">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
                        
                        <span onClick={handlePhoneClick} className="text-white cursor-pointer">
                        {phoneNumber}
                        </span>
                    </p>
                    <p onClick={handleEmailClick} className="text-lg cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />
                        <span  className="text-white">
                        {email}
                        </span>
                    </p>
                </div>
            </div>

            <div className="bg-[#dedcdc] w-[1px] h-[320px] mx-10"></div>
            
            <div className="w-1/4 text-white">
                <p className="text-xl text-bold">Corporate Office North </p>
                <p className="ml-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
                    116-117, 1st Floor, Bestech Chambers, Sushant Lok, Phase 1, Sector 43, Gurugram, 122002, Haryana 
                </p>

                <p className="pt-5">Regional Office West</p>
                <p className="ml-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
                    310-311, 3rd Floor, Crescent Business Pa, Andheri East, Mumbai - 400069 
 
                </p>

                <p className="pt-5">Regional Office South </p>
                <p className="ml-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
                    T-5, Block B, Gayatri Ocean Blue, Kumarapalli, Whitefield, Bengaluru - 560066, Karnataka
                </p>

            </div>

            <div className="bg-[#dedcdc] w-[1px] h-[320px] mx-10"></div>

            <div className="flex space-x-14 pt-10">
                <div className="flex flex-col space-y-6  text-white">
                    <Link to = "/">About Us</Link>
                    <Link to = "/">Carrer</Link>
                    <Link to = "/">Contact Us</Link>
                    <Link to = "/">Services</Link>
                    <Link to = "/">Clientele</Link>
                    <Link to = "/">Blogs</Link>

                </div>

                <div className="flex flex-col space-y-4">
                    <h1 className="text-[#FFFF00]">Products</h1>
                    <Link className="text-white" to = "/">ErgoTattva</Link>
                    <Link className="text-white" to = "/">RuleSutra</Link>
                    <Link className="text-white" to = "/">WasteYukti</Link>

                </div>


                <div className="text-4xl text-white">
                <div className="flex space-x-5">
                    <Link to  = " "><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link to  = " "><FontAwesomeIcon icon={faSquareXTwitter} /></Link>
                    <Link to  = " "><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to  = " "><FontAwesomeIcon icon={faFacebook} /></Link>
                </div>
                </div>
            </div>
            

         </div>
     </div>
    </div>
  );
};

export default Footer;