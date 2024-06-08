import React from "react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const PasswordInfoForm = () => {
  const { watch, formState: { errors } } = useFormContext();

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
              "Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.",
          },
        }}
      />

      {/* Confirm Password */}
      <InputField
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Type your Confirm Password"
        type="password"
        rules={{
          required: "Password required",
          validate: (value) =>
            value === watch("password") || "The passwords do not match",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.",
          },
        }}
      />

      {/* Display Email Error Here */}
      {errors.email && (
        <div className="text-red-500 text-sm">
          {errors.email.message}
        </div>
      )}
    </>
  );
};

export default PasswordInfoForm;
