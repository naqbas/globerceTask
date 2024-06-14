import React from "react";
import dropDown from "../assets/images/dropDown.png";

const WeeklyWeatherBlock = ({ day, imgSrc, high, low }) => {
  return (
    <div className="flex justify-between items-center my-2 p-2 text-sm rounded-lg bg-gray-900">
      <img src={dropDown} alt="dropdown" />
      <p>{day}</p>
      <img src={imgSrc} alt={`${day} weather`} />
      <p>{high}</p>
      <p>{low}</p>
    </div>
  );
};

export default WeeklyWeatherBlock;
