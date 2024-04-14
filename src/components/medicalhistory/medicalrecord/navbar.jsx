import React from "react";

const MedicalHistoryNavBar = ({ activeTab, handleTabClick }) => {
  // State to keep track of the active tab
  // const [activeTab, setActiveTab] = useState("Medical Record");

  // Function to handle tab click
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  return (
    <div className="flex justify-around items-center font-bold w-full h-24 md:h-16 text-white text-base md:text-lg pt-8 md:pt-0 px-4 bg-[#1F555D]">
      <div
        className={`h-full p-2 md:pt-4 cursor-pointer ${
          activeTab === "Medical Record"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Medical Record")}
      >
        Medical Record
      </div>
      <div
        className={`h-full p-2  md:pt-4 cursor-pointer ${
          activeTab === "Laboratory Test"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Laboratory Test")}
      >
        Laboratory Test
      </div>
      <div
        className={`h-full p-2  md:pt-4 cursor-pointer ${
          activeTab === "Prescribed Medicine"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Prescribed Medicine")}
      >
        Prescribed Medicine
      </div>
      <div
        className={`h-full p-2  md:pt-4 cursor-pointer ${
          activeTab === "Medical Report"
            ? "bg-white text-[#1F555D] rounded-t-lg"
            : "bg-[#1F555D] hover:bg-gray-700" // Add hover effect for inactive tabs
        }`}
        onClick={() => handleTabClick("Medical Report")}
      >
        Medical Report
      </div>
    </div>
  );
};

export default MedicalHistoryNavBar;
