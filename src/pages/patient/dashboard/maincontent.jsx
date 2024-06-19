import React from "react";
import Chatbot from "@/components/landingpage/chatbot";
import MedicalHistory from "@/pages/patient/medicalhistory";
import Appointment from "@/pages/patient/appointments";
// import ProfileInfo from "@/components/profile/profileInfo";
import PatientProfile from "../profile";
import Doctors from "../doctors";

const Card = ({ text }) => {
  return (
    <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
      {text}
    </div>
  );
};
const MainContent = ({ activeLink }) => {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      {activeLink === "dashboard" && (
        <>
          <div className="flex justify-around w-full mb-8">
            {/* <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
              Card 1
            </div> */}
            <Card text="Look up a doctor according to your preferences." />
            <Card text="Meet with your doctor through our online video call." />
            <Card text="Access your medical data." />
          </div>
          <div className="flex justify-around w-full mt-8">
            <Card text="Initiate a conversation with your personal assistant." />
            <Card text="Complete your profile and increase your exposure." />
            <Card text="Obtain your prescription from the pharmacy" />
          </div>
          <div className="flex justify-end">
            <Chatbot />
          </div>
        </>
      )}
      {activeLink === "appointments" && (
        <div>
          <Appointment />
        </div>
      )}
      {activeLink === "profile" && (
        <div>
          <PatientProfile />
        </div>
      )}
      {activeLink === "medicalRecords" && (
        <div>
          <MedicalHistory />
        </div>
      )}
      {activeLink === "doctors" && (
        <div>
          <Doctors />
        </div>
      )}
    </div>
  );
};

export default MainContent;
