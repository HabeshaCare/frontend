import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
import edit from "@/public/icons/edit.svg";
import back from "@/public/icons/back.svg";
import ProfilePicture from "@/components/profile/profilePicture";
import { CompleteProfile } from "@/components/profile/completeProfile";
import { CompleteProfile2 } from "@/components/profile/completeProfile";
import ProfileKey from "@/components/profile/profileInfo";
import ProfileValue from "@/components/profile/profileInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GetUserData from "@/lib/profile/getUserData";
import axios from "axios";
import { Mutation, useMutation } from "react-query";

export const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const { data, isLoading, isError } = useQuery('data', GetUserData);
  const [name, setName] = useState("");
  const [pno, setPno] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [nationalId, setNationalId] = useState("");
  useEffect(() => {
    setName(data?.data?.fullname)
    setPno(data?.data?.phonenumber)
    setEmail(data?.data?.email)
    setGender(data?.data?.gender)
    setHeight(data?.data?.height)
    setWeight(data?.data?.weight)
    setNationalId(data?.data?.nationalId)


  }, [editMode, data])

  const handleInputChange = (setStateFunction) => {
    return (event) => {
      setStateFunction(event.target.value);
      console.log('Name:', name);
      console.log('Phone Number:', pno);
      console.log('Email:', email);
      console.log('Gender:', gender);
      console.log('Height:', height);
      console.log('Weight:', weight);
      console.log('National ID:', nationalId);
    };
  };
  const updatedData = {
    fullname: name,
    gender: gender,
    nationalId: nationalId,
    height: height,
    weight: weight,
    
  }
  const user_id = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  const url = 'http://localhost:5072/api/patient/' + user_id + '/profile';
  const updatData = useMutation((dataToSendToBackend) => axios.put(url, dataToSendToBackend,config),  {
    onSuccess: () => {
      // Handle successful update
      console.log('success')
    },
    onError: () => {
      // Handle error
    }
  })
  const handleSubmit = () => {
    updatData.mutate(updatedData);
  };


  if (isLoading) {
    console.log('Loading...');
    // You can render a loading indicator here
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log('Error fetching data');
    // You can render an error message here
    return <div>Error fetching data</div>;
  }

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
            <div className="text-[#5F95DC]">Edit</div>
          </div>
          <div className="flex flex-col border border-solid mt-4 mx-4 p-2">
            <div className="text-xl text-[#5F95DC] font-semibold font-serif mb-4">
              General Info
            </div>
            <div className={`${editMode && "md:flex justify-around"}`}>
              <div className="ml-2">
                <ProfileKey keyName="Full Name" />
                {editMode ? (
                  <ProfileValue value={data.data.fullname} />
                ) : (
                  <Input
                    type="text"
                    value={name} // Pass the state variable as the value
                    onChange={handleInputChange(setName)} // Pass the handler function to update the state
                    placeholder="Enter your name" // Example placeholder text
                  />
                )}
              </div>

              <div className="ml-2">
                <ProfileKey keyName="Phone Number" />
                {editMode ? <ProfileValue value={data.data.phonenumber} /> : <Input
                  type="text"
                  value={pno} // Pass the state variable as the value
                  onChange={handleInputChange(setPno)} // Pass the handler function to update the state
                  placeholder="Enter your phonenumber" // Example placeholder text
                />}
              </div>

              <div className={`${editMode && "md:ml-12"} ml-2`}>
                <ProfileKey keyName="Email" />
                {editMode ? (
                  <ProfileValue value={data.data.email} />
                ) : (
                  <Input
                    type="text"
                    value={email} // Pass the state variable as the value
                    onChange={handleInputChange(setEmail)} // Pass the handler function to update the state
                    placeholder="Enter your Email" // Example placeholder text
                  />
                )}
              </div>
            </div>
            <div className="ml-2 md:pl-32">
              <ProfileKey keyName="Gender" />
              {editMode ? <ProfileValue value={data.data.gender} /> : <Input
                type="text"
                value={gender} // Pass the state variable as the value
                onChange={handleInputChange(setGender)} // Pass the handler function to update the state
                placeholder="Enter your gender" // Example placeholder text
              />}
            </div>


            <div className="text-xl text-[#5F95DC] font-semibold font-serif mb-4">
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
                      <p className="pl-6 text-[#5F95DC]">DD</p>
                      <Input
                        type="text"
                        value={data.data.height} // Pass the state variable as the value
                        placeholder="dd" // Example placeholder text
                      />
                    </div>{" "}
                    <div>
                      <p className="pl-6 text-[#5F95DC]">MM</p>
                      <Input
                        type="text"
                        value={data.data.height} // Pass the state variable as the value
                        placeholder="mm" // Example placeholder text
                      />
                    </div>{" "}
                    <div>
                      <p className="pl-6 text-[#5F95DC]">YYYY</p>
                      <Input
                        type="text"
                        value={data.data.height} // Pass the state variable as the value
                        placeholder="YYYY" // Example placeholder text
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="ml-2 mb-3 flex gap-20">
                <div className="ml-2">
                  <ProfileKey keyName="Hight" />
                  {editMode ? <ProfileValue value="1.70m" /> : <Input
                    type="text"
                    value={height} // Pass the state variable as the value
                    onChange={handleInputChange(setHeight)} // Pass the handler function to update the state
                    placeholder=" height" // Example placeholder text
                  />}
                </div>

                <div className="">
                  <ProfileKey keyName="Weight" />
                  {editMode ? <ProfileValue value="70Kg" /> : <Input
                    type="text"
                    value={weight} // Pass the state variable as the value
                    onChange={handleInputChange(setWeight)} // Pass the handler function to update the state
                    placeholder=" weight" // Example placeholder text
                  />}
                </div>
              </div>
            </div>
            <div className={`md:ml-8 ${editMode ? "ml-2" : "md:ml-2"} `}>
              <ProfileKey keyName="National ID" />
              {editMode ? <ProfileValue value={data.data.nationalId} /> : <Input
                type="text"
                value={nationalId} // Pass the state variable as the value
                onChange={handleInputChange(setNationalId)} // Pass the handler function to update the state
                placeholder="Enter your national Id" // Example placeholder text
              />}
            </div>

            {editMode ? (
              ""
            ) : (
              <Button onClick={handleSubmit} className="mt-6 bg-[#5F95DC] text-white">Save</Button>
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
export default Profile
