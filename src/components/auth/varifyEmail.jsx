import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import verifyToken from "@/lib/auth/varifyToken";
import { useMutation } from "react-query";

const VarifyEmail = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { isSuccess, isError, isLoading, mutate } = useMutation(verifyToken);
  const [urlClicked, setUrlClicked] = useState(false);

  useEffect(() => {
    if (token) {
      setUrlClicked(true)
      mutate(token);
    } else {
      setUrlClicked(false)
      console.error("No token found in the URL.");
    }
  }, [token]);

  return (
    <>
      {urlClicked ? (
       <div>
        {isLoading ? "" : <div>Verifying</div>}
        {isSuccess ? "" : <div>Verified Sucessfully!</div>}
        {isError ? "" : <div>sothing went wrong! Verify again!</div>}
       </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
          <div className="text-xl font-bold">Email Varification</div>
          <p className="text-lg font-sans">
            We have sent you varification link to your registered email. Varify
            your email to complete your registration Process!
          </p>

          <div className="text-lg">
            <Button className="text-lg w-32 text-white bg-[#1F555D]">
              Varify
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default VarifyEmail;
