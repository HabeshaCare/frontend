import { useDispatch, useSelector } from "react-redux";
import edit from "@/public/icons/edit.svg";
import { updateProfilePicture } from "./lib";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { updateImageUrl } from "@/redux/adminSlice";

const Picture = ({ image }) => {
  const id = useSelector((state) => state.admin.id);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const updateprofile = useMutation(
    ({ id, formData }) =>
      updateProfilePicture({ token, adminId: id, formData }),
    {
      onSuccess: (data) => {
        console.log("Profile update response data: ", data);
        if (data) dispatch(updateImageUrl(data.imageUrl));
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
    const formData = new FormData();
    formData.append("image", file);
    updateprofile.mutate({
      id,
      formData,
    });
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
