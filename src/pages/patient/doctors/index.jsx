// Doctors.jsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import doc from "@/public/img/docprofile.webp";
import doc2 from "@/public/img/docprofile2.webp";
import doc3 from "@/public/img/docprofile3.jpg";
import sendappointment from "@/lib/schedule/sendschedule";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import getdoctors from "@/lib/profile/getdoctors";
import searchDoctors from "@/lib/search/doctorsearch"; // Import the new searchDoctors function
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const Card = ({ doctor }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const userId = useSelector((state) => state.auth.user.id);
  const userToken = useSelector((state) => state.auth.token);
  const { toast } = useToast();

  const handleBookAppointmentClick = () => {
    setShowBookingForm(true);
  };

  const {
    mutate: scheduleAppointment,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(sendappointment, {
    onSuccess: (data) => {
      console.log("Appointment scheduled successfully:", data);
      setShowBookingForm(false);
      toast({
        title: "Success!",
        description: "You have Booked Appointment successfully.",
        action: <ToastAction altText="Continue">Continue</ToastAction>,
      });
      // Handle success (e.g., show a success message or close the form)
    },
    onError: (error) => {
      console.error("Error scheduling appointment:", error);
      if (error.response && error.response.status === 409) {
        if (
          error.response.data &&
          error.response.data.errors &&
          error.response.data.errors.includes("Schedule conflict")
        ) {
          toast({
            title: "Error!",
            description:
              "You have a schedule conflict. you have scheduled another appointment at this time. Please select another time.",
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          });
        }
      } else {
        toast({
          title: "Error!",
          description: "An error occurred while scheduling appointment.",
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      }
      // Handle error (e.g., show an error message)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = `${date}T${endTime}:00.000Z`;
    const from = `${date}T${startTime}:00.000Z`;

    scheduleAppointment({
      token: userToken,
      userId,
      to,
      from,
      doctorId: doctor.id,
    });
  };
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.";
  const doctorImageUrl = doctor.imageUrl
    ? `http://localhost:5072/${doctor.imageUrl}`
    : doc;

  return (
    <div
      className="relative flex justify-center items-end m-2 p-2 w-1/5 h-48 rounded-lg bg-cover bg-center overflow-hidden transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${doctorImageUrl})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#1F555D] to-transparent text-white">
        <p className="font-bold text-sm">{doctor.fullname}</p>
        <p className="text-xs">{doctor.specialization}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-inherit border-none ">
              View Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex flex-col md:flex-row bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
              {/* Left Section */}
              <div className="flex flex-col items-center md:w-1/2 bg-[#1F555D] p-6 rounded-lg">
                <img
                  src={doctorImageUrl}
                  alt="Doctor"
                  className="rounded-full w-32 h-32 mb-4"
                />
                <h2 className="text-2xl font-semibold text-white">
                  {doctor.fullname}
                </h2>
                <p className="text-white">{doctor.specialization}</p>
                <p className="text-white">{doctor.location}</p>
                <div className="flex justify-between w-full mb-4">
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold text-white">
                      Experience
                    </p>
                    <p className="text-white">
                      {doctor.yearOfExperience} years
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold mb-4">About</h3>
                <p className="text-gray-600 mb-4">
                  {doctor.description || about}
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Current Health Centers
                </h3>
                <div className="flex mb-4">
                  <img src={doc3} alt="Hospital" className="w-12 h-12 mr-2" />
                  <p>
                    {doctor.associatedHealthCenterId ||
                      "No health center available"}
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Available times for TeleMed service
                </h3>
                {/* Assuming there are available times in the data */}
                {/* Replace this with actual data if available */}
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Mon</span>
                    <span>1:00 pm - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tue</span>
                    <span>2:00 pm - 5:00 pm</span>
                  </div>
                </div>
                <button
                  className="bg-[#1F555D] text-white px-4 py-2 rounded-lg"
                  onClick={handleBookAppointmentClick}
                >
                  Book an appointment
                </button>
                {showBookingForm && (
                  <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Schedule an Appointment
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="start-time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select starting Time
                        </label>
                        <input
                          type="time"
                          id="start-time"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="end-time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select finishing Time
                        </label>
                        <input
                          type="time"
                          id="end-time"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#1F555D] text-white px-4 py-2 rounded-lg"
                      >
                        Schedule
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const token = useSelector((state) => state.auth.token);

  const { mutate: getDoctorsMutate, data, isLoading, isError } = useMutation(
    () => getdoctors({ token }),
    {
      onSuccess: (data) => {
        setDoctors(data.data);
      },
      onError: (error) => {
        console.error("Error fetching doctors:", error);
      },
    }
  );

  const {
    mutate: searchDoctorsMutate,
    data: searchData,
    isLoading: isSearching,
    isError: searchError,
  } = useMutation((searchQuery) => searchDoctors({ token, searchQuery }), {
    onSuccess: (data) => {
      setDoctors(data.data.map((item) => item.doctor)); // Extract doctor objects
      // console.log("Search results:", data);
    },
    onError: (error) => {
      console.error("Error searching doctors:", error);
    },
  });

  useEffect(() => {
    getDoctorsMutate();
  }, [getDoctorsMutate]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    searchDoctorsMutate(searchQuery);
  };

  if (isLoading || isSearching) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (isError || searchError) {
    return (
      <div className="flex justify-center items-center">
        Error fetching doctors.
      </div>
    );
  }

  return (
    <>
      <div className="flex mx-10 sm:mx-32 lg:mx-72 mt-4">
        <Input
          placeholder="Search Your doctor"
          className="h-12"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button
          className="ml-2 bg-[#1F555D] text-white mt-2"
          onClick={handleSearchButtonClick}
        >
          Search
        </Button>
      </div>
      <div className="flex flex-wrap justify-around mt-6">
        {doctors.map((doctor, index) => (
          <Card key={index} doctor={doctor} />
        ))}
      </div>
    </>
  );
};

export default Doctors;
