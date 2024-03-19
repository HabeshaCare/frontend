
import { useState } from "react";
import edit from "@/public/icons/edit.svg"

import picture from "@/public/img/PHOTO.jpg"

const ProfilePicture = () => {

    const [profilePicture, setProfilePicture] = useState(picture);

    const handlePictureUpload = (event) => {
        const file = event.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
    };


    return(
        <>
        <div className="mt-2 ml-2 flex flex-col items-center">
                {profilePicture && (
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="rounded-full w-20 h-20"
                    />
                )}
                <div className="mt-2">
                    <label htmlFor="profile-picture" className=" flex cursor-pointer">
                    <img src={edit} alt="edit SVG" />
                       <div className='text-sm ml-1 text-[#1F555D]'>Upload Profile Picture</div>
                        <input
                            type="file"
                            id="profile-picture"
                            className="hidden"
                            accept="image/*"
                            onChange={handlePictureUpload}
                        />
                    </label>
                </div>
            </div>
        </>
    )
}

export default ProfilePicture