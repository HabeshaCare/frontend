import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignProfilePicture } from "@/redux/doctorSlice";
import edit from "@/public/icons/edit.svg";
import doctor from "@/public/img/doctor.png";
import { updateProfilePicture } from "@/lib/update/updateprofilepicture";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Picture = ({ image }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.doctor.doctorid);
  const token = useSelector((state) => state.auth.token);
  const [profilePicture, setProfilePicture] = useState(image);
  const { toast } = useToast();

  const updateprofile = useMutation(
    ({ data, token }) => updateProfilePicture(data, token),
    {
      onSuccess: (data) => {
        setProfilePicture(data.data.imageUrl);
        dispatch(assignProfilePicture({ doctorimageUrl: data.data.imageUrl }));
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
