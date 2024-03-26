import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import verifyToken from "@/lib/auth/varifyToken";
import { useMutation } from "react-query";
// import toast from "react-hot-toast"


const VarifyEmail = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { isSuccess, isError, isLoading, mutate } = useMutation(verifyToken);
  const [urlClicked, setUrlClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setUrlClicked(true);
      mutate(token);
    } else {
      setUrlClicked(false);
    }
  }, [token]);

  return (
    <>
      {urlClicked ? (
        <div>
          {isLoading ? <div>Verifying</div> : ""}

          {isSuccess ? (
            <div>
              {/* {toast.success("Verified Sucessfully!")} */}
              Verified Sucessfully!
              {navigate("/dashboard")}
            </div>
          ) : (
            ""
          )}

          {isError ? (
            <div className="flex flex-col justify-center items-center px-6 h-screen gap-5">
              <p>something went wrong! Verify again!</p>
              <div>
                <Button className=" w-32 text-white bg-[#1F555D]">
                  Resend Email
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
          <div className="text-xl font-bold">Email Varification</div>
          <p className="text-lg font-sans">
            We have sent you varification link to your registered email. Varify
            your email to complete your registration Process!
          </p>

          <div>
            <Button className="text-lg w-32 text-white bg-[#1F555D]">
              Verify
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default VarifyEmail;
