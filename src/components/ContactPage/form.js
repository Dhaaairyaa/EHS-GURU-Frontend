import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const email = 'ehssolutions@ehsguru.com';
  const phoneNumber = '+91-8123552278';
  const location = '5th Floor, Plot No. 44, Sector-44, Gurugram Haryana'
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  return (
    <div className="mt-10">
      <div className="backdrop-blur-md h-[400px] w-[800px] rounded-lg">
        <div className="flex">

          <div className="h-[330px] w-1/3 mt-8 text-white playfair-display-headingfont flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center">
              Have a question?
            </h1>
            <p className="m-5 text-center">
              Fill out the form, and we will respond within 4 hours.
            </p>
            <div className="pt-4 flex flex-col space-y-2">
              <p className="text-lg">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                
                <span onClick={handlePhoneClick} className="text-white cursor-pointer">
                  {phoneNumber}
                </span>
              </p>
              <p onClick={handleEmailClick} className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span  className="text-white">
                  {email}
                </span>
              </p>
              <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span className="text-white">
                  {location}
                </span>
              </p>
            </div>
          </div>


          <div className="bg-white h-[320px] w-[1px] ml-6 mt-10"></div>


          <div>
          <form className="m-8">


            <div className="flex flex-col space-y-8">

                <div className="flex space-x-4">
                      <div className="flex items-center justify-center space-x-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Your name"
                        />
                      </div>


                      <div className="flex items-center justify-center space-x-2">
                          <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                          </label>
                          <input
                            className=" bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                          />
                      </div>
                </div>


            <div className="flex items-center justify-center space-x-2">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
            </div>
              

            <div className="flex flex-col">
              {/* <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label> */}
              <textarea
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
          </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactForm;
