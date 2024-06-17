import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import RequesterDetailsForm from "./Requesterdetails";
import SampleDetailsForm from "./Sample details";
import RelevantClinicalInformationForm from "./Relevant clinical information";
import ExaminationRequestedForm from "./ExaminationRequestedForm";
import { Button } from "@/components/ui/button";

const ReqForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ExaminationRequestedForm />
      <Button className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-500">
        Submit
      </Button>
    </div>
  );
};

export default ReqForm;
