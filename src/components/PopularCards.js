import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Card = ({ id, imageUrl, title, description }) => {
  const navigate = useNavigate();
  const data = { id, imageUrl, title, description };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  };

  const handleButtonClick = () => {
    navigate('/popular-description', { state: { data } });
  };

  return (
    <div key={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className="w-64 h-90 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="flex justify-center items-center text-lg font-semibold">{title}</h2>
        <p className="flex-wrap flex">{description}</p>
        <button onClick={handleButtonClick} className="mt-2 flex justify-center items-center ml-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Card;
