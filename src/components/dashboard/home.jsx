import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import home from "@/public/img/Asset 4y.png";
import main from "@/public/img/main.png";
import tele from "@/public/img/tele.png";

import { Button } from "@/components/ui/button";
import Telemedicine from "./telemedicine";
import Records from "./records";
import Pharmacy from "./pharmacy";

import Chatbot from "./chatbot";

const Home = () => {
  const [size, setSize] = useState(window.innerWidth);
  const navigate = useNavigate();


  const handleNavigation = () => {
    navigate("/register");
  };
  
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {size > 520 ? (
          <div className="mt-8">
            <div className="flex ml-8">
              <div className="w-2/5">
                <img src={home} alt="Home" />
              </div>

              <div className="flex flex-col justify-center w-3/5 mx-4 lg:ml-12 lg:w-4/5">
                <div className="text-[#1F555D] text-2xl md:text-4xl lg:text-5xl font-medium">
                  Empowering Your Health Journey Anytime, Anywhere
                </div>

                <div className="mt-8">
                  <p className="text-[#000000] font-light text-xl md:text-2xl">
                    Simplifying your healthcare experience with us. Access lab
                    results, connect with healthcare professionals, and securely
                    manage your medical records, all in one place.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Button
                    className="font-medium text-white w-72 h-16 mt-24 bg-[#1F555D] text-xl"
                    onClick={handleNavigation}
                  >
                    Register As a Patient
                  </Button>
                </div>
                <div className="absolute bottom-0 right-0 font-light mr-8 mb-8">
                  <Chatbot />
                </div>
              </div>
            </div>

            <Telemedicine />
            <Records />
            <Pharmacy />
          </div>
        ) : (
          <div>
            <div className="bg-gradient-to-b from-[#E4F0EE] to-[#1F555D] h-full pb-8">
              <img src={main} alt="Mobile Home" />

              <div className=" text-white text-2xl font-serif font-semibold px-12 pt-16">
                Consolidate and manage all your medical records in one place.
              </div>
            </div>

            <div className="bg-[#A7C2C5] pt-12">
              <div className="text-[#1F555D] text-3xl font-bold font-serif pl-8">
                Telemedicine
              </div>

              <div className="text-white px-8 pt-4 text-lg font-serif">
                Connect with qualified doctors instantly based on your profile
                or the description you give. Experience convenient TeleMedicine
                for prompt medical assistance.
              </div>

              <div className="flex pb-8">
                <Button className="mx-8 mt-8 font-medium text-white w-40 h-12 bg-[#1F555D] text-xl">
                  Get your Doctor
                </Button>
                <div>
                  <img src={tele} alt="mobile tele" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-[#1F555D] text-3xl font-bold font-serif pl-8">
                Medical Records
              </div>
              <div className="my-4 font-light text-2xl px-8">
                Access your medical records, including doctor notes,
                medications, and lab test results, for a complete overview of
                your health history.
              </div>
              <Button className="mx-8 my-8 font-medium text-white w-40 h-12 bg-[hsl(188,44%,42%)] text-xl">
                View Records
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
