import AppointementNavBar from "@/components/appointment/appointmentnav";
import getschedule from "@/lib/schedule/getschedule";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

import PatientContent from "./patientcontent"; // Ensure this import is correct

const PatientAppointments = () => {
  const [activeTab, setActiveTab] = useState("Queue");
  const token = useSelector((state) => state.auth.token); // Get token from Redux state
  const userId = useSelector((state) => state.auth.user.id); // Get userId from Redux state
  const { toast } = useToast();

  const { data, isError, isLoading, refetch } = useQuery(
    "appointments",
    () => getschedule({ token, userId }),
    {
      refetchInterval: 10000, // Refetch every 10 seconds
    }
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        Error fetching schedules.
      </div>
    );
  }
  console.log(data);

  const filteredSchedules = data.data.filter((schedule) => {
    if (activeTab === "Waiting") {
      return !schedule.confirmed;
    } else if (activeTab === "Checked") {
      return schedule.confirmed;
    } else {
      return true; // Queue shows all schedules
    }
  });

  return (
    <>
      <AppointementNavBar
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="flex justify-between mx-6 my-4 text-[#1F555D] text-lg font-bold">
        <div>Doctor Name</div>
        <div className="">Contact</div>
        <div className="">Date</div>
        <div>Time</div>
        <div>Status</div>
      </div>

      {filteredSchedules.map((schedule) => {
        const date = new Date(schedule.from).toLocaleDateString();
        const time = `${new Date(
          schedule.from
        ).toLocaleTimeString()} - ${new Date(
          schedule.to
        ).toLocaleTimeString()}`;
        const status = schedule.confirmed ? "Checked" : "Waiting";
        return (
          <PatientContent
            key={schedule.id}
            doctorName={schedule.doctor.fullname}
            doctorImageUrl={schedule.doctor.imageUrl}
            doctorContact={schedule.doctor.phonenumber}
            date={date}
            time={time}
            status={status}
            meetingUrl={schedule.meetingUrl} // Pass the meeting URL to the PatientContent component
          />
        );
      })}
    </>
  );
};

export default PatientAppointments;
