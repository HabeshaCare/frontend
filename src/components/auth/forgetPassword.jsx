import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import NavBar from "@/components/landingpage/navBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import resetpassword from "@/lib/auth/resetpassword";
import { Label } from "@/components/ui/label";
import lockIcon from "@/public/icons/lock.svg";

const ResetPassword = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { isSuccess, isError, isLoading, mutate } = useMutation(resetpassword);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [urlClicked, setUrlClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setUrlClicked(true);
    } else {
      setUrlClicked(false);
    }
  }, [token]);

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      mutate({ token, password });
    } else {
      alert("Passwords do not match");
    }
  };

  const handleVerify = () => {
    navigate("/login");
  };

  return (
    <>
      <NavBar />
      {urlClicked ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <form className="flex flex-col gap-10 justify-center items-center w-full md:w-[50%] md:bg-shadow md:p-10 md:rounded-lg">
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="button"
              className="bg-primary w-52 rounded-2xl text-white h-10 bg-[#1F555D]"
              onClick={handleResetPassword}
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>

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
