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
import { useMutation } from "react-query";
import Picture from "./Pricture";
import doctor from "@/public/img/doctor.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { updateAdmin } from "./lib";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AdminProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState(null);
  const [phonenumber, setPhonenumber] = useState("");

  const { toast } = useToast();

  const adminData = useSelector((state) => state.admin);
  const adminId = adminData?.id;
  const userToken = useSelector((state) => state.auth.token);

  const handleInputChange = (setStateFunction) => {
    return (event) => {
      setStateFunction(event.target.value);
    };
  };
  const updatedprofile = useMutation(
    ({ token, data }) => updateAdmin({ token, adminId, updatedData: data }),
    {
      onSuccess: (updatedData) => {
        toast({
          title: "Success!",
          description: "Profile updated successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        setEditMode(false);
      },
      onError: (error) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was an error updating profile.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      },
    }
  );

  const handleSubmit = () => {
    updatedprofile.mutate({
      token: userToken,
      data: {
        fullname,
        gender,
        phonenumber,
        location,
      },
    });
    setEditMode(false);
  };

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
            <Picture
              image={
                adminData?.imageUrl
                  ? "http://localhost:5072/" + adminData?.imageUrl
                  : doctor
              }
            />

            {isMdScreen ? "" : <CompleteProfile progress={80} />}
            <div className="flex justify-end mr-8 mt-4 gap-2">
              <div>
                <img src={edit} alt="edit SVG" />
              </div>
              <div
                className="text-[#1F555D] cursor-pointer"
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? "Cancel" : "Edit"}
              </div>
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 pl-8">
              General Info
            </div>

            <div className={`${!editMode && "md:flex justify-around md:mb-4"}`}>
              <div className="">
                <ProfileKey keyName="Full Name" />
                {!editMode ? (
                  <ProfileValue value={adminData?.fullname} />
                ) : (
                  <Input
                    onChange={handleInputChange(setFullname)}
                    placeholder="Enter your full name"
                    value={fullname}
                  />
                )}
              </div>

              <div className="">
                <ProfileKey keyName="Email" />
                {!editMode}
                <ProfileValue value={adminData?.email} />
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {!editMode ? (
                  <ProfileValue value={phonenumber} />
                ) : (
                  <Input
                    onChange={handleInputChange(setPhonenumber)}
                    value={phonenumber}
                    placeholder="change phone number"
                  />
                )}
              </div>
            </div>

            <div className="">
              <ProfileKey keyName="Gender" />
              {!editMode ? (
                <ProfileValue
                  value={adminData?.gender === "M" ? "Male" : "Female"}
                />
              ) : (
                <Select onValueChange={handleInputChange(setGender)}>
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
            <div className="">
              <ProfileKey keyName="Location" />
              {!editMode ? (
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
          <div className={`${!editMode && "ml-2 md:flex justify-around"} mt-8`}>
            <div>
              <ProfileKey keyName="Verification status" />
              <ProfileValue
                value={adminData?.verified ? "Verified " : "not Verified"}
              />
            </div>
          </div>

          {!editMode ? (
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
        {isMdScreen ? <CompleteProfile2 progress={80} /> : ""}
      </div>
    </>
  );
};
export default AdminProfile;
