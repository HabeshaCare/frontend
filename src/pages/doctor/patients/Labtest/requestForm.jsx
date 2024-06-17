import React, { useState } from "react";

import ExaminationRequestedForm from "./ExaminationRequestedForm";
import { Button } from "@/components/ui/button";

const ReqForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ExaminationRequestedForm />
      <Button className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-600">
        Submit
      </Button>
    </div>
  );
};

export default ReqForm;
