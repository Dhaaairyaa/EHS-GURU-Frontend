import React from 'react';
import { TestimonialsData } from "../../data/TestimonialsData";
import TestimonialCard from './TestimonialCard';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="pt-10">
      <h1 className="text-5xl text-center">Real Stories, Real Results</h1>
      <div className="testimonials ">
        <div className="testimonial-slide image-container flex space-x-14">
          {TestimonialsData.map((item, index) => (
            <div key={index} className={`testimonial-card ${index % 2 === 0 ? 'mt-20' : ''}`}>
              <TestimonialCard 
                imgUrl={item.imgUrl} 
                description={item.description} 
                name={item.name} 
                Post={item.Post} 
                Linkedin={item.Linkedin} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
