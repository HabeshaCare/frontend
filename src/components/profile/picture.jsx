import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignProfilePicture } from "@/redux/doctorSlice";
import edit from "@/public/icons/edit.svg";
import doctor from "@/public/img/doctor.png";
import { updateProfilePicture } from "@/lib/update/updateprofilepicture";
import { useMutation } from "react-query";

const Picture = ({ image }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.doctor.doctorid);
  const token = useSelector((state) => state.auth.token);
  const [profilePicture, setProfilePicture] = useState(image);

  const updateprofile = useMutation(
    ({ data, token }) => updateProfilePicture(data, token),
    {
      onSuccess: (data) => {
        console.log("This should be the uploaded file path", data);
        console.log("data image,", data.data.imageUrl);
        // Update the profile picture state and Redux state with the new file path
        setProfilePicture(data.data.imageUrl);
        dispatch(assignProfilePicture({ doctorimageUrl: data.data.imageUrl }));
      },
      onError: (error) => {
        console.log("Error uploading data", error);
      },
    }
  );

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateprofile.mutate({
        data: { id, file },
        token,
      });
    }
  };

  return (
    <div className="border border-solid w-full relative bg-[#1F555D]">
      <label
        htmlFor="profile-picture" // Ensure correct JSX attribute
        className="absolute top-0 end-0 mr-2 cursor-pointer"
      >
        <img src={edit} alt="edit SVG" className="text-white" />
        <div className="text-sm text-white">Edit Profile Picture</div>
        <input
          name="image"
          type="file"
          id="profile-picture"
          className="hidden"
          onChange={handlePictureUpload}
        />
      </label>
      <div className="w-full max-w-[400px] mx-auto">
        <img
          // Use profilePicture state if available, otherwise fallback to image prop
          src={image} 
          alt="doctor img"
          className="block mx-auto"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Picture;
