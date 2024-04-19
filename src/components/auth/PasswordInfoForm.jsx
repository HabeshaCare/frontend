import React from "react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const PasswordInfoForm = () => {
  const { watch } = useFormContext();
  return (
    <>
      {/* Password */}
      <InputField
        name="password"
        label="Password"
        placeholder="Type your Password"
        type="password"
        rules={{
          required: "Password required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must contain at least 8 characters. one uppercase, lowercase, number and special character.",
          },
        }}
      />

      {/* Conf Password */}

      <InputField
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Type your Confirm Password"
        type="password"
        rules={{
          required: "Password Required",
          validate: (value) =>
            value === watch("password") || "The passwords do not match",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must contain at least 8 characters. one uppercase, lowercase, number and special character.",
          },
        }}
      />
    </>
  );
};

export default PasswordInfoForm;
