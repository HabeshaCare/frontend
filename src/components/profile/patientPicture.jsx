import { useState } from "react";
import edit from "@/public/icons/edit.svg";

import picture from "@/public/img/PHOTO.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "@/lib/update/updatepatientprofilpicture";
import { assignProfilePicture } from "@/redux/patientSlice";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
const PatientPicture = ({ image }) => {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(image);
  const id = useSelector((state) => state.patient.patientid);
  const token = useSelector((state) => state.auth.token);
  const { toast } = useToast();

  const updateprofile = useMutation(
    ({ data, token }) => updateProfilePicture(data, token),
    {
      onSuccess: (data) => {
        setProfilePicture(data.data.imageUrl);
        dispatch(assignProfilePicture({ patientimageUrl: data.data.imageUrl }));
        toast({
          title: "Success!",
          description: "Profile picture updated successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
      },
      onError: (error) => {
        toast({
          title: "Error!",
          description:
            "invalid file type. Please insert PNG and JPG file type.",
          type: "error",
        });
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
              onChange={handlePictureUpload}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PatientPicture;
