import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import verifyToken from "@/lib/auth/varifyToken";
import { useMutation } from "react-query";

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

  const handleVerify = () => {
    navigate("/login");
  };

  return (
    <>
      {urlClicked ? (
        <div>
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-screen">
              <p>Verifying</p>
            </div>
          ) : (
            ""
          )}

          {isSuccess ? (
            <div>
              Verified Successfully!
              {handleVerify()}
            </div>
          ) : (
            ""
          )}

          {isError ? (
            <div className="flex flex-col justify-center items-center px-6 h-screen gap-5">
              <p>Something went wrong! Verify again!</p>
              <div>
                <button
                  className="w-32 h-10 text-white bg-[#1F555D]"
                  onClick={() => handleVerify()}
                >
                  Resend Email
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
          <div className="text-xl font-bold">Email Verification</div>
          <p className="text-lg font-sans">
            We have sent you verification link to your registered email. Verify
            your email to complete your registration Process!
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

export default VarifyEmail;
