import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignProfilePicture } from "@/redux/doctorSlice";
import edit from "@/public/icons/edit.svg";
import doctor from "@/public/img/doctor.png";


const Picture = ({image}) => {
  const dispatch = useDispatch();
  const doctorimageUrl = useSelector((state) => state.doctor.doctorimageUrl);
  const [profilePicture, setProfilePicture] = useState(image);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      
      // Dispatch the action to update the Redux state
      dispatch(assignProfilePicture({ doctorimageUrl: imageUrl }));
      console.log("IMAGE URL,,,,", doctorimageUrl)
      console.log("I SHOULD BE PRINTED");
    }
  };

  return (
    <div className="border border-solid w-full relative bg-[#1F555D]">
      <label
        htmlFor="profile-picture"
        className="absolute top-0 end-0 mr-2 cursor-pointer"
      >
        <img src={edit} alt="edit SVG" className="text-white" />
        <div className="text-sm text-white">Edit Profile Picture</div>
        <input
          type="file"
          id="profile-picture"
          className="hidden"
          // accept="image/*"
          onChange={handlePictureUpload}
        />
      </label>
      <div className="w-full max-w-[400px] mx-auto">
        <img
          src={profilePicture}
          // src={doctorimageUrl || doctor}
          alt="doctor img"
          className="block mx-auto"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Picture;
