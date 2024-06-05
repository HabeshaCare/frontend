import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserInfoForm from "@/components/auth/UserInfoForm";
import { Button } from "@/components/ui/button";
import RoleInfoForm from "@/components/auth/RoleInfoForm";
import PasswordInfoForm from "@/components/auth/PasswordInfoForm";
import { register } from "@/lib/auth/register";
import { useMutation } from "react-query";
import NavBar from "@/components/dashboard/navBar";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const methods = useForm();
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const formSteps = 50;
  const { toast } = useToast();

  const { isError, isLoading, mutate, error } = useMutation(register, {
    onError: (error) => {
      if (error.response && error.response.status === 409) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "This account already exist. Please Login",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else if (error.isAxiosError && !error.response) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "Please Check your internet connection.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.error("Network Error:");
      } else {
        console.error("Error:", error);
      }
    },
    onSuccess: () => {
      navigate("/verifyEmail");
      toast({
        description: "You Registerd successfully. Please Verify your email",
      })
    },
  });

  const onSubmit = (data) => {
    if (progress === 100) {
      mutate(data);
    } else {
      setProgress((prevProgress) => prevProgress + formSteps);
    }
  };

  useEffect(() => {
    if (isError) {
      console.error("Error:", error);
    }
  }, [isError, error]);

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full gap-10">
        <h1 className="text-4xl text-[#1F555D] font-bold md:text-4xl md:mt-8 font-primary">
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
              {progress === 100 && <PasswordInfoForm />}

              <Button
                className="mt-2 w-full md:w-[40%] md:mt-4 text-white bg-[#1F555D] h-10"
                type="submit"
              >
                {progress < 100 ? "Next" : isLoading ? "Loading..." : "Submit"}
              </Button>
            </form>
          </FormProvider>
        </section>

        <div className="text-primary font-primary md:w-full">
          <h1 className="font-primary text-lg  text-center">
            Already have an account? <a href="/login">Login</a>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Register;
