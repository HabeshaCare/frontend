import NavBar from "./navBar";
import Card from "./requestCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormComponent from "./presForm";
import PrescriptionCard from "./prescription";

const LaboratoryDashboard = () => {
  const cardData = [
    { name: 'John Doe', hospital: 'Hospital A' },
    { name: 'Jane Smith', hospital: 'Hospital B' },
    { name: 'Michael Johnson', hospital: 'Hospital C' },
    { name: 'Emily Brown', hospital: 'Hospital D' },
    { name: 'David Wilson', hospital: 'Hospital E' },
    { name: 'Sarah Martinez', hospital: 'Hospital F' },
    { name: 'Daniel Taylor', hospital: 'Hospital G' },
    { name: 'Olivia Garcia', hospital: 'Hospital H' },
    { name: 'James Lee', hospital: 'Hospital I' },
    { name: 'Emma Rodriguez', hospital: 'Hospital J' },
  ];

  return (
    <div className=" bg-gray-100 h-screen">

      <NavBar />
      <div className="h-24 max-content "></div>
      <FormComponent />

    </div>
  );
};

export default LaboratoryDashboard;
