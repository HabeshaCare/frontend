import React, { useEffect, useState } from "react";
import MedicalHistoryNavBar from "@/components/medicalhistory/medicalrecord/medicalnavbar";
import MedicalRecord from "@/components/medicalhistory/medicalrecord/medicalrecord";
import MobileMedicalRecord from "@/components/medicalhistory/medicalrecord/mobilemedicalrecord";
import LaboratoryTest from "@/components/medicalhistory/laboratorytest/laboratorytest";
import MobileLaboratoryTest from "@/components/medicalhistory/laboratorytest/mobilelaboratorytest";
import Prescription from "@/components/medicalhistory/prescription/prescription";
import MobilePrescription from "@/components/medicalhistory/prescription/mobileprescription";
import MedicalReport from "@/components/medicalhistory/medicalreport/medicalreport";
import getPrescriptions from "@/lib/medicaldata/getprescriptions";
import { useSelector } from "react-redux";
import getRecords from "@/lib/medicaldata/getrecords";
import { useQuery } from "react-query";
import getLabTest from "@/lib/medicaldata/getlabtest";

const MedicalHistory = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState("Medical Record");
  const userToken = useSelector((state) => state.auth.token);
  const patientId = useSelector((state) => state.auth.user.id);

  const {
    data: recordsData,
    isLoading: isLoadingRecords,
    isError: isErrorRecords,
  } = useQuery(["records", patientId], () =>
    getRecords({ token: userToken, patientId: patientId })
  );

  const {
    data: prescriptionsData,
    isLoading: isLoadingPrescriptions,
    isError: isErrorPrescriptions,
  } = useQuery(["prescriptions", patientId], () =>
    getPrescriptions({ token: userToken, patientId: patientId })
  );

  const {
    data: labData,
    isLoading: isLabLoading,
    isError: isLabError,
  } = useQuery("lab", () => getLabTest({ token: userToken, patientId: patientId}));

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

  useEffect(() => {
    if (recordsData) {
      console.log("Records Data:", recordsData);
    }
    if (prescriptionsData) {
      console.log("Prescriptions Data:", prescriptionsData);
    }
    if (labData) {
      console.log("Lab Data:", labData);
    }
  }, [recordsData, prescriptionsData]);

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
