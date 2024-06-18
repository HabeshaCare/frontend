import React from "react";

function Picture({ image }) {
  return (
    <div className="border border-solid w-full relative bg-[#1F555D]">
      <label
        htmlFor="profile-picture" // Ensure correct JSX attribute
        className="absolute top-0 end-0 mr-2 cursor-pointer"
      ></label>
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
}

export default Picture;
