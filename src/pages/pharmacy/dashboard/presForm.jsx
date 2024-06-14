import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PrescriptionCard from "./prescription";
import usePatientSearch from './searcBarHook'; // Import the custom hook
import { useSelector } from 'react-redux';
import {selectPharmacyId} from "@/redux/pharmacySlice";
import {selectToken} from "@/redux/authSlice"
 
const FormComponent = ({ placeholder }) => {
  const [input, setInput] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, error, isLoading } = usePatientSearch(isDialogOpen ? input : '');
  

 

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <form className="flex items-center mt-12 w-full justify-center" onSubmit={handleSubmit}>
      <div className="w-3/5 flex">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-grow px-6 py-2 text-lg border-2 border-blue-500 rounded-l-3xl focus:outline-none focus:border-blue-800 transition-all duration-300"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="bg-blue-500 text-white px-4 py-2 mr-4 h-14 rounded-r-3xl" type="submit" >
              Search
            </button>
          </DialogTrigger>
          <DialogContent className="lg:w-1/2">
            <DialogHeader>
              <DialogTitle>Search Results</DialogTitle>
              <DialogDescription>
                {isLoading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error loading data</p>
                ) : (
                  <PrescriptionCard data={data} />
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
};

export default FormComponent;
