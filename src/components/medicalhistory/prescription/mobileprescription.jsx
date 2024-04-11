import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Content from "./content";
import Triger from "./triger";

const MobilePrescription = () => {
  return (
    <>
      <div className="flex justify-around pt-4 text-[#1F555D] font-serif text-lg font-semibold">
        <div>Madication Name</div>

        <div>Prescribed By</div>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <Triger />
            </AccordionTrigger>
            <AccordionContent>
              <Content />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
export default MobilePrescription;
