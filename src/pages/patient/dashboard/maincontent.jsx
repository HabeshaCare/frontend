import React from "react";
import Chatbot from "@/components/dashboard/chatbot";
const MainContent = ({ activeLink }) => {
  return (
    <div className="flex flex-col flex-1 p-8">
      {activeLink === "dashboard" && (
        <>
          <div className="flex justify-around w-full mb-8">
            <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
              Card 1
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b from-[#095FAF] to-[#02C27D] m-2 p-4 text-white w-1/3 h-36 rounded-lg">
              Card 2
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b from-[#095FAF] to-[#02C27D] m-2 p-4 text-white w-1/3 h-36 rounded-lg">
              Card 3
            </div>
          </div>
          <div className="flex justify-around w-full mt-8">
            <div className="flex justify-center items-center bg-gradient-to-b from-[#095FAF] to-[#02C27D] m-2 p-4 text-white w-1/3 h-36 rounded-lg">
              Card 4
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b from-[#095FAF] to-[#02C27D] m-2 p-4 text-white w-1/3 h-36 rounded-lg">
              Card 5
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b from-[#095FAF] to-[#02C27D] m-2 p-4 text-white w-1/3 h-36 rounded-lg">
              Card 6
            </div>
          </div>
          <div className="flex justify-end">
            <Chatbot />
          </div>
        </>
      )}
      {activeLink === "appointments" && <div>Appointments Page</div>}
      {activeLink === "medicalRecords" && <div>Medical Records Page</div>}
      {activeLink === "doctors" && <div>Doctors Page</div>}
    </div>
  );
};

export default MainContent;
