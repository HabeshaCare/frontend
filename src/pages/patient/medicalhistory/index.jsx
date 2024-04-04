import MedicalRecord from "components/medicalhistory/medicalrecord";
import MedicalHistoryNavBar from "components/medicalhistory/navbar";
import React, { useState } from "react";

const MedicalHistory = () => {
  return (
    <>
      <MedicalHistoryNavBar />
      <MedicalRecord />
    </>
  );
};

export default MedicalHistory;
