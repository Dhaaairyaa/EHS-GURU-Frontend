import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ name, heading, description, url, imageUrl, productLogo, stats }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="mt-12">
      <div className="flex space-x-16">
        <div className="w-1/2 h-[350px]">
          {imageUrl && (
            <img
              className={`rounded-3xl transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-40'}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={imageUrl}
              alt={name}
              onLoad={handleImageLoad}
            />
          )}
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl text-[#175b34]">{name}</h1>
          <p className="text-2xl pt-3">{heading}</p>
          <p className="text-md pt-2">"{description}"</p>
          <Link to={url} className="inline-block text-lg pt-2 transform hover:scale-105 transition-transform duration-200 origin-left">
            Learn More <FontAwesomeIcon className="text-[#175b34] ml-1" icon={faArrowRight} />
          </Link>

          <div className="bg-richblack-5 w-full h-[2px] mt-20"></div>
          <div className="flex pt-5 space-x-5">
            {productLogo && <img src={productLogo} className="w-1/3" alt="Product Logo" />}
            {/* <p className="pt-1">{stats}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
