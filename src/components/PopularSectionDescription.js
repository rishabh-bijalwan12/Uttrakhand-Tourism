import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PopularSectionDescription() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data || {};

  // Disable scrollbar on component mount
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = ''; // Re-enable scrolling on component unmount
    };
  }, []);

  const getWikipediaUrl = (title) => {
    return `https://en.wikipedia.org/wiki/${title}`;
  };

  const getGoogleMapsUrl = (title) => {
    return `https://www.google.com/maps?q=${title}`;
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 via-blue-200 to-indigo-200 min-h-screen py-16">
      <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-xl shadow-2xl p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-2/5 h-64 md:h-96 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start w-full lg:w-3/5 space-y-6">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-4 text-center lg:text-left transition-transform duration-500">{data.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 transition-all duration-300 hover:text-gray-800">{data.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-indigo-500">Want to Read More About {data.title}?</h3>
              <a
                className="text-indigo-500 underline mt-2 hover:text-indigo-700 transition-colors"
                href={getWikipediaUrl(data.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-500">Want to get the location of {data.title} on Map?</h3>
              <a
                className="text-indigo-500 underline mt-2 hover:text-indigo-700 transition-colors"
                href={getGoogleMapsUrl(data.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularSectionDescription;
