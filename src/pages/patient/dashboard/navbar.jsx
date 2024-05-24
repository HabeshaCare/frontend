import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between h-16 bg-[#1F555D] text-white items-center px-4">
      <div>Logo</div>
      <div className="flex items-center">
        <div className="mr-4">Notification</div>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default NavBar;
