import React from 'react';

const WeatherDisplay = ({ weather, forecast, unit, onUnitChange }) => {
  const toggleUnit = () => onUnitChange(unit === 'metric' ? 'imperial' : 'metric');

  console.log("forecast" , forecast

  );
  

  return (
    <div className="bg-white shadow-md shadow-gray-400 p-6 rounded-lg mb-6  mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">{weather.name}</h2>
      
      {/* Display Current Weather */}
      <div className="text-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather icon"
          className="mx-auto"
        />
        <p className="text-xl">
          Temperature: {weather.main.temp} °{unit === 'metric' ? 'C' : 'F'}
        </p>
        <p className="text-gray-600 mb-4">{weather.weather[0].description}</p>
        <button
          onClick={toggleUnit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
        >
          Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>

      {/* Display 5-Day Forecast */}
      <h3 className="text-lg font-semibold mt-6 mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-3 gap-2">
        {forecast.list.slice(0, 5).map((day, index) => (
          <div key={index} className="text-center bg-gray-100 p-4 rounded">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto"
            />
            <p className="font-semibold">{day.main.temp} °{unit === 'metric' ? 'C' : 'F'}</p>
            <p className="text-gray-500">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
