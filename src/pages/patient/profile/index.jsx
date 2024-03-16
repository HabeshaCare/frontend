import { useState } from "react";
import { useMediaQuery } from "react-responsive";
// file import
import edit from "@/public/icons/edit.svg";
import back from "@/public/icons/back.svg";
import openEye from "@/public/icons/openEye.svg";
import closeEye from "@/public/icons/closeEye.svg";

// component import
import ProfilePicture from "@/components/profile/profilePicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";

import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
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
          <ProfilePicture />
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
                {editMode ? (
                  <ProfileValue value="David Chandler Bing" />
                ) : (
                  <Input />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value="+251982314216" /> : <Input />}
              </div>

              <div className={`${editMode && "md:ml-12"} ml-2`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value="nigusseyeabsira@gmail.com" />
                ) : (
                  <Input />
                )}
              </div>
            </div>

            <div className={`${editMode && "md:flex md:mt-4 md:px-4"}`}>
              {editMode ? (
                <div className="flex md:gap-5 ">
                  <div className="ml-2 md:pl-8">
                    <ProfileKey keyName="Password" />
                    <ProfileValue
                      value={showPassword ? "1234@Abc" : "********"}
                    />
                  </div>
                  <div
                    className="cursor-pointer mt-6"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src={showPassword ? openEye : closeEye}
                      alt="open Eye"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="ml-2 my-4">
                    <ProfileKey keyName="Change Password" />
                    <div className="text-[#1F555D] ml-4 font-semibold">
                      Old Password
                    </div>
                    <Input />
                  </div>

                  <div className="ml-2">
                    <div className="text-[#1F555D] ml-4 font-semibold">
                      New Password
                    </div>
                    <Input />
                  </div>

                  <div className="ml-2">
                    <div className="text-[#1F555D] ml-4 font-semibold">
                      Confirm New Password
                    </div>
                    <Input />
                  </div>
                </>
              )}

              <div className="ml-2 md:pl-32">
                <ProfileKey keyName="Gender" />
                {editMode ? <ProfileValue value="Male" /> : <Input />}
              </div>
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
              {editMode ? <ProfileValue value="889977-KO1" /> : <Input />}
            </div>

            {editMode ? (
              ""
            ) : (
              <Button className="mt-6 bg-[#1F555D] text-white">Save</Button>
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

export default Profile;
