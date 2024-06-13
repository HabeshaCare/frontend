import { useState } from "react";
import edit from "@/public/icons/edit.svg";

import picture from "@/public/img/PHOTO.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "@/lib/update/updatepatientprofilpicture";
import { assignProfilePicture } from "@/redux/patientSlice";
import { useMutation } from "react-query";

const PatientPicture = ({ image }) => {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(image);
  const id = useSelector((state) => state.patient.patientid);
  const token = useSelector((state) => state.auth.token);

  const updateprofile = useMutation(
    ({ data, token }) => updateProfilePicture(data, token),
    {
      onSuccess: (data) => {
        console.log("This should be the uploaded file path", data);
        console.log("data image,", data.data.imageUrl);
        // Update the profile picture state and Redux state with the new file path
        setProfilePicture(data.data.imageUrl);
        dispatch(assignProfilePicture({ patientimageUrl: data.data.imageUrl }));
      },
      onError: (error) => {
        console.log("Error uploading data", error);
      },
    }
  );
  console.log("image from picture", image);
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
    <>
      <div className="mt-2 ml-2 flex flex-col items-center">
        <img src={image} alt="Profile" className="rounded-full w-20 h-20" />

        <div className="mt-2">
          <label htmlFor="profile-picture" className=" flex cursor-pointer">
            <img src={edit} alt="edit SVG" />
            <div className="text-sm ml-1 text-[#1F555D]">
              Upload Profile Picture
            </div>
            <input
              name="image"
              type="file"
              id="profile-picture"
              className="hidden"
              onChange={`handlePictureUpload`}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PatientPicture;
