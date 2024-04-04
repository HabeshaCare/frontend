import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function MedicalRecord() {
  return (
    <>
      <div className="flex justify-around pt-4 text-[#1F555D] font-serif text-sm font-semibold">
        <div>Doctor's Name</div>

        <div>Record Date</div>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div>
                  <div className="text-left">22/12/2022</div>
                  <div className="text-left">05:20PM</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <div className="flex justify-around w-full mb-4 ">
                  <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
                    Method of Treatment
                  </div>
                  <div>
                    <p className="text-center text-lg font-bold text-[#1F555D]">
                      Hospital
                    </p>
                    <p className="text-center text-lg font-normal">
                      Amin General Hospital
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
                    Additional Information
                  </div>
                  <div className="w-1/3 flex-grow text-center text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
