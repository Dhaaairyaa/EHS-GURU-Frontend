import React, { useState, useEffect } from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F4.png?alt=media&token=08b3e410-ed1d-4f1b-8fb5-48e8344e2115",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F6.png?alt=media&token=c40cea72-861f-4450-b5bc-090a5546180b",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F2.jpeg?alt=media&token=10b3070c-b2e9-4899-87b2-ef158b3fc0a8",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F3.png?alt=media&token=168d84ae-793c-431b-99d2-12effa53eb4e",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F5.jpg?alt=media&token=a025e6f4-c3b4-4a89-a5f6-4692f4844550",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/updated_ehs_guru%2Fhero.png?alt=media&token=ec24b019-d405-45e1-bb9a-07684e75d5a3"
];

const Hero = ({setimageCount, imageCount, data }) => {
  const [imgUrl, setImgUrl] = useState(imageUrls[0]);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [percent, setPercent] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const preloadImages = (urls) => {
      urls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    preloadImages(imageUrls);
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const updatedPercent = Math.floor((imageCount / 6) * 100);
    setPercent(updatedPercent);
  }, [imageCount]);

  useEffect(() => {
    setImgUrl(imageUrls[imageCount]);
  }, [imageCount]);
//   linear-gradient(rgba(8, 0, 58, 0.6), rgba(8, 0, 58, 0.7))
  
  useEffect(() => {
    setBackgroundStyle({
      backgroundImage: `linear-gradient(176deg, rgba(9,9,9,0.8) 21%, rgba(12,13,13,0.8) 66%), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: `${80 + mousePosition.x / 50}% ${80 + mousePosition.y / 50}%`,
      transition: 'background-image 0.5s ease-in-out'
    });
  }, [imgUrl, mousePosition]);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="w-full min-h-screen hero container1 flex flex-col items-center justify-center pt-48" style={backgroundStyle} onMouseMove={handleMouseMove}>
      <div className="text-center max-w-[800px] text-white">
        <h1 className="text-6xl font-semibold">{data.heading}</h1>
        <p className="max-w-700 mt-9 mb-12 leading-relaxed">{data.description}</p>
        <Link to="/about" target="_blank" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative">Explore More</span>
        </Link>
        <p className="mt-5">
          {imageCount + 1}/5
        </p>
        {/* <div className="border-2 border-white mt-3 max-w-[300px] mx-auto h-4">
          <div className="h-4 bg-white" style={{ width: `${percent}%` }}></div>
        </div> */}
      </div>
      <div className="flex flex-row gap-x-4 mt-8 h-[70px] text-white items-center justify-center text-lg">
          <div onClick={()=>{setimageCount(0)}}><Link className={`${imageCount===0?'text-[#00ffbe]':'text-white'}`} to = "/EHS">EHS</Link></div>
          <div className="h-[50px] bg-white w-[2px]"></div>
          <div onClick={()=>{setimageCount(1)}}><Link className={`${imageCount===1?'text-[#00ffbe]':'text-white'}`} to = "/ESG">ESG</Link></div>
          <div className="h-[50px] bg-white w-[2px]"></div>
          <div onClick={()=>{setimageCount(2)}}><Link className={`${imageCount===2?'text-[#00ffbe]':'text-white'}`} to = "/EHS">Fire & Life Safety</Link></div>
          <div className="h-[50px] bg-white w-[2px]"></div>
          <div onClick={()=>{setimageCount(3)}}><Link className={`${imageCount===3?'text-[#00ffbe]':'text-white'}`} to = "/EHS">Legal Services</Link></div>
          <div className="h-[50px] bg-white w-[2px]"></div>
          <div onClick={()=>{setimageCount(4)}}><Link className={`${imageCount===4?'text-[#00ffbe]':'text-white'}`} to = "/EHS">Ergonomics</Link></div>
          <div className="h-[50px] bg-white w-[2px]"></div>
      </div>
    </div>
  );
};

export default Hero;
