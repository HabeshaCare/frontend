import React from "react";
import NavBar from "@/components/dashboard/navBar";

const PatientDashboard = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div>side bare here</div>
        <div>
          <div>
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
          </div>
          <div>
            <div>card 4</div>
            <div>card 5</div>
            <div>card 6</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
