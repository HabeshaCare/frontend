import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiUpload } from "react-icons/fi";
import { useMutation, useQuery } from "react-query";
import DoctorPicture from "@/components/profile/picture";
import doctor from "@/public/img/doctor.png";
import { useSelector, useDispatch } from "react-redux";
import { updateprofile } from "@/redux/doctorSlice";
import { updateProfile } from "@/lib/update/updatedoctorprofile";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import getdoctors from "@/lib/profile/getdoctor";
import gethealthcenter from "@/lib/profile/gethealthcenter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const DoctorProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [licenseFile, setLicenseFile] = useState(null);
  const [associatedHealthCenterId, setAssociatedHealthCenterId] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [licensePath, setLicensePath] = useState(null);
  const [location, setLocation] = useState(null);
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setRole] = useState("Doctor");
  const [specialization, setSpecialization] = useState("");
  const [verified, setVerified] = useState(true);
  const [yearOfExperience, setYearOfExperience] = useState(0);
  const [hourlyRateInBirr, setHourlyRateInBirr] = useState(0);
  const [description, setDescription] = useState("");
  const [healthCenters, setHealthCenters] = useState([]);

  const dispatch = useDispatch();
  const { toast } = useToast();

  const doctorData = useSelector((state) => state.doctor);
  const userToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (doctorData) {
      const {
        doctorname,
        doctorphone,
        doctoremail,
        doctorgender,
        doctorlocation,
        doctorspecialization,
        doctoryearOfExperience,
        doctorid,
        doctorassociatedHealthCenterId,
        doctorhourlyRateInBirr,
        doctorimageUrl,
        doctorverified,
        doctordescription,
      } = doctorData;
      setFullname(doctorname);
      setPhonenumber(doctorphone);
      setEmail(doctoremail);
      setGender(doctorgender);
      setLocation(doctorlocation);
      setSpecialization(doctorspecialization);
      setYearOfExperience(doctoryearOfExperience);
      setVerified(doctorverified);
      setId(doctorid);
      setAssociatedHealthCenterId(doctorassociatedHealthCenterId);
      setHourlyRateInBirr(doctorhourlyRateInBirr);
      setImageUrl(doctorimageUrl);
      setDescription(doctordescription);
    }

    if (userToken) {
      fetchHealthCenter({ token: userToken });
    }
  }, [doctorData, userToken]);

  const handleInputChange = (setStateFunction) => (event) => {
    setStateFunction(event.target.value);
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

  const updatedData = {
    fullname,
    gender,
    email,
    phonenumber,
    location,
    specialization,
    verified,
    yearOfExperience,
    associatedHealthCenterId,
    hourlyRateInBirr,
    description,
  };

  const { mutate: fetchHealthCenter } = useMutation(
    ({ token }) => gethealthcenter({ token }),
    {
      onSuccess: (data) => {
        console.log("Health center data fetched successfully:", data);
        if (Array.isArray(data.data)) {
          setHealthCenters(data.data);
        }
        // toast({
        //   title: "Success!",
        //   description: "Get health center successfully.",
        //   action: <ToastAction altText="Continue">Continue</ToastAction>,
        // });
      },
      onError: (error) => {
        console.error("Error fetching health center data:", error);
        // toast({
        //   title: "Uh oh! Something went wrong.",
        //   description: "There was an error getting health center.",
        //   action: <ToastAction altText="Try again">Try again</ToastAction>,
        // });
      },
    }
  );

  const { mutate: updateDoctorProfile } = useMutation(
    ({ token, data }) => updateProfile(data, token),
    {
      onSuccess: (updatedData) => {
        toast({
          title: "Success!",
          description: "Profile updated successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        dispatch(
          updateprofile({
            doctorid: id,
            doctorname: fullname,
            doctorphone: phonenumber,
            doctoremail: email,
            doctorgender: gender,
            doctorlocation: location,
            doctorspecialization: specialization,
            doctorhourlyRateInBirr: hourlyRateInBirr,
            doctoryearOfExperience: yearOfExperience,
            doctorlicensePath: licensePath,
            doctordescription: description,
            doctorassociatedHealthCenterId: associatedHealthCenterId,
          })
        );
        setEditMode(true);
      },
      onError: (error) => {
        console.error("Error updating profile:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was an error updating profile.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      },
    }
  );

  const { data, isLoading, isError, refetch } = useQuery(
    ["doctorProfile", userToken, doctorData?.doctorid],
    () => getdoctors({ token: userToken, id: doctorData?.doctorid }),
    {
      enabled: !!userToken && !!doctorData?.doctorid,
      onSuccess: (data) => {
        console.log("Doctor data fetched successfully:", data);
        dispatch(
          updateprofile({
            doctorid: id,
            doctorname: data.data.fullname,
            doctorphone: data.data.phonenumber,
            doctoremail: data.data.email,
            doctorgender: data.data.gender,
            doctorlocation: data.data.location,
            doctorspecialization: data.data.specialization,
            doctorhourlyRateInBirr: data.data.hourlyRateInBirr,
            doctorlicensePath: data.data.licensePath,
            doctoryearOfExperience: data.data.yearOfExperience,
            doctordescription: data.data.description,
            doctorimageUrl: data.data.imageUrl,
            doctorassociatedHealthCenterId: data.data.associatedHealthCenterId,
            doctorverified: data.data.verified,
          })
        );
      },
      onError: (error) => {
        console.error("Error fetching doctor data:", error);
      },
      refetchOnMount: true,
    }
  );

  const handleSubmit = () => {
    updateDoctorProfile({
      token: userToken,
      data: {
        id,
        fullname,
        gender,
        email,
        phonenumber,
        location,
        specialization,
        yearOfExperience,
        hourlyRateInBirr,
        description,
        associatedHealthCenterId,
      },
    });
    setEditMode(true);
  };
  const selectedHealthCenterName =
    healthCenters.find((center) => center.id === associatedHealthCenterId)
      ?.name || "N/A";

  return (
    <>
      <div className="md:flex">
        <div className="md:w-2/3 mb-8">
          <div className="flex my-4">
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Personal Profile</p>
            </div>
          </div>

          <div className="flex flex-col border border-solid mt-4 md:ml-24">
            <DoctorPicture
              image={imageUrl ? "http://localhost:5072/" + imageUrl : doctor}
            />

            {isMdScreen ? "" : <CompleteProfile progress={100} />}
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

            {/* Bio Section */}
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Bio
            </div>
            <div className="pl-8 mb-4">
              {editMode ? (
                <ProfileValue value={description} />
              ) : (
                <Textarea
                  onChange={handleInputChange(setDescription)}
                  value={description}
                  placeholder="Write a short bio..."
                  rows={4}
                />
              )}
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              General Info
            </div>

            <div className={`${editMode && "md:flex justify-around md:mb-4"}`}>
              <div className="">
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value={fullname} />
                ) : (
                  <Input
                    onChange={handleInputChange(setFullname)}
                    placeholder="Enter your full name"
                    value={fullname}
                  />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? (
                  <ProfileValue value={phonenumber} />
                ) : (
                  <Input
                    onChange={handleInputChange(setPhonenumber)}
                    value={phonenumber}
                    placeholder="change phone number"
                  />
                )}
              </div>

              <div className={`${editMode && "md:ml-12"} ml-2`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value={email} />
                ) : (
                  <Input
                    onChange={handleInputChange(setEmail)}
                    value={email}
                    placeholder="change email"
                  />
                )}
              </div>
            </div>

            <div className={`${editMode && "md:flex justify-between"}`}>
              <div className="md:ml-8 md:pl-1">
                <ProfileKey keyName="Gender" />
                {editMode ? (
                  <ProfileValue value={gender} />
                ) : (
                  <Input
                    onChange={handleInputChange(setGender)}
                    value={gender}
                  />
                )}
              </div>
              <div className="mr-2">
                <ProfileKey keyName="Working Health Center" />
                {editMode ? (
                  <ProfileValue value={selectedHealthCenterName} />
                ) : (
                  <Select onValueChange={setAssociatedHealthCenterId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Health Center" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Health Centers</SelectLabel>
                        {healthCenters.map((center) => (
                          <SelectItem key={center.id} value={center.id}>
                            {center.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Specific Info
            </div>

            <div className={`${editMode && "md:flex justify-between mx-8"}`}>
              <div className="">
                <ProfileKey keyName="Specialization" />
                {editMode ? (
                  <ProfileValue value={specialization} />
                ) : (
                  <Input
                    onChange={handleInputChange(setSpecialization)}
                    value={specialization}
                    placeholder="edit your specialization"
                  />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Hourly Price" />
                {editMode ? (
                  <ProfileValue value={hourlyRateInBirr} />
                ) : (
                  <Input
                    value={hourlyRateInBirr}
                    onChange={handleInputChange(setHourlyRateInBirr)}
                  />
                )}
              </div>

              <div className="">
                <ProfileKey keyName="Location" />
                {editMode ? (
                  <ProfileValue value={location} />
                ) : (
                  <Input
                    onChange={handleInputChange(setLocation)}
                    value={location}
                    placeholder="set location"
                  />
                )}
              </div>
            </div>
            <div
              className={`${editMode && "ml-2 md:flex justify-around"} mt-8`}
            >
              <div>
                <ProfileKey keyName="Verification status" />
                {editMode ? (
                  <ProfileValue
                    value={verified ? "Verified " : "not Verified"}
                  />
                ) : (
                  <Input
                    onChange={handleInputChange(setVerified)}
                    value={verified}
                  />
                )}
              </div>
              {/* <div>
                <ProfileKey keyName="Working Health center" />
                {editMode ? (
                  <ProfileValue value="Yekatit 12 General Hospital" />
                ) : (
                  <Input
                    onChange={handleInputChange(setAssociatedHealthCenterId)}
                    value={associatedHealthCenterId}
                    placeholder="change hospital"
                  />
                )}
              </div> */}
              <div>
                <ProfileKey keyName="Year of experience" />
                {editMode ? (
                  <ProfileValue value={yearOfExperience} />
                ) : (
                  <Input
                    onChange={handleInputChange(setYearOfExperience)}
                    value={yearOfExperience}
                    placeholder="change year of experience"
                  />
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
                <Button
                  className="my-6 bg-[#1F555D] text-white h-10 w-28 "
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/3 flex justify-center">
          {isMdScreen ? <CompleteProfile2 progress={100} /> : ""}
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
