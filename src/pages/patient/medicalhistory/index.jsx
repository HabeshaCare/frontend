import LaboratoryTest from "@/components/medicalhistory/laboratorytest/laboratorytest";
import MobileLaboratoryTest from "@/components/medicalhistory/laboratorytest/mobilelaboratorytest";
import MedicalRecord from "@/components/medicalhistory/medicalrecord/medicalrecord";
import MobileMedicalRecord from "@/components/medicalhistory/medicalrecord/mobilemedicalrecord";
import MedicalHistoryNavBar from "@/components/medicalhistory/medicalrecord/navbar";
import React, { useEffect, useState } from "react";

const MedicalHistory = () => {
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
      <MedicalHistoryNavBar />
      {/* {size > 740 ? <MedicalRecord /> : <MobileMedicalRecord />} */}
      {/* <MobileLaboratoryTest /> */}
      {size > 740 ? <LaboratoryTest /> : <MobileLaboratoryTest />}
    </>
  );
};

export default MedicalHistory;
