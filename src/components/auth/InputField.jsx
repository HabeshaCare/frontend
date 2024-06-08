import React from "react";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

const InputField = ({ name, label, placeholder, rules, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;
  const isError = typeof errorMessage === "string";

  return (
    <div className="grid w-full items-center gap-1.5 text-shadow-100">
      <Label htmlFor={name} className="text-bold">
        {label}
      </Label>
      <Input
        {...register(name, rules)}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`border-x-0 border-t-0 rounded-none border-b-shadow-100 text-black placeholder-shadow-100 ${
          isError ? "border-red-500" : ""
        }`}
      />
      {isError && (
        <span className="font-primary text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;
