import React from "react";

const LaboratoryTestContent = ({ lab }) => {
  const orderDate = new Date(lab.requestedDate).toLocaleDateString();
  const orderTime = new Date(lab.requestedDate).toLocaleTimeString();

  return (
    <div className="flex justify-between text-base text-[#1F555D] mt-6">
      <div className="font-semibold">{lab.laboratoryName}</div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <p className="text-left font-bold">{lab.doctorName}</p>
        </div>
      </div>
      <div>
        <p>{orderDate}</p>
        <p>{orderTime}</p>
      </div>
      <div className="font-semibold">{lab.status}</div>
      <div>
        {lab.tests.map((test) => (
          <div key={test.id} className="text-left">
            <div className="font-bold">{test.testName}</div>
            <div>{test.testValue !== null ? test.testValue : "Pending"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LaboratoryTest = ({ labData }) => {
  if (!labData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between mt-12 text-lg font-bold font-serif text-[#1F555D]">
        <div>Name of Lab</div>
        <div>Doctor</div>
        <div>Order Date</div>
        <div>Status</div>
        <div>Tests</div>
      </div>
      {labData.map((lab) => (
        <LaboratoryTestContent key={lab.id} lab={lab} />
      ))}
    </>
  );
};

export default LaboratoryTest;
