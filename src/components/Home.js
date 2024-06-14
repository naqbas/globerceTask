import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import WeatherBlock from "./WeatherBlock";
import WeeklyWeatherBlock from "./WeeklyWeatherBlock";
import hourWeather1 from "../assets/images/hourWeather1.png";
import hourWeather2 from "../assets/images/hourWeather2.png";
import hourWeather3 from "../assets/images/hourWeather3.png";
import hourWeather4 from "../assets/images/hourWeather4.png";
import hourWeather5 from "../assets/images/hourWeather5.png";
import hourWeather6 from "../assets/images/hourWeather6.png";
import weekWeather1 from "../assets/images/weekWeather1.png";
import weekWeather2 from "../assets/images/weekWeather2.png";
import weekWeather3 from "../assets/images/weekWeather3.png";
import details from "../assets/images/details.png";
import airQuality from "../assets/images/airQuality.png";
import sunMoon from "../assets/images/sM.png";
import coronavirus from "../assets/images/dropDownSmall.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData, selectWeatherData } from "../features/weatherSlice";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Today");

  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);

  useEffect(() => {
    dispatch(fetchWeatherData("almaty"));
  }, [dispatch]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather, wind, sys } = weatherData;

  return (
    <main className="p-5 bg-gradient-to-b from-[#484B5B] to-[#2C2D35] text-white shadow-md">
      <Header
        cityName={`${name}, ${sys.country}`}
        weatherDescription={weather[0].description}
      />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="mt-5">
        <div className="text-center">
          <p className="text-gray-500 text-xs">{new Date().toDateString()}</p>
          <div className="flex justify-around items-center my-2">
            <img
              src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
              alt="current weather"
            />
            <div className="text-center">
              <p className="text-5xl text-gray-400 font-bold">
                {Math.round(main.temp)}°
              </p>
              <p className="text-base">{weather[0].description}</p>
            </div>
          </div>
          <div className="flex justify-around text-xs text-gray-500">
            <p>
              {Math.round(main.temp_max)}°/{Math.round(main.temp_min)}° | Feels
              like{" "}
              <span className="text-white">
                {Math.round(main.feels_like)}°C
              </span>
            </p>
            <p>
              Wind <span className="text-white">{wind.speed} km/h</span>{" "}
              {wind.deg && ` ${wind.deg}°`}
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-5 text-xs text-gray-500">
          <div className="flex items-center w-1/2 text-center mb-2">
            <img src={hourWeather1} alt="Precipitation" className="mr-1" />
            <p>
              Precipitation: <span className="text-white">21%</span>
            </p>
          </div>
          <div className="flex items-center w-1/2 text-center mb-2">
            <img src={hourWeather2} alt="Humidity" className="mr-1" />
            <p>
              Humidity: <span className="text-white">{main.humidity}%</span>
            </p>
          </div>
          <div className="flex items-center w-1/2 text-center mb-2">
            <img src={hourWeather1} alt="Wind" className="mr-1" />
            <p>
              Wind: <span className="text-white">{wind.speed} km/h</span>
            </p>
          </div>
          <div className="flex items-center w-1/2 text-center mb-2">
            <img src={hourWeather2} alt="Sunset" className="mr-1" />
            <p>
              Sunset:{" "}
              <span className="text-white">
                {new Date(sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-around mt-5">
        <WeatherBlock time="01:00" imgSrc={hourWeather1} temperature="29°" />
        <WeatherBlock time="02:00" imgSrc={hourWeather2} temperature="26°" />
        <WeatherBlock time="04:00" imgSrc={hourWeather3} temperature="23°" />
        <WeatherBlock time="05:00" imgSrc={hourWeather4} temperature="28°" />
        <WeatherBlock time="06:00" imgSrc={hourWeather5} temperature="29°" />
        <WeatherBlock time="09:00" imgSrc={hourWeather6} temperature="29°" />
      </section>
      <section className="bg-gray-900 rounded-lg mt-5 p-5">
        <div className="flex justify-end text-xs text-gray-600">
          <p>High</p>
          <p className="ml-10 mr-2">Low</p>
        </div>
        <WeeklyWeatherBlock
          day="Today"
          imgSrc={weekWeather1}
          high="86°"
          low="67°"
        />
        <WeeklyWeatherBlock
          day="Today"
          imgSrc={weekWeather2}
          high="86°"
          low="67°"
        />
        <WeeklyWeatherBlock
          day="Today"
          imgSrc={weekWeather3}
          high="86°"
          low="67°"
        />
        <WeeklyWeatherBlock
          day="Today"
          imgSrc={weekWeather2}
          high="86°"
          low="67°"
        />
        <WeeklyWeatherBlock
          day="Today"
          imgSrc={weekWeather1}
          high="86°"
          low="67°"
        />
        <div className="flex justify-between text-xs mt-2 mb-5 cursor-pointer">
          <p>Show more</p>
          <p>
            <span className="text-teal-400 font-bold">F°</span> / C°
          </p>
        </div>
      </section>
      <section className="bg-gray-900 rounded-lg mt-5 p-5">
        <p className="text-lg font-bold">Details</p>
        <div className="flex justify-between items-center mt-2">
          <img src={details} alt="Details" />
          <div className="flex justify-between w-1/2">
            <div className="text-gray-600">
              <p>Feels like</p>
              <p>Humidity</p>
              <p>Visibility</p>
              <p>UV Index</p>
              <p>Dew point</p>
            </div>
            <div className="text-white">
              <p>76°</p>
              <p>63%</p>
              <p>10 mi</p>
              <p>0 of 10</p>
              <p>68°</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 rounded-lg mt-5 p-5">
        <p className="text-lg font-bold">Air quality</p>
        <div className="flex justify-between items-center mt-2">
          <img src={airQuality} alt="Air quality" />
          <div className="flex justify-between w-1/2">
            <div className="text-gray-600">
              <p>PM10</p>
              <p>PM2.5</p>
              <p>SO₂</p>
              <p>NO₂</p>
              <p>CO</p>
              <p>O₃</p>
            </div>
            <div className="text-white">
              <p>23</p>
              <p>11</p>
              <p>4</p>
              <p>9</p>
              <p>0.4</p>
              <p>9</p>
            </div>
          </div>
        </div>
        <p className="text-sm mt-2">Main pollutant: PM10</p>
      </section>
      <section className="flex justify-around mt-5">
        <img src={sunMoon} alt="Sun & Moon" className="cursor-pointer" />
        <img src={coronavirus} alt="Coronavirus" className="cursor-pointer" />
      </section>
    </main>
  );
};

export default Home;
