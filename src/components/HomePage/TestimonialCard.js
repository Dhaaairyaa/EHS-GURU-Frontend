import React from 'react';
import './TestimonialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TestimonialCard = ({ imgUrl, description, name, Post, Linkedin }) => {
  return (
    <div className="testimonial-card">
      <div className="container">
        <div className="card">
          <div className="front">
            <img src={imgUrl} alt={`${name}'s picture`} className="card-img" />
          </div>
          <div className="back flex flex-col text-center p-7">
            <h1 className="text-2xl">{name}</h1>
            <p className="my-2">{description}</p>
            <p className="text-lg font-semibold">{Post}</p>
            <a className="text-center text-4xl" href={Linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="mt-2 hover:scale-110 transition transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
