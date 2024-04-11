import { useEffect, useState } from "react";

import home from "@/public/img/Asset 4y.png";
import main from "@/public/img/main.png";
import tele from "@/public/img/tele.png";
import { Button } from "@/components/ui/button";
import Telemedicine from "./telemedicine";
import Records from "./records";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Home = () => {
  const [size, setSize] = useState(window.innerWidth);

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
                <div className="absolute bottom-0 right-0 font-light mr-8 mb-8">
                  <Sheet>
                    <SheetTrigger className="rounded-full animate-bounce">
                      <svg
                        fill="#E4F0EE"
                        height="64px"
                        width="64px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="-14.4 -14.4 88.80 88.80"
                        stroke="#E4F0EE"
                        strokeWidth="0.0006000000000000001"
                        transform="rotate(0)"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                          <rect
                            x="-14.4"
                            y="-14.4"
                            width="88.80"
                            height="88.80"
                            rx="44.4"
                            fill="#8BA5A8"
                            strokeWidth="0"
                          ></rect>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="#fffff"
                          strokeWidth="1.56"
                        >
                          <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.64,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M12,15h15c0.553,0,1,0.448,1,1 s-0.447,1-1,1H12c-0.553,0-1-0.448-1-1S11.447,15,12,15z M46,33H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1 S46.553,33,46,33z M46,25H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1S46.553,25,46,25z"></path>
                        </g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.64,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M12,15h15c0.553,0,1,0.448,1,1 s-0.447,1-1,1H12c-0.553,0-1-0.448-1-1S11.447,15,12,15z M46,33H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1 S46.553,33,46,33z M46,25H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1S46.553,25,46,25z"></path>
                        </g>
                      </svg>
                    </SheetTrigger>
                    <SheetContent className="bg-[#A7C2C5]">
                      <SheetHeader>
                        <SheetTitle className="mb-4 bg-teal-900 text-white px-4 py-2 mr-4 rounded-md">
                          GuideBot
                        </SheetTitle>
                        <SheetDescription className="h-96 mt-4 rounded-lg px-2 py-2 text-black">
                          Hello, How can i help you?
                        </SheetDescription>
                      </SheetHeader>
                      <SheetFooter>
                        <Textarea />
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>

            <Telemedicine />
            <Records />
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
