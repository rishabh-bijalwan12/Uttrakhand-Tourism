import React, { useState } from 'react';
import ActivityCard from './ActivitiesCards';
import { useNavigate, useLocation } from 'react-router-dom';

// Import Images
import bunjyjumping from '../Image/rishikesh-bungee-jumping-thumbnail-01.jpg';
import whiterafting from '../Image/white water rafting.jpg';
import flyingfox from '../Image/Flying Fox.jpg';
import paragliding from '../Image/Paragliding.jpg';
import Kayaking from '../Image/Kayaking.jpg';
import Trekking from '../Image/Trekking-Camping.jpg';
import Yamunotri from '../Image/Yamunotri-Temple.jpg';
import rudranath from '../Image/rudranath temple.jpg';
import kedaranth from '../Image/kedaranth.jpg';
import badrinath from '../Image/badrinath.avif';
import Gangotri from '../Image/rishikesh.webp';
import UttarakhandMap from '../Image/Uttarakhand_ About Uttarakhand.jpeg';

function Activities() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(6);
  const location = useLocation();

  const Templedata = [
    { image: kedaranth, title: 'Kedarnath Temple', discription: 'Kedarnath Temple, nestled in the Garhwal Himalayas, is a revered Hindu shrine dedicated to Lord Shiva, drawing pilgrims seeking spiritual solace amid stunning natural landscapes.', color: 'blue' },
    { image: badrinath, title: 'Badrinath Temple', discription: 'Badrinath Temple, located in the town of Badrinath, stands as a significant pilgrimage site devoted to Lord Vishnu, offering devotees a sacred retreat amidst the scenic beauty of Uttarakhand.', color: 'blue' },
    { image: Gangotri, title: 'Gangotri Temple', discription: 'Gangotri, part of the Chota Char Dham circuit, is a sacred temple dedicated to the goddess Ganga, situated in the serene landscapes of Uttarakhand.', color: 'blue' },
    { image: Yamunotri, title: 'Yamunotri Temple', discription: 'Yamunotri, nestled in the picturesque Garhwal Himalayas, is a revered shrine dedicated to Goddess Yamuna, offering devotees a sacred retreat amidst the serene beauty of Uttarakhand.', color: 'blue' },
    { image: rudranath, title: 'Rudranath Temple', discription: 'Rudranath Temple, a part of the Panch Kedar, holds deep spiritual significance for devotees of Lord Shiva, situated in the breathtaking Rudraprayag district, providing a serene sanctuary for worship and introspection.', color: 'blue' },
  ];

  const ActivityData = [
    { id: '1', image: bunjyjumping, title: 'Bungy Jumping', discription: 'Take a leap into the abyss, feel the rush of free fall, and experience the ultimate adrenaline spike with the exhilarating adventure of bungy jumping.' },
    { id: '2', image: whiterafting, title: 'White Water Rafting', discription: 'Navigate turbulent rapids, conquer the rivers twists and turns, and immerse yourself in the heart-pounding thrill of white water rafting.' },
    { id: '3', image: flyingfox, title: 'Flying Fox', discription: 'Soar through the air suspended on a zip line, feeling the wind rush past as you glide effortlessly through breathtaking landscapes on an adrenaline-pumping flying fox ride.' },
    { id: '4', image: paragliding, title: 'Paragliding', discription: 'Harness the power of the wind, glide above picturesque landscapes, and experience the freedom of flight with the awe-inspiring adventure of paragliding.' },
    { id: '5', image: Kayaking, title: 'Kayaking', discription: 'Paddle through challenging waters, navigate swirling currents, and connect with the thrill of adventure as you explore nature\'s wonders through the dynamic experience of kayaking.' },
    { id: '6', image: Trekking, title: 'Trekking-Camping', discription: 'Traverse diverse terrains, breathe in the fresh mountain air, and camp under the stars for a perfect blend of adventure and tranquility in the immersive experience of trekking and camping.' },
  ];

  const display = () => {
    navigate('/ReadMore-Activities', { state: { ActivityData } });
  };

  const Temple = (index, image, description, title) => {
    navigate('/Temple-Info', { state: { image, description, title } });
  };

  const data = ActivityData.slice(0, index);

  return (
    <div className={location.pathname === '/popular-description' ? 'hidden' : 'flex flex-col sm:flex-row'}>
      <div className=''>
        {/* Interactive Map Section */}
        <div className="bg-gray-20 relative w-full p-6">
          <h1 className="text-4xl font-bold text-center mb-6">Explore Uttarakhand Map</h1>
          <div className='ml-auto mr-auto w-2/3'>
            <img
              src={UttarakhandMap}
              alt="Uttarakhand Map"
              className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-4/5 xl:w-3/4 h-auto mx-auto" // Adjusted width for large and extra large screens
              useMap="#UttarakhandMap"
              />
              </div>
        </div>

        {/* Activities Section */}
        <div className="bg-gray-200 p-6">
          <h1 className="text-4xl font-bold text-center mb-6">Popular Activities To Do in Uttarakhand</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((activity) => (
              <ActivityCard
                key={activity.id}
                imageUrl={activity.image}
                title={activity.title}
                description={activity.discription}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Temple Section */}
      <div className="p-2">
        <h1 className="text-4xl font-bold text-center mb-6">Popular Temples in Uttarakhand</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
          {Templedata.map((temple, index) => (
            <div
              key={index}
              onClick={() => Temple(index, temple.image, temple.discription, temple.title)}
              className="cursor-pointer text-center hover:bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >   
              <img
                src={temple.image}
                alt={temple.title}
                className="w-full h-36 object-cover mb-4 rounded-lg mx-auto" // Increased height
              />
              <h2 className="text-xl font-semibold text-blue-500">{temple.title}</h2>
              <p className="text-gray-600 mt-2">{temple.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;
