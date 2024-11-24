import React from 'react';
import { useLocation } from 'react-router-dom';

const TempleInfo = () => {
  const location = useLocation();
  const { image, description, title } = location.state;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-200 to-indigo-200 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-600 mb-6 transition-transform duration-300 ease-in-out">
          {title}
        </h1>

        {/* Image Section */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition-transform duration-500">
          <img src={image} alt={title} className="w-full h-96 object-cover rounded-lg" />
        </div>

        {/* Description Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Description</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Link to Wikipedia */}
        <div className="mt-8 text-center">
          <a
            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg sm:text-xl underline hover:text-blue-700 transition-colors duration-300"
          >
            Read more on Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};

export default TempleInfo;
