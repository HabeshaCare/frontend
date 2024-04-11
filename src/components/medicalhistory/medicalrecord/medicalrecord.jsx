import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex justify-around mt-6">
        <div className="flex justify-around w-2/3">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
            <div>
              <div className="font-bold">Dr. Tsedi</div>
              <div>Infectious Disease</div>
            </div>
          </div>

          <div>
            <p className="font-semibold">22/12/2023</p>
            <p>05:20 PM</p>
          </div>
          <div>
            <p className="font-semibold">Hospital</p>
            <p>Amin General Hospital</p>
          </div>
        </div>
        <div className="w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </>
  );
};
const MedicalRecord = () => {
  return (
    <>
      <div className="flex justify-around mt-12 text-lg font-bold font-serif text-[#1F555D]">
        <div className="flex justify-between w-1/2 ">
          <div>Doctor's Name</div>
          <div>Record Date</div>
          <div>Method of treatment</div>
        </div>
        <div className="">Additional Information</div>
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

export default MedicalRecord;
