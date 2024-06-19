import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PrescriptionCard from "./prescription";
import usePatientSearch from './searcBarHook'; // Import the custom hook
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import PrescriptionList from './prescriptionList';

const FormComponent = ({ placeholder }) => {
  const [input, setInput] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data, error, isLoading } = usePatientSearch(isDialogOpen ? input : null);
  if (isDialogOpen) {
    console.log("dataa===", data)
    console.log("prescriptions",data?.data.data.prescriptions)
  
  }
  const { toast } = useToast();


  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      toast({
        title: "Uh oh! empty input ",
        description: "Please enter a search query.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;

    }
    setIsDialogOpen(true)
  };
 
  const prescriptions = data?.data.data.prescriptions
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
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-4 h-14 rounded-r-3xl"
          type="submit"
        >
          Search
        </button>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="lg:w-1/2">
            <DialogHeader>
              <DialogTitle>Search Results</DialogTitle>
              <DialogDescription>
                {isLoading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error loading data</p>
                ) : data ? (
                  <PrescriptionList prescriptions={prescriptions} />
                ) : null}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
};

export default FormComponent;
