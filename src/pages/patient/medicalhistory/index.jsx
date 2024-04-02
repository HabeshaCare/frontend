import React, { useState } from "react";

const MedicalHistory = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Medical Record");

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="flex justify-around items-center font-bold w-full h-14 text-white text-lg bg-[#1F555D]">
        <div
          className={`h-full p-4 cursor-pointer ${
            activeTab === "Medical Record"
              ? "bg-white text-[#1F555D]"
              : "bg-[#1F555D]"
          }`}
          onClick={() => handleTabClick("Medical Record")}
        >
          Medical Record
        </div>
        <div
          className={`h-full p-4 cursor-pointer ${
            activeTab === "Laboratory Test"
              ? "bg-white text-[#1F555D]"
              : "bg-[#1F555D]"
          }`}
          onClick={() => handleTabClick("Laboratory Test")}
        >
          Laboratory Test
        </div>
        <div
          className={`h-full p-4 cursor-pointer ${
            activeTab === "Prescribed Medicine"
              ? "bg-white text-[#1F555D]"
              : "bg-[#1F555D]"
          }`}
          onClick={() => handleTabClick("Prescribed Medicine")}
        >
          Prescribed Medicine
        </div>
        <div
          className={`h-full p-4 cursor-pointer ${
            activeTab === "Medical Report"
              ? "bg-white text-[#1F555D]"
              : "bg-[#1F555D]"
          }`}
          onClick={() => handleTabClick("Medical Report")}
        >
          Medical Report
        </div>
      </div>
    </>
  );
};

export default MedicalHistory;
