import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityCard = ({ id, title, description, imageUrl }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const cardStyle = {
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
    };

    const ActivitiesSectionDescription = () => {
        navigate('/Activities-description', { state: { data1: { id, title, description, imageUrl } } });
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={cardStyle}
            className="w-full mb-6 bg-white p-6 rounded-md shadow-md cursor-pointer transition-transform"
        >
            <img src={imageUrl} alt={title} className="w-full h-36 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <button onClick={ActivitiesSectionDescription} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Learn More
            </button>
        </div>
    );
};

export default ActivityCard;
