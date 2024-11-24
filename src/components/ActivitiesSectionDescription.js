import React from 'react';
import { useLocation } from 'react-router-dom';

function ActivitiesSectionDescription() {
  const location = useLocation();
  const data1 = location.state?.data1 || {};

  const getWikipediaUrl = (title) => {
    return `https://en.wikipedia.org/wiki/${title}`;
  };

  const getGoogleMapsUrl = (title) => {
    return `https://www.google.com/maps?q=${title}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-blue-200 to-indigo-200 py-10">
      {/* Image Section */}
      <div className="w-full max-w-2xl h-auto relative mb-8">
        <img
          src={data1.imageUrl}
          alt={data1.title}
          className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-16 rounded-xl shadow-2xl text-gray-800 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-6 text-center">{data1.title}</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700 text-center">{data1.description}</p>

        <div className="space-y-6">
          <div>
            <p className="text-md sm:text-lg">Learn more about {data1.title} on Wikipedia</p>
            <a
              href={getWikipediaUrl(data1.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700 underline text-md sm:text-lg transition-colors duration-300"
            >
              Read on Wikipedia
            </a>
          </div>

          <div>
            <p className="text-md sm:text-lg">Discover {data1.title} place on Google Maps and explore its scenic beauty and attractions.</p>
            <a
              href={getGoogleMapsUrl(data1.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700 underline text-md sm:text-lg transition-colors duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesSectionDescription;
