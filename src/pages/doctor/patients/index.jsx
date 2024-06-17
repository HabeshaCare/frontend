import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import getPatient from "@/lib/patient/getpatient";
import { useSelector } from "react-redux";
import ReqForm from "./requestForm";
import ReportForm from "./medicalrecordfield"; // Import the ReportForm component
import PrescriptionForm from "./prescriptionform"; // Import the PrescriptionForm component
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

const Content = ({ patient, selectedService, onButtonClick }) => {
  let buttonText = "Add";
  switch (selectedService) {
    case "report":
      buttonText = "Add Report";
      break;
    case "lab":
      buttonText = "Request Laboratory Test";
      break;
    case "prescription":
      buttonText = "Attach Prescription";
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
          className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300"
          onClick={() => onButtonClick(patient, selectedService)}
        >
          {buttonText}
        </Button>
      </TableCell>
      <TableCell>
        <Button className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300">
          View Report
        </Button>
      </TableCell>
    </TableRow>
  );
};

const Patient = () => {
  const [selectedService, setSelectedService] = useState("");
  const [openDialog, setOpenDialog] = useState(null);
  const userId = useSelector((state) => state.auth.user.id);
  const userToken = useSelector((state) => state.auth.token);
  const { data, isLoading, isError } = useQuery("patient", () =>
    getPatient({ id: userId, token: userToken })
  );

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
    // Handle form submission here
    console.log("Form Data:", formData);
    // Perform your API call or any other actions here
    handleCloseDialog();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

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
                      <SelectItem value="report">Add Report</SelectItem>
                      <SelectItem value="lab">
                        Request Laboratory Test
                      </SelectItem>
                      <SelectItem value="prescription">
                        Attach Prescription
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableHead>
              <TableHead className="w-1/4 font-bold text-lg">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.data.map((patient, index) => (
                <Content
                  key={index}
                  patient={patient}
                  selectedService={selectedService}
                  onButtonClick={handleButtonClick}
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
            {openDialog.service === "report" && (
              <>
                <h3 className="font-bold text-lg">
                  Add Report for {openDialog.patient.fullname}
                </h3>
                <ReportForm onSubmit={handleFormSubmit} />
              </>
            )}
            {openDialog.service === "lab" && (
              <>
                <h3 className="font-bold text-lg">
                  Request Laboratory Test for {openDialog.patient.fullname}
                </h3>
                <ReqForm />
              </>
            )}
            {openDialog.service === "prescription" && (
              <>
                <h3 className="font-bold text-lg">
                  Attach Prescription for {openDialog.patient.fullname}
                </h3>
                <PrescriptionForm onSubmit={handleFormSubmit} />
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
