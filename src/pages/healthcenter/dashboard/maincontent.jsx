import React from "react";
import Chatbot from "@/components/landingpage/chatbot";

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
        <>
          <div className="flex justify-around w-full mb-8">
            {/* <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
              Card 1
            </div> */}
            <Card text="Card 1" />
            <Card text="Card 2" />
            <Card text="Card 3" />
          </div>
          <div className="flex justify-around w-full mt-8">
            <Card text="Card 4" />
            <Card text="Card 5" />
            <Card text="Card 6" />
          </div>
          <div className="flex justify-end">
            <Chatbot />
          </div>
        </>
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
