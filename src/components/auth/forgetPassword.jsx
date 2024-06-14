import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm, FormProvider } from "react-hook-form";
import NavBar from "@/components/landingpage/navBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import resetpassword from "@/lib/auth/resetpassword";
import { Label } from "@/components/ui/label";
import lockIcon from "@/public/icons/lock.svg";
import { useToast } from "@/components/ui/use-toast";
const ResetPassword = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { toast } = useToast();
  const { isSuccess, isError, isLoading, mutate } = useMutation(resetpassword,
    {
      onSuccess: (data) => {
        toast({
          title: "Reset Successfully!",
          message: "You have successfully reset your password.",
          type: "success",
        });
      },
      onError: (error) => {
        toast({
          title: "Something went wrong!",
          message: "Try again!",
          type: "error",
        });
      },
    }

  );
  const [urlClicked, setUrlClicked] = useState(false);
  const navigate = useNavigate();
  


  const methods = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = methods;

  useEffect(() => {
    if (token) {
      setUrlClicked(true);
    } else {
      setUrlClicked(false);
    }
  }, [token]);

  const handleResetPassword = (data) => {
    const { password, confirmPassword } = data;
    mutate({ token, password, confirmPassword });
  };

  const handleVerify = () => {
    navigate("/login");
  };

  return (
    <>
      <NavBar />
      {urlClicked ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleResetPassword)}
              className="flex flex-col gap-10 justify-center items-center w-full md:w-[50%] md:bg-shadow md:p-10 md:rounded-lg"
            >
              <div className="text-2xl font-bold mb-4">Reset Password</div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-bold">
                  Password
                </Label>
                <div className="flex items-center border-primary border border-x-0 border-t-0 rounded-none">
                  <img src={lockIcon} className="w-4" alt="lock icon" />
                  <Input
                    type="password"
                    id="password"
                    placeholder="Type your new password"
                    className="border-primary border-none focus-visible:ring-0 ml-2"
                    {...register("password", {
                      required: "Password required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="confirmPassword" className="text-bold">
                  Confirm Password
                </Label>
                <div className="flex items-center border-primary border border-x-0 border-t-0 rounded-none">
                  <img src={lockIcon} className="w-4" alt="lock icon" />
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    className="border-primary border-none focus-visible:ring-0 ml-2"
                    {...register("confirmPassword", {
                      required: "Confirm password required",
                      validate: (value) =>
                        value === watch("password") ||
                        "The passwords do not match",
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-primary w-52 rounded-2xl text-white h-10 bg-[#1F555D]"
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          </FormProvider>

          {isSuccess && (
            <div>
              Reset Successfully!
              <button onClick={handleVerify} className="ml-2 text-blue-500">
                Login
              </button>
            </div>
            
          )}

          {isError && (
            <div className="flex flex-col justify-center items-center px-6 h-screen gap-5">
              <p>Something went wrong! Try again!</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
          <div className="text-xl font-bold">Email Verification</div>
          <p className="text-lg font-sans">
            We have sent you a verification link to your registered email.
            Verify your email to complete the password reset process!
          </p>
          <a
            className="flex flex-col justify-center items-center text-lg w-32 h-10 text-white bg-[#1F555D] rounded-lg"
            href="https://ethereal.email/messages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Verify</p>
          </a>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
