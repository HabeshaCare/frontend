import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate   } from "react-router-dom";
import UserInfoForm from "@/components/auth/UserInfoForm";
import { Button } from "@/components/ui/button";
import RoleInfoForm from "@/components/auth/RoleInfoForm";
import PasswordInfoForm from "@/components/auth/PasswordInfoForm";
import toast from "react-hot-toast";

import { register } from "@/lib/auth/register";

import { useMutation } from "react-query";

const Register = () => {
  const methods = useForm();
  const [progress, setProgress] = useState(0);
  const { isSuccess, isError, isLoading, mutate } = useMutation(register);
  const formSteps = 50;
  const navigate  = useNavigate ();

  const onSubmit = (data) => {
    if (progress === 100) {
      
      mutate(data);
     
    } else {
      setProgress((prevProgress) => prevProgress + formSteps);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration successful!");
      console.log("done"); // forward them to page that say we have sent you email. check your email for varification
      console.log(isSuccess)
      navigate("/verifyEmail");
    }

    if (isError) {
      toast.error("Something went wrong, please try again.");
      console.log("error");
      console.log(isSuccess)
    }
  }, [isSuccess, isError, navigate]);

  return (
    <main className="flex flex-col items-center justify-center w-full my-6 gap-10">
      <h1 className="text-4xl text-primary font-bold md:text-4xl md:mt-8 font-primary">
        Register
      </h1>

      <section className="flex flex-col justify-center items-center gap-12 w-[80%] md:w-[35%]">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-6 w-full"
          >
            {progress === 0 && <UserInfoForm />}
            {progress === 50 && <RoleInfoForm />}
            {progress > 50 && <PasswordInfoForm />}

            <Button className="mt-2 w-full md:w-[40%] md:mt-4 text-white bg-[#1F555D]">
              {progress < 100 ? "Next" : isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </FormProvider>
      </section>

      <div className="text-primary font-primary md:w-full">
        <h1 className=" font-primary text-xs text-center">
          Already have an account? <a href="#">Login</a>
        </h1>
      </div>
    </main>
  );
};

export default Register;
