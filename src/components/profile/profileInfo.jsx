import React from "react";

const ProfileKey = ({ keyName }) => {
  return <div className="text-md font-bold font-serif">{keyName}</div>;
};

const ProfileValue = ({ value }) => {
  return (
    <div className="text-md font-semibold text-[#1F555D]">{value}</div>
  );
};

const ProfileInfo = ({ keyName, value }) => {
  return (
    <>
      <div className="pb-3">
        <ProfileKey keyName={keyName} />
        <ProfileValue value={value} />
      </div>
    </>
  );
};

export default ProfileInfo;
