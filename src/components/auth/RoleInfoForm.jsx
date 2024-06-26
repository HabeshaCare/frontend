// RoleInfoForm.js
import React, { useState } from "react";
import InputField from "./InputField";
import OptionField from "./OptionField";

const RoleInfoForm = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (selectedValue) => {
    setSelectedRole(selectedValue);
  };

  return (
    <>
      <OptionField
        name="role"
        label="Select your role"
        placeholder="Select Role"
        rules={{
          required: "Role required",
        }}
        data={[
          { id: "1", text: "Patient", value: "Patient" },
          { id: "2", text: "Doctor", value: "Doctor" },
          { id: "3", text: "Pharmacy Admin", value: "PharmacyAdmin" },
          { id: "4", text: "Health Center Admin", value: "HealthCenterAdmin" },
          { id: "5", text: "Labratory Admin", value: "LaboratoryAdmin" },
          { id: "5", text: "Reception", value: "Reception" },
        ]}
        onChange={handleRoleChange} // Pass handleRoleChange function
      />
      {/* Render paragraph based on selected role */}

      {selectedRole === "Patient" && (
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
        </>
      )}

      {selectedRole === "Reception" && (
        <InputField
          name="hospitalName"
          label="Hospital Name"
          placeholder="Type your Hospital Name"
          type="text"
          rules={{ required: "Hospital Name required", maxLength: 50 }}
        />
      )}
    </>
  );
};

export default RoleInfoForm;
