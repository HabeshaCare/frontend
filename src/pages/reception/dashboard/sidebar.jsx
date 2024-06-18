import React, { useState } from "react";

const Sidebar = ({ onLinkClick }) => {
  const [selectedLink, setSelectedLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    onLinkClick(link);
  };

  const linkClasses = (link) =>
    `mb-2 text-left w-full px-6 h-10 ${
      selectedLink === link ? "bg-[#809ea3]" : "bg-none"
    }`;

  return (
    <div className="bg-[#1F555D] h-screen w-64 text-white flex justify-center items-">
      <div className="flex flex-col items-center py-8 h-full mt-16 mr-8">
        <button
          onClick={() => handleLinkClick("profile")}
          className={linkClasses("profile")}
        >
          Profile
        </button>
        <button
          onClick={() => handleLinkClick("share")}
          className={linkClasses("share")}
        >
          Share Patients
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
