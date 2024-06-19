import React from "react";
import Chatbot from "@/components/landingpage/chatbot";
import MedicalHistory from "@/pages/patient/medicalhistory";
import Appointment from "@/pages/doctor/appointments";
// import ProfileInfo from "@/components/profile/profileInfo";
import PatientProfile from "../profile";
import Patient from "../patients";

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
      {activeLink === "dashboard" && (
        <>
          <div className="flex justify-around w-full mb-8">
            {/* <div className="flex justify-center items-center m-2 p-4 text-white w-1/3 h-36 rounded-lg bg-gradient-to-b from-[#095FAF] to-[#02C27D]">
              Card 1
            </div> */}
            <Card text="Complete your profile to elevate your view." />
            <Card text="Meet with your patient through our online video call." />
            <Card text="Access patient medical data." />
          </div>
          <div className="flex justify-around w-full mt-8">
            <Card text="Document patient health status" />
            <Card text="Place an order for laboratory tests." />
            <Card text="Add the prescription to the patient's record." />
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
      {activeLink === "profile" && <PatientProfile />}

      {activeLink === "petient" && <Patient />}
    </div>
  );
};

export default MainContent;
