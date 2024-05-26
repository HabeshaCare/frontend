import React, { useState } from "react";

const Sidebar = ({ onLinkClick }) => {
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    onLinkClick(link);
  };

  const linkClasses = (link) =>
    `mb-2 text-center w-full h-10 ${
      selectedLink === link ? "bg-[#809ea3]" : "bg-none"
    }`;

  return (
    <div className="bg-[#1F555D] h-screen w-64 text-white justify-center items-center">
      <div className="flex flex-col justify-center items-center py-8 h-full">
        <button
          onClick={() => handleLinkClick("dashboard")}
          className={linkClasses("dashboard")}
        >
          Dashboard
        </button>
        <button
          onClick={() => handleLinkClick("doctors")}
          className={linkClasses("doctors")}
        >
          Doctors
        </button>
        <button
          onClick={() => handleLinkClick("appointments")}
          className={linkClasses("appointments")}
        >
          Appointments
        </button>
        <button
          onClick={() => handleLinkClick("medicalRecords")}
          className={linkClasses("medicalRecords")}
        >
          Medical Records
        </button>
      </div>
    </div>
  );
};

export default Sidebar;