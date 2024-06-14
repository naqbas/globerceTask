import React from "react";

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["Today", "Forecast", "Precipitation", "Radar Sun & Moon"];
  return (
    <nav className="flex justify-between items-center mt-2 pb-1 border-b border-gray-500">
      {tabs.map((tab) => (
        <p
          key={tab}
          className={`text-sm cursor-pointer ${
            activeTab === tab ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </p>
      ))}
    </nav>
  );
};

export default Navigation;
