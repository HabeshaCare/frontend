import React, { useEffect, useState } from "react";
import MedicalHistoryNavBar from "@/components/medicalhistory/medicalrecord/medicalnavbar";
import MedicalRecord from "@/components/medicalhistory/medicalrecord/medicalrecord";
import MobileMedicalRecord from "@/components/medicalhistory/medicalrecord/mobilemedicalrecord";
import LaboratoryTest from "@/components/medicalhistory/laboratorytest/laboratorytest";
import MobileLaboratoryTest from "@/components/medicalhistory/laboratorytest/mobilelaboratorytest";
import Prescription from "@/components/medicalhistory/prescription/prescription";
import MobilePrescription from "@/components/medicalhistory/prescription/mobileprescription";
import MedicalReport from "@/components/medicalhistory/medicalreport/medicalreport";

const MedicalHistory = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState("Medical Record");

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let content = null;

  switch (activeTab) {
    case "Medical Report":
      content = <MedicalReport />;
      break;
    case "Laboratory Test":
      content = size > 740 ? <LaboratoryTest /> : <MobileLaboratoryTest />;
      break;
    case "Prescribed Medicine":
      content = size > 740 ? <Prescription /> : <MobilePrescription />;
      break;
    case "Medical Record":
      content = size > 740 ? <MedicalRecord /> : <MobileMedicalRecord />;
      break;
    default:
      content = null;
  }

  return (
    <>
      <MedicalHistoryNavBar
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      {content}
    </>
  );
};

export default MedicalHistory;
