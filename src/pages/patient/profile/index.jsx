import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import edit from "@/public/icons/edit.svg";
import PatientPicture from "@/components/profile/patientPicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { set } from "date-fns";
import { updateProfile } from "@/lib/update/updatepatientprofile";
import { updateprofile } from "@/redux/patientSlice";
import { useMutation, useQuery } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import user from "@/public/img/PHOTO.jpg";
import GetPatient from "@/lib/profile/getpatient";

export const PatientProfile = () => {
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [weight, setWeight] = useState("");
  const [hight, setHight] = useState("");
  const [dataofbirth, setDateOfBirth] = useState("");
  const [currentBalance, setBalance] = useState("");
  const [imageUrl, setImageurl] = useState("");

  const dispatch = useDispatch();
  const { toast } = useToast();

  const patientData = useSelector((state) => state.patient);
  const userToken = useSelector((state) => state.auth.token);

  console.log("pateint data", patientData);

  useEffect(() => {
    if (patientData) {
      const {
        patientid,
        patientemail,
        patientname,
        patientphone,
        patientgender,
        patientimageUrl,
        patientlocation,
        patientnationalId,
        patientheight,
        patientweight,
        patientdateOfBirth,
        patientcurrentBalance,
      } = patientData;
      setFullname(patientname);
      setPhonenumber(patientphone);
      setEmail(patientemail);
      setGender(patientgender);
      setLocation(patientlocation);
      setId(patientid);
      setHight(patientheight);
      setWeight(patientweight);
      setImageurl(patientimageUrl);
      setNationalId(patientnationalId);
      setDateOfBirth(patientdateOfBirth);
      setBalance(patientcurrentBalance);
    }
  }, [patientData]);
  console.log("patient name from profile", fullname);
  const handleInputChange = (setStateFunction) => {
    return (event) => {
      setStateFunction(event.target.value);
    };
  };
  const updatedData = {
    fullname: fullname,
    gender: gender,
    email: email,
    phonenumber: phonenumber,
    nationalId: nationalId,
    hight: hight,
    weight: weight,
    dateofbirth: dataofbirth,
    id: id,
    currentBalance: currentBalance,
  };
  const updatedprofile = useMutation(
    ({ token, data }) => updateProfile(data, token),
    {
      onSuccess: (updatedData) => {
        console.log("Profile updated successfully:", updatedData);
        toast({
          title: "Success!",
          description: "Profile updated successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        setEditMode(true);
        dispatch(
          updateprofile({
            patientid: id,
            patientname: fullname,
            patientphone: phonenumber,
            patientemail: email,
            patientgender: gender,
            patientlocation: location,
            patientnationalId: nationalId,
            patientweight: weight,
            patientheight: hight,
            patientdateOfBirth: dataofbirth,
            patientcurrentBalance: currentBalance,
          })
        );
      },
      onError: (error) => {
        console.log("token from mutation", userToken);
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
    ["patientProfile", userToken, patientData?.patientid],
    () => GetPatient({ token: userToken, id: patientData?.patientid }),
    {
      enabled: !!userToken && !!patientData?.patientid,
      onSuccess: (data) => {
        console.log("Patient data fetched successfully:", data);
        dispatch(
          updateprofile({
            patientid: id,
            patientname: data.data.fullname,
            patientphone: data.data.phonenumber,
            patientemail: data.data.email,
            patientgender: data.data.gender,
            patientlocation: data.data.location,
            patientnationalId: data.data.nationalId,
            patientweight: data.data.weight,
            patientheight: data.data.height,
            patientdateOfBirth: data.data.dateOfBirth,
            patientcurrentBalance: data.data.currentBalance,
          })
        );
      },
      onError: (error) => {
        console.error("Error fetching patient data:", error);
      },
      refetchOnMount: true,
    }
  );
  // useEffect(() => {
  //   if (updatedprofile.isSuccess) {
  //     // Optionally trigger refetch to ensure the UI is up to date
  //     refetch();
  //   }
  // }, [updatedprofile.isSuccess, refetch]);

  const handleSubmit = () => {
    console.log("Token before mutation:", userToken);
    updatedprofile.mutate({
      token: userToken,
      data: {
        id,
        fullname,
        gender,
        email,
        phonenumber,
        location,
        nationalId,
        hight,
        weight,
        dataofbirth,
        location,
        currentBalance,
        // Add other fields if needed
      },
    });
    setEditMode(true);
  };

  return (
    <>
      <div className="md:flex">
        <div className="md:w-2/3">
          <div className="flex my-4">
            <div className="mt-1 font-semibold text-2xl font-serif flex justify-center w-full">
              <p>Personal Profile</p>
            </div>
          </div>
          <PatientPicture image={imageUrl? "http://localhost:5072/" + imageUrl : user} />

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
            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 ml-4">
              General Info
            </div>
            <div className={`${editMode && "md:flex justify-around"}`}>
              <div>
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

              <div>
                <ProfileKey keyName="Phone Number" />
                {editMode ? (
                  <ProfileValue value={phonenumber} />
                ) : (
                  <Input
                    onChange={handleInputChange(setPhonenumber)}
                    placeholder="Enter your phone number"
                    value={phonenumber}
                  />
                )}
              </div>

              <div className={`${editMode && "md:ml-12"}`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value={email} />
                ) : (
                  <Input
                    onChange={handleInputChange(setEmail)}
                    placeholder="Enter your email"
                    value={email}
                  />
                )}
              </div>
            </div>
            <div className={`${editMode && "md:flex justify-between mx-6"}`}>
              <div>
                <ProfileKey keyName="Gender" />
                {editMode ? (
                  <ProfileValue value={gender} />
                ) : (
                  <Input
                    onChange={handleInputChange(setGender)}
                    placeholder="Enter your gender"
                    value={gender}
                  />
                )}
              </div>
              <div>
                <ProfileKey keyName="Location" />
                {editMode ? (
                  <ProfileValue value={location} />
                ) : (
                  <Input
                    onChange={handleInputChange(setLocation)}
                    placeholder="Enter your location"
                    value={location}
                  />
                )}
              </div>
              <div>
                <ProfileKey keyName="Current Balance" />
                {editMode ? (
                  <ProfileValue value={currentBalance} />
                ) : (
                  <Input
                    onChange={handleInputChange(setBalance)}
                    placeholder="Enter your balance"
                    value={currentBalance}
                  />
                )}
              </div>
            </div>

            <div className="text-xl text-[#1F555D] font-semibold font-serif mb-4 ml-4">
              specific Info
            </div>

            <div className={`${editMode && "md:flex justify-between"}`}>
              <div className={`md:ml-4 ${editMode ? "ml-2" : "md:ml-2"} `}>
                <ProfileKey keyName="Date of Birth" />
                {editMode ? (
                  <ProfileValue value={dataofbirth} />
                ) : (
                  <div>
                    <Input
                      onChange={handleInputChange(setDateOfBirth)}
                      placeholder="Enter your date of birth"
                      value={dataofbirth}
                    />
                  </div>
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Hight in cm" />
                {editMode ? (
                  <ProfileValue value={hight} />
                ) : (
                  <Input
                    onChange={handleInputChange(setHight)}
                    placeholder="Enter your hight"
                    value={hight}
                  />
                )}
              </div>

              <div className="">
                <ProfileKey keyName="Weight in Kg" />
                {editMode ? (
                  <ProfileValue value={weight} />
                ) : (
                  <Input
                    onChange={handleInputChange(setWeight)}
                    placeholder="Enter your weight"
                    value={weight}
                  />
                )}
              </div>
            </div>
            <div className={`md:ml-4 ${editMode ? "ml-2" : "md:ml-2"} `}>
              <ProfileKey keyName="National ID" />
              {editMode ? (
                <ProfileValue value={nationalId} />
              ) : (
                <Input
                  onChange={handleInputChange(setNationalId)}
                  placeholder="Enter your national id"
                  value={nationalId}
                />
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
          {isMdScreen ? <CompleteProfile2 progress={70} /> : ""}
        </div>
      </div>
    </>
  );
};
export default PatientProfile;
