import React from "react";
import { Button } from "@/components/ui/button";
import Telemed from "@/public/img/doctors.png";
import { useNavigate } from "react-router";

const Telemedicine = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex ml-6 h-screen items-center">
        <div className="flex flex-col w-1/2 md:mt-10">
          <div className="text-[#1F555D] text-2xl font-bold font-serif mt-10 mb-3 md:text-3xl">
            Enhancing Care Through Expertise and Collaboration.
          </div>

          <div className="font-light text-lg md:text-2xl">
            Efficiently manage your patients and provide exceptional care.
            Streamline patient management, deliver exceptional care. Make
            informed decisions with comprehensive tools.
          </div>
          <div className="mb-3">
            <Button
              className="font-medium text-white w-48 h-12 mt-6 bg-[#1F555D] text-lg"
              onClick={handleNavigation}
            >
              Register As a Doctor
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex items-center">
          <img src={Telemed} alt="Telemedicine" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Telemedicine;
