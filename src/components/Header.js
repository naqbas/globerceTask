import React from "react";
import menuButton from "../assets/images/menuButton.png";
import menuOption from "../assets/images/menuOption.png";

const Header = ({ cityName, weatherDescription }) => {
  return (
    <header className="flex justify-between items-center">
      <img src={menuButton} alt="menuButton" />
      <div>
        <p className="text-white text-base font-normal">{cityName}</p>
        <p className="text-xs text-gray-500">{weatherDescription}</p>
      </div>
      <img src={menuOption} alt="optionButton" />
    </header>
  );
};

export default Header;
