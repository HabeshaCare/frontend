import React from "react";

const Sidebar = ({ onLinkClick }) => {
  return (
    <div className="bg-[#1F555D] h-screen w-64 text-white justify-center items-center">
      <div className="flex flex-col justify-center items-center py-8 h-full">
        <button
          onClick={() => onLinkClick("dashboard")}
          className="mb-2 text-center bg-[#809ea3] w-full h-10"
        >
          Dashboard
        </button>
        <button
          onClick={() => onLinkClick("doctors")}
          className="mb-2 text-center bg-[#809ea3] w-full  h-10"
        >
          Doctors
        </button>
        <button
          onClick={() => onLinkClick("appointments")}
          className="mb-2 text-center bg-[#809ea3] w-full  h-10"
        >
          Appointments
        </button>
        <button
          onClick={() => onLinkClick("medicalRecords")}
          className="mb-2 text-center bg-[#809ea3] w-full  h-10"
        >
          Medical Records
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
