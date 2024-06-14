import React from "react";

const WeatherBlock = ({ time, imgSrc, temperature }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-1 text-center rounded-lg">
      <p className="text-xs">{time}</p>
      <img src={imgSrc} alt={`${time} weather`} className="my-1" />
      <p className="text-lg">{temperature}</p>
    </div>
  );
};

export default WeatherBlock;
