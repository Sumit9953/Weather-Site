import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Favorites from "./Favorites";
import Search from "./SearchComponent";

const API_KEY = "a999b4fa9ef105283bf5f90d98756465";

const MainDashboard = () => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("metric");

  const fetchWeather = async (city) => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const weather = await currentWeatherResponse.json();
      const forecast = await forecastResponse.json();
      setWeatherData(weather);
      setForecastData(forecast);
      localStorage.setItem("lastCity", city);
    } catch (error) {
      console.error("City not found", error);
    }
  };

  useEffect(() => {
    if (city) fetchWeather(city);
  }, [city, unit]);

  return (
    <div className="p-6 bg-sky-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
      <Search onSearch={setCity} />
      <div className="flex w-full justify-between">
        <div className="w-1/2">
          {weatherData && (
            <WeatherDisplay
              weather={weatherData}
              forecast={forecastData}
              unit={unit}
              onUnitChange={setUnit}
            />
          )}
        </div>
        <Favorites onCitySelect={setCity} />
      </div>
    </div>
  );
};

export default MainDashboard;
