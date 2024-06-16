import AppointementNavBar from "@/components/appointment/appointmentnav";
import { Button } from "@/components/ui/button";
import getschedule from "@/lib/schedule/getschedule";
import ConfirmSchedule from "@/lib/schedule/confirmschedule";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const Content = ({
  fullname,
  gender,
  phonenumber,
  date,
  time,
  status,
  imageUrl,
  onConfirm,
  scheduleId,
}) => {
  return (
    <>
      <div className="flex justify-between mt-8 mx-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img
              src={`http://localhost:5072/${imageUrl}`}
              alt="Patient"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-left font-bold">{fullname}</p>
            <p className="text-left text-[#B5B5C3]">
              {gender === "M" ? "Male" : "Female"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#5B5B3C]">{phonenumber}</p>
        </div>
        <div className="text-[#5B5B3C]">{date}</div>
        <div className="text-[#5B5B3C]">{time}</div>
        <div className="flex flex-col gap-3">
          <div
            className={`flex justify-center items-center rounded-2xl ${
              status === "Waiting"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {status === "Waiting" ? (
              <AlertDialog className="h-8 w-24">
                <AlertDialogTrigger asChild>
                  <Button variant="outline">{status}</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirming Appointment</AlertDialogTitle>
                    <AlertDialogDescription>
                      If you confirm this appointment, the patient will be
                      notified.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onConfirm(scheduleId)}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <Button variant="outline" disabled>
                {status}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Appointement = () => {
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

  const confirmMutation = useMutation(
    (scheduleId) => ConfirmSchedule({ token, userId, scheduleId }),
    {
      onSuccess: () => {
        refetch(); // Refetch the appointments after a successful confirmation
        toast({
          title: "Success!",
          description: "Appointment confirmed successfully.",
        });
      },
      onError: (error) => {
        console.error("Error confirming schedule:", error);
        toast({
          title: "Error!",
          description: "An error occurred while confirming the appointment.",
        });
      },
    }
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleConfirm = (scheduleId) => {
    confirmMutation.mutate(scheduleId);
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
        <div>Patient Name</div>
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
          <Content
            key={schedule.id}
            fullname={schedule.scheduler.fullname}
            imageUrl={schedule.scheduler.imageUrl}
            gender={schedule.scheduler.gender}
            phonenumber={schedule.scheduler.phonenumber}
            date={date}
            time={time}
            status={status}
            onConfirm={handleConfirm}
            scheduleId={schedule.id}
          />
        );
      })}
    </>
  );
};

export default Appointement;
