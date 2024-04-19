import React from "react";

const AppointementNavBar = ({ activeTab, handleTabClick }) => {
  // State to keep track of the active tab
  // const [activeTab, setActiveTab] = useState("Medical Record");

  // Function to handle tab click
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  return (
    <div className="flex justify-around items-center font-bold h-24 md:h-16 text-white text-base md:text-lg pt-8 md:pt-0 px-4 bg-[#1F555D]">
      <div
        className={`flex flex-col justify-center items-center md:w-32 h-full cursor-pointer ${
          activeTab === "Queue"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Queue")}
      >
       <p> Queue</p>
      </div>
      <div
        className={`h-full flex flex-col justify-center items-center md:w-32 cursor-pointer ${
          activeTab === "Checked"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Checked")}
      >
        Checked
      </div>
      <div
        className={`h-full flex flex-col justify-center items-center md:w-32 cursor-pointer ${
          activeTab === "Wait List"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Wait List")}
      >
        Wait List
      </div>
    </div>
  );
};

export default AppointementNavBar;
