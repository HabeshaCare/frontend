import React from "react";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";

const OptionField = ({
  name,
  label,
  placeholder,
  rules,
  data,
  onChange = () => {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;
  const isError = typeof errorMessage === "string";
  return (
    <div className="grid w-full items-center text-shadow-100 gap-1.5">
      <Label htmlFor={name} className="text-bold">
        {label}
      </Label>
      <p>
        {isError && (
          <span className=" font-primary text-xs text-red-500">
            {errorMessage}
          </span>
        )}
      </p>
      <select
        {...register(name, rules)}
        id={name}
        onChange={(e) => onChange(e.target.value)}
        className="border-primary border-none text-sm p-2"
      >
        <>
          <option key={placeholder} value="">
            {placeholder}
          </option>

          {data.map((item) => (
            <option key={item.id} value={item.value}>
              {item.text}
            </option>
          ))}
        </>
      </select>
    </div>
  );
};

export default OptionField;
