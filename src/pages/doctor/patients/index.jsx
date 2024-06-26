import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import getPatient from "@/lib/patient/getsharedpatient";
import { useSelector } from "react-redux";
import ReqForm from "./Labtest/requestForm";
import CombinedForm from "./report/combinedform";
import getLab from "@/lib/service/getassciatedlab";
import MedicalHistory from "../medicalhistory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const Content = ({ patient, selectedService, onButtonClick, onViewReport }) => {
  let buttonText = "Add";
  switch (selectedService) {
    case "combined":
      buttonText = "Add Report and Prescription";
      break;
    case "lab":
      buttonText = "Request Laboratory Test";
      break;
    default:
      buttonText = "Add";
  }

  return (
    <TableRow>
      <TableCell className="font-medium">{patient.fullname}</TableCell>
      <TableCell>{patient.phonenumber}</TableCell>
      <TableCell>
        <Button
          className="bg-[#1F555D] text-white w-52 h-10 rounded-3xl hover:bg-blue-300"
          onClick={() => onButtonClick(patient, selectedService)}
        >
          {buttonText}
        </Button>
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => onViewReport(patient.id)}>
              View Report
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <MedicalHistory patientId={patient.id} />
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

const Patient = () => {
  const [selectedService, setSelectedService] = useState("");
  const [openDialog, setOpenDialog] = useState(null);
  const userId = useSelector((state) => state.auth.user.id);
  const userToken = useSelector((state) => state.auth.token);
  const { data: patientData, isLoading, isError } = useQuery("patient", () =>
    getPatient({ id: userId, token: userToken })
  );

  const {
    data: labData,
    isLoading: isLabLoading,
    isError: isLabError,
  } = useQuery("lab", () => getLab({ token: userToken }));

  console.log("lab id from patient", labData?.data[0]?.id);
  console.log("patient id", userId);

  const handleButtonClick = (patient, service) => {
    if (service === "") {
      setOpenDialog({ patient: null, service: "default" });
    } else {
      setOpenDialog({ patient, service });
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
    handleCloseDialog();
  };

  const associatedhealthcenter = useSelector(
    (state) => state.doctor.doctorassociatedHealthCenterId
  );

  console.log("associatedhealthcenter", associatedhealthcenter);

  if (isLoading || isLabLoading) return <div>Loading...</div>;
  if (isError || isLabError) return <div>Error loading data</div>;

  // Log the lab data
  console.log("Lab Data:", labData);

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center h-16">
        <div className="text-xl font-bold font-serif">My Patients</div>
      </div>
      <div>
        <hr />
      </div>
      <div className="mx-8">
        <Table>
          <TableCaption>A list of your patients.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4 font-bold text-lg">
                Patient Name
              </TableHead>
              <TableHead className="w-1/4 font-bold text-lg">
                Phone Number
              </TableHead>
              <TableHead className="w-1/4 font-bold text-lg">
                <Select onValueChange={(value) => setSelectedService(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="combined">
                        Add Report and Prescription
                      </SelectItem>
                      <SelectItem value="lab">
                        Request Laboratory Test
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableHead>
              <TableHead className="w-1/4 font-bold text-lg">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientData &&
              patientData.data.map((patient, index) => (
                <Content
                  key={index}
                  patient={patient}
                  selectedService={selectedService}
                  onButtonClick={handleButtonClick}
                  onViewReport={(id) => console.log("View Report clicked for patient id:", id)}
                />
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {openDialog && (
        <Dialog open onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-[425px]">
            {openDialog.service === "default" && (
              <>
                <h3 className="font-bold text-lg">Please choose a service</h3>
              </>
            )}
            {openDialog.service === "combined" && (
              <>
                <h3 className="font-bold text-lg">
                  Add Report and Prescription for {openDialog.patient.fullname}
                </h3>
                <CombinedForm
                  onSubmit={handleFormSubmit}
                  patientId={openDialog.patient.id}
                />
              </>
            )}
            {openDialog.service === "lab" && (
              <>
                <h3 className="font-bold text-lg">
                  Request Laboratory Test for {openDialog.patient.fullname}
                </h3>
                <ReqForm
                  labId={labData?.data[0]?.id || ""}
                  patientId={openDialog.patient.id}
                  requestorId={userId}
                  onSubmit={handleFormSubmit}
                />
              </>
            )}
          </DialogContent>
          <DialogFooter>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default Patient;
