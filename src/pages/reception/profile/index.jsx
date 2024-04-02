import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import back from "@/public/icons/back.svg";
import PatientPicture from "@/components/profile/patientPicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ReceptionProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div className="md:flex">
        <div className="md:w-2/3">
          <div className="flex my-4">
            <div className="ml-2 mt-2 cursor-pointer">
              <img src={back} alt="back icon" />
            </div>
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Personal Profile</p>
            </div>
          </div>
          <PatientPicture />
          {isMdScreen ? "" : <CompleteProfile progress={80} />}
          <div
            className="flex justify-end mr-8 mt-4 gap-2 cursor-pointer"
            onClick={() => setEditMode(!editMode)}
          >
            <div>
              <img src={edit} alt="edit SVG" />
            </div>
            <div className="text-[#1F555D]">Edit</div>
          </div>
          <div className="flex flex-col border border-solid mt-4 mx-4 p-2">
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              General Info
            </div>
            <div className={`${editMode && "md:flex justify-around"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {editMode ? <ProfileValue value="beza kasahun" /> : <Input />}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value="0982314216" /> : <Input />}
              </div>

              <div className={`${editMode && "md:ml-12"} ml-2`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value="bezakasahun@gmail.com" />
                ) : (
                  <Input />
                )}
              </div>
            </div>
            <div className={`${editMode && "md:ml-16"} ml-2`}>
              <ProfileKey keyName="Gender" />
              {editMode ? <ProfileValue value="female" /> : <Input />}
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              specific Info
            </div>

            <div className={`md:ml-16 ${editMode ? "ml-2" : "md:ml-2"} `}>
              <ProfileKey keyName="Health Center Name" />
              {editMode ? (
                <ProfileValue value="Yekatit 12 General Hospital" />
              ) : (
                <Input />
              )}
            </div>

            {editMode ? (
              ""
            ) : (
              <div className="flex justify-center">
                <Button className="my-6 bg-[#1F555D] text-white h-10 w-28 ">
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/3 flex justify-center">
          {isMdScreen ? <CompleteProfile2 progress={80} /> : ""}
        </div>
      </div>
    </>
  );
};
export default ReceptionProfile;
