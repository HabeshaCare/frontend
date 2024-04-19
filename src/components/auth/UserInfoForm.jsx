import React from "react";
import InputField from "./InputField";
import OptionField from "./OptionField";

const UserInfoForm = () => {
  return (
    <>
      {/* first name */}
      <InputField
        name="fullName"
        label="Full Name"
        placeholder="Type your Full Name"
        type="text"
        rules={{ required: "Full name required", maxLength: 50 }}
        
      />

      {/* phone number */}
      <InputField
        name="phonenumber"
        label="Phone Number"
        placeholder="Type your Phone Number"
        type="text"
        rules={{
          required: "Phone Number required",
          maxLength: {
            value: 20,
            message: "Phone number cannot exceed 20 characters",
          },
          pattern: {
            value: /^(?:\+251\d{9}|09\d{8})$/,
            message: "Phone number must be in the format +251 or 09 ",
          },
        }}
      />

      {/* Email */}
      <InputField
        name="email"
        label="Email"
        placeholder="Type your Email"
        type="email"
        rules={{ required: "Email required", maxLength: 50 }}
      />

      <OptionField
        name="gender"
        label="Gender"
        placeholder="Select Gender"
        rules={{
          required: "Gender required",
          pattern: {
            value: /^[MF]$/,
            message: "Gender must be 'M' or 'F'",
          },
        }}
        data={[
          { id: "1", text: "Male", value: "M" },
          { id: "2", text: "Female", value: "F" },
        ]}
      />
    </>
  );
};

export default UserInfoForm;
