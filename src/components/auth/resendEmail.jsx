import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import NavBar from "@/components/landingpage/navBar";
import resendEmail from "@/lib/auth/resendemail";

const ResendEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const resendmail = useMutation(({ email }) => resendEmail(email), {
    onSuccess: (data) => {
      console.log("Email from component:", email);
      console.log("Email sent successfully", data);
      navigate("/verifyEmail");
    },
    onError: (error) => {
      console.log("Error sending email", error);
    },
  });

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleresendEmail = () => {
    if (!email) {
      setError("Please insert your email");
      return;
    }
    setError("");
    resendmail.mutate({ email });
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
        <div className="text-xl font-bold">Resend Email</div>
        <p className="text-lg font-sans">
          Insert registered email and click the button below to resend email
          verification.
        </p>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleInputChange}
          className="h-10 w-1/2 border border-solid border-gray-300 rounded-md px-3"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="w-32 h-10 text-white bg-[#1F555D]"
          onClick={handleresendEmail}
        >
          Resend Email
        </button>
      </div>
    </>
  );
};

export default ResendEmail;
