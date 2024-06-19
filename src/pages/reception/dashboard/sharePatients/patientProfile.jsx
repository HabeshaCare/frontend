import React from "react";
import { useMediaQuery } from "react-responsive";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

function PatientProfile({ patientData }) {
  const healthCenterId = useSelector((state) => state.healthcenter).id;
  const token = useSelector((state) => state.auth.token);
  const { toast } = useToast();

  const handleShare = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        `http://localhost:5072/api/healthcenter/${healthCenterId}/patients/${patientData.id}`,
        {},
        config
      );
      toast({
        title: "Success!",
        description: "Patient shared successfully.",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error!",
        description: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="w-full items-center">
        <div className="">
          <div className="">
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Patient Profile</p>
            </div>
          </div>
          <div className="w-full max-w-[400px] mx-auto">
            <img
              // Use profilePicture state if available, otherwise fallback to image prop
              src={patientData?.imageUrl}
              alt="doctor img"
              className="block mx-auto"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="flex flex-col border border-solid mt-4 mx-4 p-2">
            <div className="text-xl text-[#5F95DC] font-semibold font-serif mb-4">
              General Info
            </div>
            {/* <div>
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                <ProfileValue value={patientData.fullname} />
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                <ProfileValue value={patientData.phonenumber} />
              </div>

              <div className={`ml-2`}>
                <ProfileKey keyName="Email" />
                <ProfileValue value={patientData.email} />
              </div>
            </div>
            <div className="ml-2 md:pl-32">
              <ProfileKey keyName="Gender" />
              <ProfileValue value={patientData.gender} />
            </div>

            <div className="text-xl text-[#5F95DC] font-semibold font-serif mb-4">
              specific Info
            </div>

            <div>
              <div className={`md:ml-8 `}>
                <ProfileKey keyName="Date of Birth" />
                <ProfileValue value={patientData?.dateOfBirth} />
              </div>

              <div className="ml-2 mb-3 flex gap-20">
                <div className="ml-2">
                  <ProfileKey keyName="Height" />
                  <ProfileValue value={patientData?.height} />
                </div>

                <div className="">
                  <ProfileKey keyName="Weight" />
                  <ProfileValue value={patientData?.weight} />
                </div>
              </div>
            </div>
            <div className={`md:ml-8`}>
              <ProfileKey keyName="National ID" />
              <ProfileValue value={patientData.nationalId} />
            </div> */}
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="Full Name" />
                <ProfileValue value={patientData.fullname} />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="Phone Number" />
                <ProfileValue value={patientData.phonenumber} />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="Email" />
                <ProfileValue value={patientData.email} />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="Gender" />
                <ProfileValue value={patientData.gender} />
              </div>

              <div className="w-full p-2 text-xl text-[#5F95DC] font-semibold font-serif mb-4">
                Specific Info
              </div>

              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="Date of Birth" />
                <ProfileValue value={patientData?.dateOfBirth} />
              </div>

              <div className="w-full md:w-1/4 p-2">
                <ProfileKey keyName="Height" />
                <ProfileValue value={patientData?.height} />
              </div>

              <div className="w-full md:w-1/4 p-2">
                <ProfileKey keyName="Weight" />
                <ProfileValue value={patientData?.weight} />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <ProfileKey keyName="National ID" />
                <ProfileValue value={patientData.nationalId} />
              </div>
            </div>

            <Button
              onClick={handleShare}
              className="mt-6 bg-[#1F555D]  text-white"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientProfile;
