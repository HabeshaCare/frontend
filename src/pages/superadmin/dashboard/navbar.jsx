import React from "react";
import notification from "@/public/icons/notification.svg";
import Profile from "@/components/profile/navprofile";
import logo from "@/public/icons/logo.svg";
const NavBar = () => {
  
  return (
    <div className="flex justify-between h-16 bg-[#1F555D] text-white items-center px-4">
      <div className="mt-12 ml-8">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <img src={notification} alt="" />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
