import React from "react";

const AppointementNavBar = ({ activeTab, handleTabClick }) => {
  return (
    <div className="flex justify-around items-center font-bold h-24 md:h-16 text-white text-base md:text-lg pt-8 md:pt-0 px-4">
      <div
        className={`flex flex-col justify-center bg-white text-[#1F555D] items-center md:w-32 h-full cursor-pointer ${
          activeTab === "Queue"
            ? "  rounded-t-lg border-b-4 border-[#1F555D]"
            : "bg-[#1F555D]" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Queue")}
      >
        <p>Queue</p>
      </div>
      <div
        className={`h-full flex flex-col justify-center items-center md:w-32 bg-white text-[#1F555D] cursor-pointer ${
          activeTab === "Checked"
            ? "rounded-t-lg border-b-4 border-[#1F555D]"
            : "bg-[#1F555D]" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Checked")}
      >
        <p>Checked</p>
      </div>
      <div
        className={`h-full flex flex-col justify-center items-center md:w-32 bg-white text-[#1F555D] cursor-pointer ${
          activeTab === "Waiting"
            ? "rounded-t-lg border-b-4 border-[#1F555D]"
            : "bg-[#1F555D]" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Waiting")}
      >
        <p>Waiting</p>
      </div>
    </div>
  );
};

export default AppointementNavBar;
