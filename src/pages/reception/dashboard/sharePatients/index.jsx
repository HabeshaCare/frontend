import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { searchPatients } from "./lib";
import { useSelector } from "react-redux";
import PatientProfile from "./patientProfile";

const SharePatients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = await searchPatients({ token, query: searchQuery });
    setIsLoading(false);
    setData(data);
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <Input
            className="w-full"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Patient using email, national Id or phone number"
          />
          <Button
            variant="ghost"
            className="text-2xl hover:bg-none"
            onClick={handleSubmit}
          >
            <CiSearch />
          </Button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Searching...</p>
        ) : (
          data && <PatientProfile patientData={data} />
        )}
      </div>
    </>
  );
};

export default SharePatients;
