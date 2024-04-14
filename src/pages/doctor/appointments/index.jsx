import AppointementNavBar from "@/components/appointment/appointmentnav";
import back from "@/public/icons/back.svg";
import { useState } from "react";

const Content = () => {
  return (
    <>
      <div className="flex justify-around mt-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">David chandler</p>
            <p className="text-left text-[#B5B5C3]">Male, 32</p>
          </div>
        </div>
        <div>
          <p className="text-[#5B5B3C]">+251982314216</p>
        </div>
        <div className="text-[#5B5B3C]">05:20 PM</div>
        <div className="border border-solid flex flex-col items-center h-8 w-24 rounded-2xl bg-red-100 text-red-600">
          <p>Waiting</p>
        </div>
        <div>
          <p className="text-center text-lg font-bold text-[#1F555D]">
            Hospital
          </p>
          <p className="text-[#B5B5C3]">Amin General Hospital</p>
        </div>
      </div>
    </>
  );
};

const Appointement = () => {
  const [activeTab, setActiveTab] = useState("Queue");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="flex justify-between items-center h-16 px-4">
        <div className="ml-2 cursor-pointer">
          <img src={back} alt="back icon" />
        </div>
        <div className="text-xl font-bold font-serif">Appointment</div>
        <div>calander</div>
      </div>
      <AppointementNavBar
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold">
        <div>Patient Name</div>
        <div className="pl-24">Contact</div>
        <div>Appointment</div>
        <div>Status</div>
        <div>Method of treatment</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
};

export default Appointement;
