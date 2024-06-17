import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PrescriptionForm = ({ onSubmit }) => {
  const [diagnosis, setDiagnosis] = useState("");
  const [medicineName, setMedicineName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      diagnosis,
      medicineName,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="diagnosis">Diagnosis</Label>
        <Input
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="medicineName">Medicine Name</Label>
        <Input
          id="medicineName"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300"
        >
          Submit Prescription
        </Button>
      </div>
    </form>
  );
};

export default PrescriptionForm;