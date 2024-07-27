import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const phoneNumber = '+91-8123552278';
    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
      };
      

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="z-20 absolute w-full">
            <nav className={`container1 ${sticky ? 'bg-white border-b border-[#cdd1cf]' : ''} flex items-center justify-between py-1 px-5 fixed top-0 w-full z-10`}>
                <Link to="/">
                    <img
                        className="logo w-28"
                        src={sticky
                            ? "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/ehs_guru_logo.webp?alt=media&token=be8b39a6-d443-4f48-89a9-274d59823929"
                            : "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/black%20background.png?alt=media&token=8ce94e41-3be9-4eb5-8407-a910237426fb"}
                        alt="logo"
                    />
                </Link>
                <div className="flex items-center">
                    <ul className={`flex items-center ${sticky ? 'text-black' : 'text-white'} `}>
                        <Link to="/"><li className="inline-block list-none m-3 text-lg">Home</li></Link>
                        <Link to="/aboutUs"><li className="inline-block list-none m-3 text-lg">About Us</li></Link>
                        <Link to="/service"><li className="inline-block list-none m-3 text-lg">Services</li></Link>
                        <Link to="/clientele"><li className="inline-block list-none m-3 text-lg">Clientele</li></Link>
                        <Link to="/blogs"><li className="inline-block list-none m-3 text-lg">Blogs</li></Link>
                        <Link to="/careers"><li className="inline-block list-none m-3 text-lg">Careers</li></Link>
                        <li className={`inline-block m-2 px-3 py-1 text-md rounded-full ${sticky ? 'bg-[#175b34] text-white' : 'bg-white text-black'}`}>
                            <Link to="/contactUs" className="">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div>  
                    <p className={`text-lg ${sticky ? 'text-black' : 'text-white'}`}>
                        <span onClick={handlePhoneClick} className="cursor-pointer">
                            {phoneNumber}
                        </span>
                    </p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
