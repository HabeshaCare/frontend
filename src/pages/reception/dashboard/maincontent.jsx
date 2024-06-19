import React from "react";
import ReceptionProfile from "../profile";
import SharePatients from "./sharePatients";

const MainContent = ({ activeLink }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {activeLink === "profile" && <ReceptionProfile />}
      {activeLink === "share" && <SharePatients />}
    </div>
  );
};

export default MainContent;
