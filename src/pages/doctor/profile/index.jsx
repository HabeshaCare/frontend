import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import back from "@/public/icons/back.svg";
import ProfilePicture from "@/components/profile/profilePicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiUpload } from "react-icons/fi";
import { useQuery } from "react-query";
import axios from "axios";
export const DoctorProfile = () => {
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
const GetDoctorData=async()=>{
  const token=localStorage.getItem('token');
  const doctor_id=localStorage.getItem('userId');
  const config = {
    headers:{
      Authorization: 'Bearer ' + token
    }
  }
const url="http://localhost:5072/api/doctor/"+doctor_id +"/profile";
const response=await axios.get(url,config);
return  response.data;

}


const {data,isLoading,isError} = useQuery(["doctor",GetDoctorData])



  return (
    <>
      <div className="md:flex">
        <div className="md:w-2/3 mb-8">
          <div className="flex my-4">
            <div className="ml-2 mt-2 cursor-pointer">
              <img src={back} alt="back icon" />
            </div>
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Personal Profile</p>
            </div>
          </div>
          <ProfilePicture money="20" />
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
          <div className="flex flex-col border border-solid mt-4 mx-4 p-2">
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              Bio
            </div>
            {editMode ? (
              <div className="mb-8 ml-8 text-lg font-normal text-[#1F555D]">
                Type something about yourself here
              </div>
            ) : (
              <Input placeholder="Type something about yourself here" />
            )}
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              General Info
            </div>

            <div className={`${editMode && "md:flex justify-around"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value="Dr. Belay Seyum" />
                ) : (
                  <Input />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value="092314216" /> : <Input />}
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
              <div className="ml-2 md:ml-16">
                <ProfileKey keyName="Gender" />
                {editMode ? <ProfileValue value="Male" /> : <Input />}
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4">
              specific Info
            </div>

            <div className={`${editMode && "md:flex justify-around"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Specialization" />
                {editMode ? (
                  <ProfileValue value="Doctor of Medicine" />
                ) : (
                  <Input />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Hourly Price" />
                {editMode ? <ProfileValue value="100$/hr" /> : <Input />}
              </div>

              <div className="">
                <ProfileKey keyName="Location" />
                {editMode ? <ProfileValue value="Addis Ababa" /> : <Input />}
              </div>
            </div>
            <div
              className={`${editMode && "md:flex justify-around md:ml-8"} mt-4`}
            >
              <div>
                <ProfileKey keyName="Verification status" />
                {editMode ? <ProfileValue value="Verified" /> : <Input />}
              </div>
              <div>
                <ProfileKey keyName="Working Health center" />
                {editMode ? (
                  <ProfileValue value="Yekatit 12 General Hospital" />
                ) : (
                  <Input />
                )}
              </div>
              <div>
                <ProfileKey keyName="Year of experience" />
                {editMode ? <ProfileValue value="2 Years" /> : <Input />}
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

        <div className="w-1/3 flex justify-center">
          {isMdScreen ? <CompleteProfile2 progress={80} /> : ""}
        </div>
      </div>
    </>
  );
};
export default DoctorProfile;
