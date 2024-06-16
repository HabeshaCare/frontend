import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
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
import { selectLaboratoryId } from "@/redux/labratorySlice";

const fetchCardData = async (id) => {
  const { data } = await axios.get(`http://localhost:5072/api/Laboratory/${id}/test-requests`); // Replace with your API endpoint
  return data;
};

const LaboratoryDashboard = () => {
  const id = useSelector(selectLaboratoryId);

  const { data, isLoading, isError, error } = useQuery(['cardData', id], () => fetchCardData(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <div className="h-24"></div>
      <div>
        {data.map((item, index) => (
          <Card key={index} Name={item.name} Hospital={item.hospital} />
        ))}
      </div>
    </>
  );
};

export default LaboratoryDashboard;
