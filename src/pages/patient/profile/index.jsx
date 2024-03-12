import { CircularProgress } from '@/components/ui/progress';
import { useState } from 'react';
import picture from "@/public/img/PHOTO.jpg"
import edit from "@/public/icons/edit.svg"
import back from "@/public/icons/back.svg"
import openEye from "@/public/icons/openEye.svg"
import closeEye from "@/public/icons/closeEye.svg"
const Profile = () => {
    const [profilePicture, setProfilePicture] = useState(picture);
    const [showPassword, setShowPassword] = useState(false)

    const handlePictureUpload = (event) => {
        const file = event.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
    };

    return (
        <>
            <div className="flex mt-4">
                <div className="ml-2 mt-2">
                    <img src={back} alt="back icon" />
                </div>
                <div className="ml-14 mt-1 font-semibold text-2xl font-serif">
                    Personal Profile
                </div>
            </div>
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
                       <div className='text-sm ml-1 text-[#1F555D]'> Upload Profile Picture</div>
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
            <div className='flex items-center bg-[#A7C2C5] mx-6 my-4 h-20 rounded-3xl'>
                <div className='mx-4'>
                <CircularProgress value={80} />
                </div>
                <div className='text-md font-semibold'>
                    Complete Your Profile
                </div>
            </div>
            <div className='flex justify-end mr-8 mt-4 gap-2 cursor-pointer'>
                <div>
                <img src={edit} alt="edit SVG" />
                </div>
                <div className='text-[#1F555D]'>
                    Edit
                </div>
            </div>
            <div className='flex flex-col border border-solid m-4 p-2'>
                    <div className='text-xl text-[#1F555D] font-semibold font-serif mb-4'>
                        General Info
                    </div>
                    <div className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          Full Name
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          David Chandler Bing
                        </div>
                    </div>

                    <div className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          Phone Number
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          +251982314216
                        </div>
                    </div>

                    <div className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          Email
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          nigusseyeabsira@gmail.com
                        </div>
                    </div>

                    <div className=' ml-2 mb-3'>
                        <div className='flex gap-36'>
                            <div>
                            <div className='text-md font-semibold'>
                          Password
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                       {showPassword ? "1234@Abc" : "**********"}
                      </div> 
                            </div>
                       <div className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                        <img src={showPassword? openEye : closeEye} alt="open Eye" />
                       </div>
                        </div>
                       
                      
                    </div>

                    <div className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          Gender
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          Male
                        </div>
                    </div>

                    <div className='text-xl text-[#1F555D] font-semibold font-serif mb-4'>
                       specific Info
                    </div>

                    <div  className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          Date of Birth
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          22-2-2012
                        </div>
                    </div>

                    <div className='ml-2 mb-3 flex gap-40'>

                        <div className='flex flex-col'>
                            <div className='text-md font-semibold'>Hight</div>
                            <div className='text-sm ml-2 mt-1 text-[#1F555D]'>1.70m</div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='text-md font-semibold'>Weight</div>
                            <div className='text-sm ml-2 mt-1 text-[#1F555D]'>70Kg</div>
                        </div>

                    </div>

                    <div className='ml-2 mb-3'>
                       <div className='text-md font-semibold'>
                          National ID
                       </div>
                       <div className='text-sm ml-2 mt-1 text-[#1F555D]'>
                          889977-KO1
                        </div>
                    </div>



            </div>
        </>
    );
};

export default Profile;
