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
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left font-light">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col justify-start">
                    <p className="text-left font-bold">Dr. Tsedi</p>
                    <p className="text-left">Infectious disease</p>
                  </div>
                </div>
                <div className="text-right">22/12/2022</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
