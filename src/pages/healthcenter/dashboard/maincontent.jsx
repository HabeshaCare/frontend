import React from "react";
import Chatbot from "@/components/landingpage/chatbot";
import VerificationRequest from "./requests";

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
      {activeLink === "requests" && (
        <VerificationRequest />
      )}
      {activeLink === "profile" && (

        <>HealthCenter Profile</>

      )}
      {activeLink === "institutions" && (
        <div>
          Institutions
        </div>
      )}
      {activeLink === "users" && <>Users</>}
    </div>
  );
};

export default MainContent;
