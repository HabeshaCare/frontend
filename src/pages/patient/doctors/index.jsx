import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import doc from "@/public/img/docprofile.webp";
import doc2 from "@/public/img/docprofile2.webp";
import doc3 from "@/public/img/docprofile3.jpg";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useMutation } from "react-query";
import getdoctors from "@/lib/profile/getdoctors";
import { useSelector } from "react-redux";

const Card = ({ doctor }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookAppointmentClick = () => {
    setShowBookingForm(true);
  };
  return (
    <div
      className="relative flex justify-center items-end m-2 p-2 w-1/5 h-48 rounded-lg bg-cover bg-center overflow-hidden transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${doctor.profilePicture})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#1F555D] to-transparent text-white">
        <p className="font-bold text-sm">{doctor.name}</p>
        <p className="text-xs">{doctor.speciality}</p>
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
                  src={doctor.profilePicture}
                  alt="Doctor"
                  className="rounded-full w-32 h-32 mb-4"
                />
                <h2 className="text-2xl font-semibold text-white">
                  {doctor.name}
                </h2>
                <p className="text-white">{doctor.speciality}</p>
                <p className="text-white">Addis Ababa, Ethiopia</p>
                <div className="flex justify-between w-full mb-4">
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold text-white">
                      Experience
                    </p>
                    <p className="text-white">6+ years</p>
                  </div>
                  <div className="flex items-center">
                    <i className="ml-2 fa fa-thumbs-up"></i>
                    <span className="text-lg font-semibold text-white">
                      149 likes
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold mb-4">About</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Current Health Centers
                </h3>
                <div className="flex mb-4">
                  <img src={doc3} alt="Hospital" className="w-12 h-12 mr-2" />
                  <p>Kebede General Hospital - Permanent</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Available times for TeleMed service
                </h3>
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Mon</span>
                    <span>1:00 pm - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Mon</span>
                    <span>1:00 pm - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Mon</span>
                    <span>1:00 pm - 6:00 pm</span>
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
                    <form>
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
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select Time
                        </label>
                        <input
                          type="time"
                          id="time"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
  const doctors = [
    {
      name: "Doctor Yeabsira Nigusse",
      speciality: "General Practitioner",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Jane Doe",
      speciality: "Cardiologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor John Smith",
      speciality: "Neurologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
  ];
  const token = useSelector((state) => state.auth.token);

  const { mutate, data, isLoading, isError } = useMutation(
    () => getdoctors({ token }),
    {
      onSuccess: (data) => {
        console.log("List of doctors:", data);
      },
      onError: (error) => {
        console.error("Error fetching doctors:", error);
      },
    }
  );

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching doctors.</div>;
  }

  return (
    <>
      <div className="mx-10 sm:mx-32 lg:mx-72 mt-4">
        <Input placeholder="Search Your doctor" className="h-12" />
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
