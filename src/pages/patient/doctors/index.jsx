import { Input } from "@/components/ui/input";
import React from "react";

function Doctors() {
  return (
    <>
      <div className="mx-10 sm:mx-32 lg:mx-72 mt-4">
        <Input placeholder="Search Your doctor" className="h-12" />
      </div>
    </>
  );
}

export default Doctors;
