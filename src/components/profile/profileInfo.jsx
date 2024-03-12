import React from "react";

const ProfileKey = ({keyName}) => {
    return (
            <div className='text-md font-semibold'>
                {keyName}
            </div>
    );
};

const ProfileValue = ({value}) => {
    return (
        <div className='text-sm ml-2 text-[#1F555D]'>
            {value}
        </div>
    );
};

const ProfileInfo = ({keyName, value}) => {
    return (
        <>
         <div className='ml-2 mb-3'>
            <ProfileKey keyName={keyName} />
            <ProfileValue value={value} />
         </div>
        </>
    );
};

export default ProfileInfo;
