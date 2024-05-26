import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import back from "@/public/icons/back.svg";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiUpload } from "react-icons/fi";
import Picture from "@/components/profile/picture";
import pharmacy from "@/public/img/pharmacy.jpg";
import {Link} from "react-router-dom"

const PharmacyProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [licenseFile, setLicenseFile] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLicenseFile(file);
    }
  };
  const handleRemoveUpload = () => {
    setLicenseFile(null);
  };

  return (
    <>
      <div className="md:flex">
        <div className="md:w-3/4 mb-8">
          <div className="flex my-4">
            <div className="ml-2 mt-2 cursor-pointer">

             <Link to="/pharmacy/dashboard" className="ml-2 mt-2 cursor-pointer">
              <img src={back} alt="back icon" />
            </Link>
            </div>
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Pharmacy Profile</p>
            </div>
          </div>

          <div className="flex flex-col border border-solid mt-4 md:ml-24">
            <Picture image={pharmacy} />
            {isMdScreen ? "" : <CompleteProfile progress={80} />}
            <div className="flex justify-end mr-8 mt-4 gap-2">
              <div>
                <img src={edit} alt="edit SVG" />
              </div>
              <div
                className="text-[#1F555D] cursor-pointer"
                onClick={() => setEditMode(!editMode)}
              >
                Edit
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Pharmacy Info
            </div>

            <div className={`${editMode && "md:flex justify-around md:mb-4"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Pharmacy Name" />
                {editMode ? <ProfileValue value="Amen Pharmacy" /> : <Input />}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Location" />
                {editMode ? <ProfileValue value="Addis Ababa" /> : <Input />}
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

            <div className={`${editMode && "md:flex justify-start"}`}>
              <div className="ml-2 md:ml-16 md:pl-1">
                <ProfileKey keyName="Verification status " />
                {editMode ? <ProfileValue value="Verified" /> : <Input />}
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Admin Info
            </div>

            <div
              className={`${editMode && "md:flex justify-between md:mx-16"}`}
            >
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value="Yeabsira Nigusse" />
                ) : (
                  <Input />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value="+251982314216" /> : <Input />}
              </div>

              <div className="">
                <ProfileKey keyName="Gender" />
                {editMode ? <ProfileValue value="Male" /> : <Input />}
              </div>
            </div>
            <div
              className={`${editMode && "md:flex justify-between md:mx-16"}`}
            >
              <div className="ml-2">
                <ProfileKey keyName="Working Hours" />
                {editMode ? (
                  <ProfileValue value="2:00LT - 11:00LT" />
                ) : (
                  <Input />
                )}
              </div>
            </div>

            <div className="flex justify-center my-6">
              {!editMode ? (
                <label htmlFor="licenseUpload" className="cursor-pointer">
                  <div className="w-64 h-20 flex flex-col font-semibold justify-center items-center border border-solid bg-gray-300 p-4">
                    {licenseFile ? (
                      <div className="flex flex-col gap-2 items-center">
                        <FiUpload className="mr-2" />
                        <span>Reupload License</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 items-center">
                        <FiUpload className="mr-2" />
                        <span>Upload License</span>
                      </div>
                    )}
                    <input
                      id="licenseUpload"
                      type="file"
                      accept=".pdf, .doc, .docx"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                  </div>
                </label>
              ) : (
                <div className="flex flex-col gap-2 items-center bg-gray-300 p-4">
                  <div className="w-64 h-20 flex flex-col font-semibold justify-center items-center border border-solid gap-1">
                    Uploaded License: <FiUpload className="mr-2" />
                    {licenseFile ? (
                      <span className="ml-8">{licenseFile.name}</span>
                    ) : (
                      <span className="text-gray-500">No file uploaded</span>
                    )}
                  </div>
                  {licenseFile && (
                    <button
                      className="ml-4 text-red-600 hover:text-red-700 font-semibold"
                      onClick={handleRemoveUpload}
                    >
                      Remove
                    </button>
                  )}
                </div>
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

        <div className="w-1/4 flex justify-center">
          {isMdScreen ? <CompleteProfile2 progress={80} /> : ""}
        </div>
      </div>
    </>
  );
};
export default PharmacyProfile;
