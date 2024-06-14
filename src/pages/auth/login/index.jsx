import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import userIcon from "@/public/icons/user.svg";
import lockIcon from "@/public/icons/lock.svg";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import login from "@/lib/auth/login";
import { useDispatch } from "react-redux";
import { login as loginAction } from "@/redux/authSlice";
import NavBar from "@/components/landingpage/navBar";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { assignProfile as doctorAssignProfileAction } from "@/redux/doctorSlice";
import { assignProfile as patientAssignProfileAction } from "@/redux/patientSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const initialFormData = { email: "", password: "" };

const Login = () => {
  const [formData, setFormData] = useState(initialFormData); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleResend = () => {
    navigate("/resendemail");
  };

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      const { token, data: userData } = data;
      // console.log("my token:", token);
      dispatch(
        loginAction({ user: userData, role: userData.role, token: token })
      );
      console.log("name", userData.fullname);
      console.log("data", userData);

      switch (userData.role) {
        case "HealthCenterAdmin":
          navigate("/healthcenter/dashboard");
          break;
        case "PharmacyAdmin":
          navigate("/pharmacy/dashboard");
          break;
        case "LaboratoryAdmin":
          navigate("/laboratory/dashboard");
          break;
        case "Reception":
          navigate("/reception/dashboard");
          break;
        case "Doctor":
          dispatch(
            doctorAssignProfileAction({
              email: userData.email,
              id: userData.id,
              fullname: userData.fullname,
              phonenumber: userData.phonenumber,
              gender: userData.gender,
            })
          );
          console.log("doctor token", token);
          navigate("/doctor/dashboard");
          break;
        case "Patient":
          dispatch(
            patientAssignProfileAction({
              email: userData.email,
              id: userData.id,
              fullname: userData.fullname,
              phonenumber: userData.phonenumber,
              gender: userData.gender,
            })
          );
          navigate("/patient/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
      toast({
        title: "Success!",
        description: "You have logged in successfully.",
        action: <ToastAction altText="Continue">Continue</ToastAction>,
      });
    },
    onError: (error) => {
      if (error.response && error.response.status === 401) {
        if (
          error.response.data &&
          error.response.data.errors &&
          error.response.data.errors.includes("Account not verified")
        ) {
          toast({
            title: "Account not verified",
            description: "Please verify your account before logging in.",
            action: (
              <ToastAction
                altText="Resend Verification"
                onclick={handleResend()}
              >
                Resend Verification
              </ToastAction>
            ),
          });
        } else {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with login credentials.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      } else if (error.isAxiosError && !error.response) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "Please check your internet connection.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    },
  });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <>
      <NavBar />
      <main className="flex items-center justify-center h-[100vh]">
        <section className="flex flex-col items-center justify-center gap-20 w-[50%] md:bg-shadow md:gap-14 md:p-10 md:rounded-lg lg:w-[40%]">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold md:text-4xl md:mt-8 font-primary">
              Login
            </h1>
          </div>
          <div className="text-primary font-primary md:w-full ">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-10 justify-center items-center w-full md:gap-8"
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="username" className="text-bold">
                  Email
                </Label>
                <div className="flex items-center border-primary border border-x-0 border-t-0 rounded-none">
                  <img src={userIcon} className="w-4" alt="user icon" />
                  <Input
                    type="text"
                    id="Email"
                    placeholder="Type your Email"
                    className="border-primary border-none focus-visible:ring-0 ml-2"
                    name="email"
                    required
                    onChange={handleFormInputChange}
                  />
                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-bold">
                  Password
                </Label>
                <div className="flex items-center border-primary border border-x-0 border-t-0 rounded-none">
                  <img src={lockIcon} className="w-4" alt="user icon" />
                  <Input
                    type="password"
                    id="password"
                    placeholder="Type your password"
                    className="border-primary border-none focus-visible:ring-0 ml-2"
                    name="password"
                    required
                    minLength={6}
                    onChange={handleFormInputChange}
                  />
                </div>
              </div>

              <div className="md:mt-4">
                <Button
                  type="submit"
                  className="bg-primary w-52 rounded-2xl text-white h-10 bg-[#1F555D]"
                  disabled={loginMutation.isLoading}
                >
                  {loginMutation.isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>

            <h1 className="font-primary text-md mt-4 text-center">
              Don&apos;t have an account? <a href="/register"> Sign Up</a>
            </h1>
            <div className="font-primary text-md mt-4 text-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Forget Password</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure? do you want to Reset your password?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your previous password and ask email verification.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
