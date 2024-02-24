import React from "react";
import InputField from "./InputField";
import OptionField from "./OptionField";
import DatePickerDemo from '../ui/dataPicker'
import { Label } from "../ui/label";


const RoleInfoForm = () => {
  return (
    <>

      {/* phone number */}
      <InputField
        name="nantionalId"
        label="National ID"
        placeholder="Type your National ID"
        type="text"
        rules={{
          required: "National ID required",
          maxLength: {
            value: 20,
            message: "National ID cannot exceed 20 characters",
          },
          pattern: {
            value: /^ET\d{5}$/,
            message: "National ID must start with ET followed by 5 digits",
          },
        }}
      />
       <div>
        <Label htmlFor = "birthdate">Date of birth</Label>
        <DatePickerDemo/>
       </div>

      {/* Gender */}

      <OptionField
        name="role"
        label="Select your role"
        placeholder="Select Role"
        rules={{
          required: "Role required",
        }}
        data={[
          { id: "1", text: "Patient", value: "patient" },
          { id: "2", text: "Doctor", value: "doctor" },
          { id: "3", text: "Pharmacy Admin", value: "pharmacy" },
          { id: "4", text: "Health Center Admin", value: "hospital" },
          { id: "5", text: "Labratory Admin", value: "laboratory" },

        ]}
      />
    </>
  );
};

export default RoleInfoForm;
