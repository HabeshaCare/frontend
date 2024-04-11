import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex justify-around text-base text-[#1F555D] mt-6">
        <div>Amin General Lab</div>
        <div>12-08-2014</div>
        <div>Sep 04/2014</div>
        <div>Sep 05/2014</div>
        <div>Completed</div>
      </div>
    </>
  );
};
const LaboratoryTest = () => {
  return (
    <>
      <div className="flex justify-around mt-12 text-lg font-bold font-serif text-[#1F555D]">
        <div>Name of Lab</div>
        <div>Booking Number</div>
        <div>Order Date</div>
        <div>Completion Date</div>
        <div>Status</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
};

export default LaboratoryTest;
