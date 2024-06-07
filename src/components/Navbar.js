import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);
    
    return (
        <div>
            <nav className={`container1 ${sticky ? 'bg-white' : ''} flex items-center justify-between py-1 px-5 fixed top-0 w-full z-10`}>
                <Link to="/" >
                <img
        className="logo w-28"
        src={sticky
          ? "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/ehs_guru_logo.webp?alt=media&token=be8b39a6-d443-4f48-89a9-274d59823929"
          : "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/black%20background.png?alt=media&token=8ce94e41-3be9-4eb5-8407-a910237426fb"}
        alt="logo"
      />
                </Link>
                <ul className= {`flex items-center  ${sticky ? 'text-black' : 'text-white'} `}>
                    <li className="inline-block list-none m-3 text-lg">Home</li>
                    <li className="inline-block list-none m-3 text-lg">About Us</li>
                    <li className="inline-block list-none m-3 text-lg">Testimonials</li>
                    <li className="inline-block list-none m-3 text-lg">Clientele</li>
                    <li className="inline-block list-none m-3 text-lg">Blogs</li>
                    <li className="inline-block list-none m-3 text-lg">Careers</li>
                    <li className= {`inline-block m-2 px-3 py-1 text-md rounded-full  ${sticky ? 'bg-[#0a2b14] text-white': 'bg-white text-black'}`}>
                    <Link to="/contact" className="">
                    Contact Us
                    </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
