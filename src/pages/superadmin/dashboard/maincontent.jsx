import React from "react";
import VerificationRequest from "./requests";
import AssociatedUsers from "./Users";
import AssociatedInstitutions from "./Institutions";
import HealthCenterProfile from "../profile";

const Card = ({ text }) => {
  return (
    <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
      {text}
    </div>
  );
};
const MainContent = ({ activeLink }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {activeLink === "profile" && <HealthCenterProfile />}
      {activeLink === "requests" && <VerificationRequest />}
      {activeLink === "institutions" && (
        <div>
          <AssociatedInstitutions />
        </div>
      )}
      {activeLink === "users" && <AssociatedUsers />}
    </div>
  );
};

export default MainContent;
