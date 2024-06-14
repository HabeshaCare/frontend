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
    <>
      <NavBar />
      <div className="h-24"></div>
      <div>
        {cardData.map((data, index) => (
          <Card key={index} Name={data.name} Hospital={data.hospital} />
        ))}
      </div>
    </>
  );
};

export default LaboratoryDashboard;
