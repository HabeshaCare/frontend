import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import RequesterDetailsForm from "./Requesterdetails";
import SampleDetailsForm from "./Sample details";
import RelevantClinicalInformationForm from "./Relevant clinical information";
import ExaminationRequestedForm from "./ExaminationRequestedForm";

const ReqForm = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div>
        <RequesterDetailsForm />
        <SampleDetailsForm />
      </div>
      <div>
        <RelevantClinicalInformationForm />
        <ExaminationRequestedForm />
      </div>
      <button type="button">Submit</button>
    </div>
  );
};

export default ReqForm;
