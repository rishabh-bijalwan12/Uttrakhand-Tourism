import React, { useState, useEffect } from 'react';
import Card from './PopularCards';
import rishikesh from '../Image/rishikesh.webp';
import auli from '../Image/auli.webp';
import HARIDWAR from '../Image/Haridwar_pzvxkx.webp';
import MUSSOORIE from '../Image/Mussoorie-City.jpg';
import THERI from '../Image/Tehri-Dam.webp';
import nanital from '../Image/nanital.jpg';

const CardSlider = () => {
  const cardData = [
    { id: 1, imageUrl: rishikesh, title: 'RISHIKESH', description: 'Rishikesh, the Yoga Capital, sits on the Ganges banks, blending spirituality with adventure, featuring ashrams, temples, and scenic Laxman Jhula.' },
    { id: 2, imageUrl: auli, title: 'AULI', description: 'Auli, Uttarakhands snowy haven, beckons skiing enthusiasts with its pristine slopes, providing breathtaking views of the majestic Himalayas.' },
    { id: 3, imageUrl: HARIDWAR, title: 'HARIDWAR', description: 'Haridwar, a sacred city on the Ganges, entices pilgrims with its Ganga Aarti at Har Ki Pauri and a rich cultural tapestry.' },
    { id: 4, imageUrl: MUSSOORIE, title: 'MUSSOORIE', description: 'Mussoorie, the "Queen of Hills," captivates with colonial charm, lush landscapes, and popular spots like the Mall Road and Kempty Falls.' },
    { id: 5, imageUrl: THERI, title: 'THERI', description: 'Tehri, in Uttarakhand, is renowned for the Tehri Dam and Reservoir, offering scenic beauty and adventure.' },
    { id: 6, imageUrl: nanital, title: 'NANITAL', description: 'Nainital, around the scenic Naini Lake, offers a serene retreat with boating, the Naina Devi Temple, and panoramic views from Snow View Point.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track small screens

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 430); // Small screens are less than 430px
      if (width < 430) {
        setCardsToShow(1); // Show 1 card on very small screens
      } else if (width < 780) {
        setCardsToShow(3); // Show 3 cards on small screens
      } else if (width === 1024) {
        setCardsToShow(4); // Show 4 cards on medium screens
      } else {
        setCardsToShow(5); // Show 5 cards on large screens
      }
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardData.length - cardsToShow)
    );
  };

  return (
    <div
      style={{
        marginTop: !isSmallScreen ? '400px' : '0', // Apply marginTop only on larger screens
      }}
      className="relative w-full flex flex-col items-center justify-center bg-gray-50 border border-gray-200 p-8"
    >
      <div className="w-full max-w-screen-xl">
        <h1 className="text-black text-2xl md:text-xl font-bold text-center mb-5">
          Popular Places To Visit In Uttarakhand
        </h1>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${(100 * cardData.length) / cardsToShow}%`,
              transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <Card
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              className={`text-white bg-gray-800 p-2 rounded-full focus:outline-none hover:bg-gray-600 transition duration-300 ${
                currentIndex === 0 && 'opacity-50 cursor-not-allowed'
              }`}
              onClick={slideLeft}
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button
              className={`text-white bg-gray-800 p-2 rounded-full focus:outline-none hover:bg-gray-600 transition duration-300 ${
                currentIndex >= cardData.length - cardsToShow &&
                'opacity-50 cursor-not-allowed'
              }`}
              onClick={slideRight}
              disabled={currentIndex >= cardData.length - cardsToShow}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
