import React, { useState } from "react";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

const PatientDashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onLinkClick={handleLinkClick} />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-start bg-gray-100 p-4 text-gray-800">
            <div>Welcome, Yeab</div>
          </div>
          <MainContent activeLink={activeLink} />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;