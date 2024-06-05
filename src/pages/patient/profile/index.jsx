import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import PatientPicture from "@/components/profile/patientPicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

export const PatientProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const userData = useSelector((state) => state.auth.user);
  console.log("name", userData.fullname);

  return (
    <>
      <div className="md:flex">
        <div className="md:w-2/3">
          <div className="flex my-4">
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
              <div>
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value={userData.fullname} />
                ) : (
                  <Input />
                )}
              </div>

              <div>
                <ProfileKey keyName="Phone Number" />
                {editMode ? (
                  <ProfileValue value={userData.phonenumber} />
                ) : (
                  <Input />
                )}
              </div>

              <div className={`${editMode && "md:ml-12"}`}>
                <ProfileKey keyName="Email" />
                {editMode ? <ProfileValue value={userData.email} /> : <Input />}
              </div>
            </div>
            <div className="md:pl-6">
              <ProfileKey keyName="Gender" />
              {editMode ? <ProfileValue value={userData.gender} /> : <Input />}
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              specific Info
            </div>

            <div className={`${editMode && "md:flex md:gap-12"}`}>
              <div className={`md:ml-8 ${editMode ? "ml-2" : "md:ml-2"} `}>
                <ProfileKey keyName="Date of Birth" />
                {editMode ? (
                  <ProfileValue value="22-2-2012" />
                ) : (
                  <div className="flex gap-2">
                    {" "}
                    <div>
                      <p className="pl-6 text-[#1F555D]">DD</p>
                      <Input />
                    </div>{" "}
                    <div>
                      <p className="pl-6 text-[#1F555D]">MM</p>
                      <Input />
                    </div>{" "}
                    <div>
                      <p className="pl-6 text-[#1F555D]">YYYY</p>
                      <Input />
                    </div>
                  </div>
                )}
              </div>

              <div className="ml-2 mb-3 flex gap-20">
                <div className="ml-2">
                  <ProfileKey keyName="Hight" />
                  {editMode ? <ProfileValue value="1.70m" /> : <Input />}
                </div>

                <div className="">
                  <ProfileKey keyName="Weight" />
                  {editMode ? <ProfileValue value="70Kg" /> : <Input />}
                </div>
              </div>
            </div>
            <div className={`md:ml-8 ${editMode ? "ml-2" : "md:ml-2"} `}>
              <ProfileKey keyName="National ID" />
              {editMode ? (
                <ProfileValue value={userData.nationalId} />
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
          {isMdScreen ? <CompleteProfile2 progress={70} /> : ""}
        </div>
      </div>
    </>
  );
};
export default PatientProfile;
