import React, { useState } from 'react';

const Global = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
    <div 
      className="bg-white flex items-center justify-center pt-20 relative" 
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col space-y-5">
        <h1 className="text-5xl text-center">Our Global Presence</h1>
        <div 
          className="relative"
          style={{
            transform: `translate(${cursorPosition.x * 0.005}px, ${cursorPosition.y * 0.005}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            className="w-[800px]" 
            src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/HomePage%2FUSA.png?alt=media&token=6fb29c38-0fbf-4648-9af2-f1f0277efa72" 
            alt="map" 
          />
        </div>
      </div>
    </div>
  );
};

export default Global;
