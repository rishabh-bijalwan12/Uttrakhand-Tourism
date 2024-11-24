import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const WeatherComponent = () => {
  const location = useLocation();
  const data = location.state?.data || "no found"; 
  console.log(data.title, "ff");
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    const apiKey = 'efb418669d4e89715e91436ff0dfeb61';
    const city = data.title;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.log('error');
    }

    const responseData = await response.json();

    const next7DaysData = responseData.list.slice(0, 7);

    setWeatherData(next7DaysData);
  };

  const show = () => {
    fetchWeatherData();
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Weather for the Next 7 Days</h1>
      <div>
        {weatherData.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString();
          const averageTemp = day.main.temp;

          return (
            <div key={index} className="mb-4 p-4 border rounded bg-white">
              <p className="text-lg font-semibold">Date: {date}</p>
              <p>Average Temperature: {averageTemp.toFixed(2)} °C</p>
              <p>Weather: {day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={show}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Load Weather Data
      </button>
    </div>
  );
};

export default WeatherComponent;
