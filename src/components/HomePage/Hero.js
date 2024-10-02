import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F4.png?alt=media&token=08b3e410-ed1d-4f1b-8fb5-48e8344e2115",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F6.png?alt=media&token=c40cea72-861f-4450-b5bc-090a5546180b",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F2.jpeg?alt=media&token=10b3070c-b2e9-4899-87b2-ef158b3fc0a8",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F3.png?alt=media&token=168d84ae-793c-431b-99d2-12effa53eb4e",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F5.jpg?alt=media&token=a025e6f4-c3b4-4a89-a5f6-4692f4844550",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/updated_ehs_guru%2Fhero.png?alt=media&token=ec24b019-d405-45e1-bb9a-07684e75d5a3",
  "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2F7046461-uhd_4096_1974_30fps%20(1)%20(1).mp4?alt=media&token=e5b5f929-f7eb-46ea-b50a-986752002b26"
];

const Hero = ({ setimageCount, imageCount, data }) => {
  imageCount=6;
  // const [imgUrl, setImgUrl] = useState(imageUrls[0]);
  // const [backgroundStyle, setBackgroundStyle] = useState({});
  const [percent, setPercent] = useState(0);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const preloadImages = (urls) => {
      urls.forEach(url => {
        if (!url.endsWith('.mp4')) {
          const img = new Image();
          img.src = url;
        }
      });
    };
    preloadImages(imageUrls);
  }, []);

  useEffect(() => {
    const updatedPercent = Math.floor((imageCount / 6) * 100);
    setPercent(updatedPercent);
  }, [imageCount]);

  // useEffect(() => {
  //   setImgUrl(imageUrls[imageCount]);
  // }, [imageCount]);

  // useEffect(() => {
  //   if (imageCount !== 6) {
  //     setBackgroundStyle({
  //       backgroundImage: `linear-gradient(176deg, rgba(9,9,9,0.8) 21%, rgba(12,13,13,0.8) 66%), url(${imgUrl})`,
  //       backgroundSize: 'cover',
  //       backgroundPosition: `${80 + mousePosition.x / 50}% ${80 + mousePosition.y / 50}%`,
  //       transition: 'background-image 0.5s ease-in-out'
  //     });
  //   }
  // }, [imgUrl, mousePosition, imageCount]);
 
  // const handleMouseMove = (event) => {
  //   setMousePosition({ x: event.clientX, y: event.clientY });
  // };
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  // onMouseMove={handleMouseMove}
  return (
    <div className="relative w-full min-h-screen hero container1 flex flex-col items-center justify-center pt-48" >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!videoLoaded && (
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2FstaticImg.png?alt=media&token=e8760f4c-b8fc-4438-a68c-f02f918a8fee" 
            alt="staticImg" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <video 
          className={`absolute inset-0 w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} 
          autoPlay 
          loop 
          muted 
          onCanPlay={handleVideoLoad}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/homepageUpdated%2FUntitled.mp4?alt=media&token=4d167be5-cf6f-4210-9131-3a1bdbb60e78" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
      </div>
      <div className="relative z-10 text-center max-w-[800px] text-white">
      <h1
        className="text-6xl font-semibold"
        // style={{
        //   backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/Slim%20Line%20EGSS%20Logo.png?alt=media&token=92a43e10-8aae-43e7-83dc-f75fe8f25924)',
        //   backgroundSize: 'contain', // Adjusts the background size to fit the text
        //   backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        //   backgroundPosition: 'center', // Centers the image in the text
        //   WebkitBackgroundClip: 'text',
        //   WebkitTextFillColor: 'transparent',
        // }}
      >
        EHS GURU SUSTAINABLE SOLUTIONS Pvt. Ltd.
      </h1>
      </div> 
      <div className="relative z-10 flex flex-row gap-x-4 mt-8 h-[70px] text-white items-center justify-center text-lg">
        <div>
          <Link to="/EHS">EHS</Link>
        </div>
        <div className="h-[50px] bg-white w-[2px]"></div>
        <div>
          <Link to="/ESG">ESG & Sustainability</Link>
        </div>
        <div className="h-[50px] bg-white w-[2px]"></div>
        <div>
          <Link to="/FireAndLifeSafety">Fire & Electrical Safety</Link>
        </div>
        <div className="h-[50px] bg-white w-[2px]"></div>
        <div>
          <Link to="/LegalServices">Legal Services</Link>
        </div>
        <div className="h-[50px] bg-white w-[2px]"></div>
        <div>
          <Link to="/ergonomics">Ergonomics</Link>
        </div>
       
        
      </div>
    </div>
  );
};

export default Hero;


//e4e6d49c825a46da974af3093bd1205d