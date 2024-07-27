import React from "react";
import { useState } from "react";

const generateStars = (count) => {
    return Array.from({ length: count }, (_, index) => '⭐️').join('');
};

const TestimonialCard = ({ description,name,star,post,linkedin }) => {
    // Convert student_engagement to an integer

    return (
        <div
            className="border border-md border-black w-full max-w-[800px] h-[400px] max-h-[500px] bg-white p-8 rounded-lg shadow-lg text-black ml-[10px] mr-[10px] mb-[200px] transition-transform duration-300 flex items-center justify-center flex-col"  
        >
            <h1 className="text-2xl font-semibold mb-4 text-center">{name}</h1>
            <p className="text-base text-center">{post}</p>
            <p className="text-base mb-4 text-center mt-5">{description}</p>
            <p className="text-base mb-4 text-center">{generateStars(star)}</p>
            <a classname = "text-center" href = "${linkedin}"><img className="w-[40px]" src = "https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/linekdin.webp?alt=media&token=f83f1b29-180f-40b0-94a8-96303cc2fdf2"></img></a>
        </div>
    );
};

export default TestimonialCard;