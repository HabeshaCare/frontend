import React from "react";
import { Button } from "@/components/ui/button";
import Telemed from "@/public/img/pharmacist.png";
import { useNavigate } from "react-router";

const Pharmacy = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex ml-6 h-screen items-center">
        <div className="flex flex-col w-3/4 md:mt-10">
          <div className="text-[#1F555D] text-2xl font-bold font-serif mt-10 mb-3 md:text-3xl">
            Empowering Your Pharmacy Operations.
          </div>

          <div className="font-light text-lg md:text-2xl">
            Optimize your pharmacy's workflow with ease. Efficiently manage
            prescriptions, track inventory, and connect with healthcare
            professionals to ensure seamless patient care. Enhance your services
            and streamline operations, all in one place.
          </div>
          <div className="mb-3">
            <Button
              className="font-medium text-white w-56 h-12 mt-6 bg-[#1F555D] text-lg"
              onClick={handleNavigation}
            >
              Register Your Pharmacy
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex items-end justify-end">
          <img src={Telemed} alt="Telemedicine" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
