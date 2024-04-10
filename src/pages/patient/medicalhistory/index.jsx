import MedicalRecord from "@/components/medicalhistory/medicalrecord";
import MobileMedicalRecord from "@/components/medicalhistory/mobilemedicalrecord";
import MedicalHistoryNavBar from "@/components/medicalhistory/navbar";
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
      {size > 740 ? <MedicalRecord /> : <MobileMedicalRecord />}
    </>
  );
};

export default MedicalHistory;
