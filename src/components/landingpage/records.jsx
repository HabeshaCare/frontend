import React from "react";
import { Button } from "@/components/ui/button";
import record from "@/public/img/record.png";
import { useNavigate } from "react-router";

const Records = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex bg-[#d0eaec]">
        <div className="w-1/2 mt-10">
          <img src={record} alt="Health record" className="w-full h-auto" />
        </div>

        <div className="flex flex-col justify-center ml-6 w-1/2 mt-20">
          <div className="text-[#1F555D] text-2xl font-bold font-serif items-center md:text-3xl">
            Transforming Health Center Management.
          </div>

          <div className="my-6 font-light text-lg md:text-2xl">
            Elevate the quality of care at your health center. Coordinate
            patient care, manage appointments, and collaborate with healthcare
            providers. Improve efficiency and patient outcomes with
            comprehensive management tools, all in one platform.
          </div>

          <div className="mb-6">
            <Button
              className="font-medium text-white w-64 h-12 mt-6 bg-[#1F555D] text-lg"
              onClick={handleNavigation}
            >
              Register Your Health Center
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
