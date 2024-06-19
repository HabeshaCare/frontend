import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import home from "@/public/img/Asset 4y.png";
import main from "@/public/img/main.png";
import tele from "@/public/img/tele.png";

import { Button } from "@/components/ui/button";
import Telemedicine from "./telemedicine";
import Records from "./records";
import Pharmacy from "./pharmacy";
import Footer from "./footer";

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
          <div className="mt-6">
            <div className="flex ml-6">
              <div className="w-2/5">
                <img src={home} alt="Home" className="w-full h-auto" />
              </div>

              <div className="flex flex-col justify-center w-3/5 mx-4 lg:ml-8 lg:w-4/5">
                <div className="text-[#1F555D] text-xl font-bold font-serif md:text-3xl lg:text-4xl">
                  Empowering Your Health Journey Anytime, Anywhere
                </div>

                <div className="mt-6">
                  <p className="text-[#000000] font-light text-lg md:text-2xl">
                    Simplifying your healthcare experience with us. Access lab
                    results, connect with healthcare professionals, and securely
                    manage your medical records, all in one place.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Button
                    className="font-medium text-white w-64 h-12 mt-16 bg-[#1F555D] text-lg"
                    onClick={handleNavigation}
                  >
                    Register As a Patient
                  </Button>
                </div>
              </div>
            </div>

            <Telemedicine />
            <Records />
            <Pharmacy />
          </div>
        ) : (
          <div>
            <div className="bg-gradient-to-b from-[#E4F0EE] to-[#1F555D] h-full pb-6">
              <img src={main} alt="Mobile Home" className="w-full h-auto" />

              <div className="text-white text-xl font-serif font-semibold px-8 pt-12">
                Consolidate and manage all your medical records in one place.
              </div>
            </div>

            <div className="bg-[#A7C2C5] pt-8">
              <div className="text-[#1F555D] text-2xl font-bold font-serif pl-6">
                Telemedicine
              </div>

              <div className="text-white px-6 pt-3 text-base font-serif">
                Connect with qualified doctors instantly based on your profile
                or the description you give. Experience convenient TeleMedicine
                for prompt medical assistance.
              </div>

              <div className="flex pb-6">
                <Button className="mx-6 mt-6 font-medium text-white w-36 h-10 bg-[#1F555D] text-lg">
                  Get your Doctor
                </Button>
                <div>
                  <img src={tele} alt="mobile tele" className="w-24 h-auto" />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[#1F555D] text-2xl font-bold font-serif pl-6">
                Medical Records
              </div>
              <div className="my-3 font-light text-xl px-6">
                Access your medical records, including doctor notes,
                medications, and lab test results, for a complete overview of
                your health history.
              </div>
              <Button className="mx-6 my-6 font-medium text-white w-36 h-10 bg-[hsl(188,44%,42%)] text-lg">
                View Records
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
