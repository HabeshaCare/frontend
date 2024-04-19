import { useEffect, useState } from "react";
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
import { useQuery } from "react-query";
import axios from "axios";
import { Mutation, useMutation } from "react-query";

import DoctorPicture from "@/components/profile/picture";
import doctor from "@/public/img/doctor.png";

export const DoctorProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [licenseFile, setLicenseFile] = useState(null);
  const [associatedHealthCenterId, setAssociatedHealthCenterId] = useState("660300b921588e14d58d04db");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("Male");
  const [id, setId] = useState("6602e5b2a861c9f01f3b0abf");
  const [imageUrl, setImageUrl] = useState(null);
  const [licensePath, setLicensePath] = useState(null);
  const [location, setLocation] = useState(null);
  const [phonenumber, setPhonenumber] = useState("0912231223");
  const [role, setRole] = useState("Doctor");
  const [specialization, setSpecialization] = useState("Medical");
  const [verified, setVerified] = useState(true);
  const [yearOfExperience, setYearOfExperience] = useState(0);


  const handleInputChange = (setStateFunction) => {
    return (event) => {
      setStateFunction(event.target.value);
    };
  };


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLicenseFile(file);
    }
  };
  const handleRemoveUpload = () => {
    setLicenseFile(null);
  };
  const GetDoctorData = async () => {
    const token = localStorage.getItem('token');
    const doctor_id = localStorage.getItem('userId');
    console.log("Token=" + token, "doctorId=" + doctor_id);
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const url = "http://localhost:5072/api/doctor/" + doctor_id + "/profile";
    const response = await axios.get(url, config);
    return response.data;

  }


  const { data, isLoading, isError } = useQuery("doctor", GetDoctorData)

  useEffect(() => {
    setFullname(data?.data?.fullname)
    setEmail(data?.data?.email)
    setGender(data?.data?.gender)
    setPhonenumber(data?.data?.phonenumber)
    setLocation(data?.data?.location)
    setSpecialization(data?.data?.specialization)
    setVerified(data?.data?.verified)
    setYearOfExperience(data?.data?.yearOfExperience)
    setAssociatedHealthCenterId(data?.data?.associatedHealthCenterId)

    console.log('Fullname:', data?.data?.fullname);
    console.log('Email:', data?.data?.email);
    console.log('Gender:', data?.data?.gender);
    console.log('Phonenumber:', data?.data?.phonenumber);
    console.log('Location:', data?.data?.location);
    console.log('Specialization:', data?.data?.specialization);
    console.log('Verified:', data?.data?.verified);
    console.log('Year of Experience:', data?.data?.yearOfExperience);
    console.log('Associated Health Center Id:', data?.data?.associatedHealthCenterId);

    console.log("doctor name ", data?.data?.fullname);



  }, [editMode, data])
  const updatedData = {
    fullname: fullname,
    gender: gender,
    email: email,
    phonenumber: phonenumber,
    location: location,
    specialization: specialization,
    verified: verified,
    yearOfExperience: yearOfExperience,
    associatedHealthCenterId: associatedHealthCenterId, 

    
    
  }
  const token = localStorage.getItem('token');
  const doctor_id = localStorage.getItem('userId');
  console.log("Token=" + token, "doctorId=...." + doctor_id);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }};

  const url = 'http://localhost:5072/api/doctor/' + doctor_id + '/profile';
  const updatData = useMutation((dataToSendToBackend) => axios.put(url, dataToSendToBackend,config),  {
    onSuccess: () => {
      // Handle successful update
      console.log('success')
    },
    onError: () => {
      // Handle error
      console.log('error changing data')
    }
  })
  const handleSubmit = () => {
    updatData.mutate(updatedData);
  };
  if (data) {
    console.log("data");
    console.log(data?.data?.fullname);

  }

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error occured </p>
  }




  return (
    <>
      <div className="md:flex">
        <div className="md:w-3/4 mb-8">
          <div className="flex my-4">
            <div className="ml-2 mt-2 cursor-pointer">
              <img src={back} alt="back icon" />
            </div>
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Personal Profile</p>
            </div>
          </div>

          <div className="flex flex-col border border-solid mt-4 md:ml-24">
            <DoctorPicture image={doctor} />
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
              General Info
            </div>

            <div className={`${editMode && "md:flex justify-around md:mb-4"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value={data.data.fullname} />
                ) : (
                  <Input onChange={handleInputChange(setFullname)} placeholder="Enter your full name" value={fullname} />

                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number"  />
                {editMode ? <ProfileValue value={data.data.phonenumber}/> : <Input onChange={handleInputChange(setPhonenumber)} value={phonenumber} placeholder="change phone number" />}
              </div>

              <div className={`${editMode && "md:ml-12"} ml-2`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value={data.data.email} />
                ) : (
                  <Input onChange={handleInputChange(setEmail)} value={email} placeholder="change email" />
                )}
              </div>
            </div>

            <div className={`${editMode && "md:flex justify-start"}`}>
              <div className="ml-2 md:ml-16 md:pl-1">
                <ProfileKey keyName="Gender" />
                {editMode ? <ProfileValue value={data.data.gender} /> : <Input onChange={handleInputChange(setGender)} value={gender} />}
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              specific Info
            </div>

            <div
              className={`${editMode && "md:flex justify-between md:mx-16"}`}
            >
              <div className="ml-2">
                <ProfileKey keyName="Specialization" />
                {editMode ? (
                  <ProfileValue value={data.data.specialization} />
                ) : (
                  <Input onChange={handleInputChange(setSpecialization)} value={specialization} placeholder="edit your specializaiton" />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Hourly Price" />
                {editMode ? <ProfileValue value="100$/hr" /> : <Input />}
              </div>

              <div className="">
                <ProfileKey keyName="Location" />
                {editMode ? <ProfileValue value={location}/> : <Input onChange={handleInputChange(setLocation)} value={location} placeholder="set location" />}
              </div>
            </div>
            <div
              className={`${
                editMode && "md:flex justify-between md:mx-16 md:px-2"
              } mt-8`}
            >
              <div>
                <ProfileKey keyName="Verification status" />
                {editMode ? <ProfileValue value={data.data.verified ? "Verified " : "not Verified"} /> : <Input onChange={handleInputChange(setVerified)} value={verified} />}
              </div>
              <div>
                <ProfileKey keyName="Working Health center" />
                {editMode ? (
                  <ProfileValue value="Yekatit 12 General Hospital" />
                ) : (
                  <Input onChange={handleInputChange(setAssociatedHealthCenterId)} value={associatedHealthCenterId} placeholder="change hospital" />
                )}
              </div>
              <div>
                <ProfileKey keyName="Year of experience" />
                {editMode ? <ProfileValue value={data.data.yearOfExperience} /> : <Input />}
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
                <Button className="my-6 bg-[#1F555D] text-white h-10 w-28 " onClick={handleSubmit} >
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
export default DoctorProfile;
