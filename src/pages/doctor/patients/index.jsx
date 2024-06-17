import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import getPatient from "@/lib/patient/getpatient";
import { useSelector } from "react-redux";
const Content = ({ patient }) => {
  return (
    <>
      <div className="flex justify-between mx-8 mt-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">{patient.fullname}</p>
            <p className="text-left text-[#B5B5C3]">{patient.gender}, {patient.age}</p>
          </div>
        </div>
        <div>
          <p className="text-[#5B5B3C]">{patient.phonenumber}</p>
        </div>
        <div>
          <Button className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300">
            Add
          </Button>
        </div>
        <div>
          <Button className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300">
            View
          </Button>
        </div>
      </div>
    </>
  );
};


const Patient = () => {
  const userId = useSelector((state) => state.auth.user.id);
  const userToken = useSelector((state) => state.auth.token);
  console.log("token:", userToken);
  const { data, isLoading, isError } = useQuery(
    "patient",
    () => getPatient({ id: userId, token: userToken }),
    // {
    //   refetchInterval: 100000000, // Refetch every 10 seconds
    // }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <>
      <div className="flex justify-center items-center h-16">
        <div className="text-xl font-bold font-serif">My Patients</div>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-between my-4 text-[#1F555D] text-lg font-bold mx-16">
        <div>Patient Name</div>
        <div className="">Phone Number</div>
        <div className="">Add New Report</div>
        <div className="">View past Report</div>
      </div>
      {data && data.data.map((patient, index) => (
        <Content key={index} patient={patient} />
      ))}
    </>
  );
};

export default Patient;
