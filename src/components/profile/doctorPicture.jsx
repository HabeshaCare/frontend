import edit from "@/public/icons/edit.svg";
import doctor from "@/public/img/doctor.png";
import { useState } from "react";

const DoctorPicture = () => {
  const [profilePicture, setProfilePicture] = useState(doctor);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="border border-solid w-full relative bg-[#1F555D]">
        <label
          htmlFor="profile-picture"
          className="absolute top-0 end-0 mt-2 mr-2 cursor-pointer"
        >
          <img src={edit} alt="edit SVG" className="text-white" />
          <div className="text-sm ml-1 text-white ">Edit Profile Picture</div>
          <input
            type="file"
            id="profile-picture"
            className="hidden"
            accept="image/*"
            onChange={handlePictureUpload}
          />
        </label>
        <div className="w-full max-w-[400px] mx-auto">
          <img
            src={profilePicture}
            alt="doctor img"
            className="block mx-auto"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default DoctorPicture;
