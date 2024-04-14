import { Button } from "@/components/ui/button";
import back from "@/public/icons/back.svg";

const Content = () => {
  return (
    <>
      <div className="flex justify-around mt-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">David chandler</p>
            <p className="text-left text-[#B5B5C3]">Male, 32</p>
          </div>
        </div>
        <div>
          <p className="text-[#5B5B3C]">12345678</p>
        </div>
        <div className="text-[#5B5B3C]">22/12/2023</div>
        {/* <div className="border border-solid flex flex-col items-center h-8 w-24 rounded-2xl bg-red-100 text-red-600">
          <p>Waiting</p>
        </div> */}
        <div>
          <p className="text-center text-lg font-bold text-[#1F555D]">
            Hospital
          </p>
          <p className="text-[#B5B5C3]">Amin General Hospital</p>
        </div>
        <div>
          <Button className="bg-[#1F555D] text-white w-36 h-10 rounded-3xl hover:bg-blue-300">View Reports</Button>
        </div>
      </div>
    </>
  );
};

const Patient = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 px-4">
        <div className="ml-2 cursor-pointer">
          <img src={back} alt="back icon" />
        </div>
        <div className="text-xl font-bold font-serif">My Patients</div>
        <div>Filter</div>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold w-5/6">
        <div>Patient Name</div>
        <div className="pl-24">ID</div>
        <div>Last Visit</div>
        <div>Method of treatment</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
};

export default Patient;
