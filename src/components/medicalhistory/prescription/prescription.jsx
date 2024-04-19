import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex justify-around text-base mt-6">
        <div>
          <div className="text-left font-bold">Metformin</div>
          <div className="text-left text-[#B5B5C3]">500 mg tablet</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">Dr. Tsedi</p>
            <p className="text-left text-[#B5B5C3]">Infectious disease</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Sep 04/2014</p>
          <p className="text-[#B5B5C3]">5:20PM</p>
        </div>
        <div>
          <p className="font-semibold">Sep 05/2014</p>
          <p className="text-[#B5B5C3]">11:40PM</p>
        </div>
        <div className="text-base font-semibold w-1/6 text-[#5B5B3C]">
          Take 1 tablet by mouth twice daily by 10 hours gap.
        </div>
      </div>
    </>
  );
};
const Prescription = () => {
  return (
    <>
      <div className="flex justify-around mt-12 mr-16 text-lg font-bold font-serif text-[#1F555D]">
        <div>Medication Name</div>
        <div>Prescribed By</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Description</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
};

export default Prescription;
