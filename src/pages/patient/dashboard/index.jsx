import React, { useState } from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import MainContent from './maincontent';

const PatientDashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col h-screen">
      <div><NavBar /></div>
      <div className="flex flex-1">
        <Sidebar onLinkClick={handleLinkClick} />
        <div className="flex-1">
          <div className="flex justify-start text-lg p-4 text-gray-800">
            <div>Welcome, Yeab</div>
          </div>
          <MainContent activeLink={activeLink} />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
