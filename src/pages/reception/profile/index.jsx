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
import Picture from "./Picture";
import doctor from "@/public/img/doctor.png";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHealthcenter,
  updateName as updateHealthCenterName,
  updateLocation as updateHealthCenterLocation,
} from "@/redux/healthcenterSlice";
import {
  updateFullName,
  updateGender,
  updatePhoneNumber,
} from "@/redux/adminSlice";
import { useMutation, useQuery } from "react-query";
import { updateAdmin, updateHealthCenter } from "./lib";
import { useToast } from "@/components/ui/use-toast";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const HealthCenterProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [licenseFile, setLicenseFile] = useState(null);
  const dispatch = useDispatch();
  const healthCenter = useSelector(selectHealthcenter);
  const admin = useSelector((state) => state.admin);
  const token = useSelector((state) => state.auth.token);
  const { toast } = useToast();
  const adminId = admin.id;
  const [healthCenterId, setHealthCenterId] = useState("");

  const { data, isLoading, isError } = useQuery(
    "getHealthCenters",
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(
          "http://localhost:5072/api/healthcenter/",
          config
        );
        return response.data.data;
      } catch (error) {
        throw error;
      }
    }
  );

  const updateAdminMutation = useMutation(
    (updatedData) => updateAdmin({ token, adminId, updatedData }),
    {
      onSuccess: (updatedData) => {
        console.log("adminUpdated: ", updatedData);
        if (updatedData) setEditMode(false);
        toast({
          title: "Success",
          description: "Admin updated successfully",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: "An error occurred",
        });
      },
    }
  );

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLicenseFile(file);
    }
  };
  const handleRemoveUpload = () => {
    setLicenseFile(null);
  };

  const handleSubmit = async () => {
    const formData = licenseFile ? new FormData() : null;
    formData?.append("file", licenseFile);

    // Update admin
    const adminData = {
      fullname: admin.fullname,
      phonenumber: admin.phonenumber,
      gender: admin.gender,
    };
    updateAdminMutation.mutate(adminData);
  };

  return (
    <>
      <div className="md:flex">
        <div className="md:w-3/4 mb-8">
          <div className="flex my-4">
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Health Center Profile</p>
            </div>
          </div>

          <div className="flex flex-col border border-solid mt-4 md:ml-24">
            <Picture
              image={
                admin?.imageUrl
                  ? "http://localhost:5072/" + admin?.imageUrl
                  : doctor
              }
            />

            {isMdScreen ? "" : <CompleteProfile progress={80} />}
            <div className="flex justify-end mr-8 mt-4 gap-2">
              <div>{!editMode && <img src={edit} alt="edit SVG" />}</div>
              <div
                className="text-[#1F555D] cursor-pointer"
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? "Cancel" : "Edit"}
              </div>
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Health Center Info
            </div>

            <div className={`${!editMode && "md:flex justify-around md:mb-4"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Health Center Name" />
                {!editMode ? (
                  <ProfileValue value={healthCenter.name} />
                ) : (
                  <Select onValueChange={(value) => setHealthCenterId(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="--Select--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Health Centers</SelectLabel>
                        {data?.map((hc) => {
                          return (
                            <SelectItem key={hc.id} value={hc.id}>
                              {hc.name}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="ml-2">
                <ProfileKey keyName="Location" />
                {!editMode ? (
                  <ProfileValue value={healthCenter.location} />
                ) : (
                  <Input
                    value={healthCenter.location}
                    onChange={(event) =>
                      dispatch(updateHealthCenterLocation(event.target.value))
                    }
                  />
                )}
              </div>
              {!editMode && (
                <div className={`ml-2`}>
                  <ProfileKey keyName="Email" />
                  <ProfileValue value={admin.email} />
                </div>
              )}
            </div>
            <div
              className={`${!editMode && "md:flex justify-start pl-4 md:mb-4"}`}
            >
              {!editMode && (
                <div className="ml-2 md:ml-16 md:pl-1">
                  <ProfileKey keyName="Verification status " />
                  <ProfileValue
                    value={admin.verified ? "Verified" : "Not Verified"}
                  />
                </div>
              )}

              {!editMode && (
                <div className="ml-10 md:ml-16 md:pl-1">
                  <ProfileKey keyName="License Information" />
                  <ProfileValue
                    value={
                      healthCenter.licensePath ? (
                        <a
                          href={`http://localhost:5072/${healthCenter.licensePath}`}
                          className="hover:underline hover:cursor-pointer"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex flex-row gap-1">
                            View License Info <FaExternalLinkAlt />{" "}
                          </div>{" "}
                        </a>
                      ) : (
                        "N/A"
                      )
                    }
                  />
                </div>
              )}
            </div>
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              Admin Info
            </div>

            <div
              className={`${!editMode && "md:flex justify-between md:mx-16"}`}
            >
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {!editMode ? (
                  <ProfileValue value={admin.fullname} />
                ) : (
                  <Input
                    value={admin.fullname}
                    onChange={(event) =>
                      dispatch(updateFullName(event.target.value))
                    }
                  />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {!editMode ? (
                  <ProfileValue value={admin.phonenumber} />
                ) : (
                  <Input
                    value={admin.phonenumber}
                    onChange={(event) =>
                      dispatch(updatePhoneNumber(event.target.value))
                    }
                  />
                )}
              </div>

              <div className="">
                <ProfileKey keyName="Gender" />
                {!editMode ? (
                  <ProfileValue
                    value={admin.gender === "M" ? "Male" : "Female"}
                  />
                ) : (
                  <Select
                    onValueChange={(value) => dispatch(updateGender(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="--Select--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        <SelectItem value="M">Male</SelectItem>
                        <SelectItem value="F">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            <div className="flex justify-center my-6">
              {editMode ? (
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
            {!editMode ? (
              ""
            ) : (
              <div className="flex justify-center">
                <Button
                  className="my-6 bg-[#1F555D] text-white h-10 w-28"
                  onClick={handleSubmit}
                >
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
export default HealthCenterProfile;
