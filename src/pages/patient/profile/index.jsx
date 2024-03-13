import { useState } from 'react';

// file import
import edit from "@/public/icons/edit.svg"
import back from "@/public/icons/back.svg"
import openEye from "@/public/icons/openEye.svg"
import closeEye from "@/public/icons/closeEye.svg"

// component import
import ProfilePicture from '@/components/profile/profilePicture';
import CompleteProfile from '@/components/profile/completeProfile';
import ProfileKey from '@/components/profile/profileInfo';
import ProfileValue from '@/components/profile/profileInfo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [editMode, setEditMode] = useState(false)

    return (
        <>
            <div className="flex mt-4">
                <div className="ml-2 mt-2 cursor-pointer">
                    <img src={back} alt="back icon"/>
                </div>
                <div className="ml-8 mt-1 font-semibold text-2xl font-serif">
                    Personal Profile
                </div>
            </div>
            <ProfilePicture/>
            <CompleteProfile progress = {80}/>
            <div className='flex justify-end mr-8 mt-4 gap-2 cursor-pointer' onClick={() => setEditMode(!editMode)}>
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
                    <div className='ml-2'>
                         <ProfileKey keyName="Full Name"/>
                        {editMode ?  <ProfileValue value= "David Chandler Bing"/> : <Input/>}
                    </div>

                    <div className='ml-2'>
                         <ProfileKey keyName="Phone Number" />
                         {editMode ? <ProfileValue value= "+251982314216"/> : <Input/>}
                    </div>

                    <div className='ml-2'>
                         <ProfileKey keyName="Email" />
                         {editMode ? <ProfileValue value= "nigusseyeabsira@gmail.com"/> : <Input/>}
                    </div>

                    {editMode ? <div className='flex gap-36'>

                       <div className='ml-2'>
                             <ProfileKey keyName="Password" />
                             <ProfileValue value= {showPassword ? "1234@Abc" : "********"}/>
                       </div>
                            <div className='cursor-pointer mt-6' onClick={() => setShowPassword(!showPassword)}>
                                 <img src={showPassword? openEye : closeEye} alt="open Eye"/>
                            </div>
                       </div> 
                       :
                       <>
                       <div className='ml-2'>
                          <ProfileKey keyName="Change Password" />
                          <div className='text-[#1F555D] ml-4 font-semibold'>Old Password</div>
                          <Input/>
                       </div>

                       <div className='ml-2'>
                        
                          <div className='text-[#1F555D] ml-4 font-semibold'>New Password</div>
                          <Input/>
                       </div>

                       <div className='ml-2'>
                          
                          <div className='text-[#1F555D] ml-4 font-semibold'>Confirm New Password</div>
                          <Input/>
                       </div>
                       
                       </>
                        }

                       
                       <div className='ml-2'>
                           <ProfileKey keyName="Gender" />
                           {editMode ?  <ProfileValue value= "Male"/> : <Input/>}
                       </div>

                    <div className='text-xl text-[#1F555D] font-semibold font-serif mb-4'>
                       specific Info
                    </div>
                    
                    <div className='ml-2'>
                           <ProfileKey keyName="Date of Birth" />
                           {editMode ?   <ProfileValue value= "22-2-2012"/> : <div className='flex gap-2'> <div><p className='pl-6 text-[#1F555D]'>DD</p><Input/></div> <div><p className='pl-6 text-[#1F555D]'>MM</p><Input/></div> <div><p className='pl-6 text-[#1F555D]'>YYYY</p><Input/></div></div> }
                       </div>

                    <div className='ml-2 mb-3 flex gap-24'>
                      <div className='ml-2'>
                           <ProfileKey keyName="Hight" />
                           {editMode ?  <ProfileValue value= "1.70m"/> : <Input/>}
                       </div>

                       <div className='ml-2'>
                           <ProfileKey keyName="Weight" />
                           {editMode ?   <ProfileValue value= "70Kg"/> : <Input/>}
                       </div>

                    </div>
                    <div className='ml-2'>
                           <ProfileKey keyName="National ID" />
                           {editMode ? <ProfileValue value= "889977-KO1"/> : <Input/>}
                       </div>

                       {editMode ?  "" : <Button className ="mt-6 bg-[#1F555D] text-white">Save</Button> }
                 </div>

           
        </>
    );
};

export default Profile;
