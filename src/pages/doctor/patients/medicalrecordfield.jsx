import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import sendMedicalRecord from "@/lib/service/sendmedicalrecord";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSelector } from "react-redux";

const ReportForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    methodOfTreatment: "",
    weight: "",
    height: "",
    generalAppearance: "",
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, treatmentMethod: value }));
  };

  const userToken = useSelector((state) => state.auth.token);

  const sendData = useMutation(
    (data) => sendMedicalRecord(userToken, data),
    {
      onSuccess: () => {
        toast({
          title: "Success!",
          description: "Medical data inserted successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        if (onSubmit) onSubmit(formData);
      },
      onError: (error) => {
        toast({
          title: "Error!",
          description: error.message || "Error inserting medical data.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="treatmentMethod">Method of Treatment</Label>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a method" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="telemedicine">Telemedicine</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="weight">Weight</Label>
        <Input
          type="text"
          name="weight"
          id="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter weight"
        />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          type="text"
          name="height"
          id="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="Enter height"
        />
      </div>
      <div>
        <Label htmlFor="generalAppearance">General Appearance</Label>
        <Input
          type="text"
          name="generalAppearance"
          id="generalAppearance"
          value={formData.generalAppearance}
          onChange={handleChange}
          placeholder="Describe general appearance"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-500"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReportForm;
