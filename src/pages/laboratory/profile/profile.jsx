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
import laboratory from "@/public/img/laboratory.jpg";
import { Link } from 'react-router-dom';
import Sercices from "./services";

const LaboratoryProfile = () => {
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
    <div className="p-4">
      <div className="md:flex">
        <div className="md:w-2/3 mb-8">
          <div className="flex items-center my-4">
            <Link to="/laboratory/dashboard" className="ml-2 mt-2 cursor-pointer">
              <img src={back} alt="back icon" className="h-6 w-6" />
            </Link>
            <div className="mt-1 font-semibold text-2xl font-serif flex-1 text-center">
              <p>Laboratory Profile</p>
            </div>
          </div>

          <div className="flex flex-col border border-solid mt-4 md:ml-24 p-14 rounded-lg shadow-md">
            <Picture image={laboratory} />
            <CompleteProfile progress={80} />

            <div className="flex justify-end mr-8 mt-4 gap-2" onClick={() => setEditMode(!editMode)}>
              <div>
                <img src={edit} alt="edit SVG" className="h-4 w-4 mt-1" />
              </div>
              <div className="text-[#1F555D] cursor-pointer">
                Edit
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Laboratory Info
            </div>

            <div className={`grid grid-cols-1 gap-4 ${editMode && "md:grid-cols-3 md:gap-6"}`}>
              <div>
                <ProfileKey keyName="Laboratory Name" />
                {editMode ? (
                  <ProfileValue value="Amen General Laboratory" />
                ) : (
                  <Input />
                )}
              </div>

              <div>
                <ProfileKey keyName="Location" />
                {editMode ? <ProfileValue value="Addis Ababa" /> : <Input />}
              </div>

              <div>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value="nigusseyeabsira@gmail.com" />
                ) : (
                  <Input />
                )}
              </div>
            </div>

            <div className={`grid grid-cols-1 gap-4 ${editMode && "md:grid-cols-2 md:gap-6 mt-4"}`}>
              <div>
                <ProfileKey keyName="Verification status" />
                {editMode ? <ProfileValue value="Verified" /> : <Input />}
              </div>
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8 mt-6">
              Admin Info
            </div>

            <div className={`grid grid-cols-1 gap-4 ${editMode && "md:grid-cols-3 md:gap-6"}`}>
              <div>
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value="Yeabsira Nigusse" />
                ) : (
                  <Input />
                )}
              </div>

              <div>
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value="+251982314216" /> : <Input />}
              </div>

              <div>
                <ProfileKey keyName="Gender" />
                {editMode ? <ProfileValue value="Male" /> : <Input />}
              </div>
            </div>

            {!editMode && (
              <div className="flex justify-center">
                <Button className="my-6 bg-[#1F555D] text-white h-10 w-28">
                  Save
                </Button>
              </div>
            )}




            <div className=" flex justify-center">
              <div>

                <div className="flex justify-center my-6">
                  {!editMode ? (
                    <label htmlFor="licenseUpload" className="cursor-pointer">
                      <div className="w-64 h-20 flex flex-col font-semibold justify-center items-center border border-solid bg-gray-300 p-4 rounded-lg shadow-md">
                        <FiUpload className="mr-2" />
                        {licenseFile ? (
                          <span>Reupload License</span>
                        ) : (
                          <span>Upload License</span>
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
                    <div className="flex flex-col gap-2 items-center bg-gray-300 p-4 rounded-lg shadow-md">
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
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>

  );
};
export default LaboratoryProfile;
