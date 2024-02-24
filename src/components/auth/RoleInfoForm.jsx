// RoleInfoForm.js
import React, { useState } from "react";
import InputField from "./InputField";
import OptionField from "./OptionField";
import { Label } from "../ui/label";

const RoleInfoForm = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (selectedValue) => {
    setSelectedRole(selectedValue);
  };

  return (
    <>
      <InputField
        name="nationalId"
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
        onChange={handleRoleChange} // Pass handleRoleChange function
      />
      {/* Render paragraph based on selected role */}

      {selectedRole === "patient" && (
        <>
        <InputField
        name="hight"
        label="Hight"
        placeholder="Enter your hight"
        type="number"
        rules={{
          required: "Hight required",
        }}
      />

        <InputField
        name="weight"
        label="Weight"
        placeholder="Enter your weight"
        type="number"
        rules={{
          required: "weight required",
        }}
      />

      </>

      )}
      {selectedRole === "doctor" && (
        <>
        <InputField
        name="experiance"
        label="Year of Experiance"
        placeholder="Enter your year of Experiance"
        type="number"
        rules={{
          required: "Experiance required",
        }}
      />


        <InputField
        name="specialization"
        label="Specialization"
        placeholder="Type your specialization"
        type="text"
        rules={{ required: "specialization required", maxLength: 50 }}
      />


      </>
      )}
      {/* Add similar condition for other roles if needed */}
    </>
  );
};

export default RoleInfoForm;
