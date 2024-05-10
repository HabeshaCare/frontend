import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import RequesterDetailsForm from "./Requesterdetails";
import SampleDetailsForm from "./Sample details";
import RelevantClinicalInformationForm from "./Relevant clinical information";
import ExaminationRequestedForm from "./ExaminationRequestedForm";

const ReqForm = () => {
    return (
        <div>
            <RequesterDetailsForm />
            <SampleDetailsForm />
            <RelevantClinicalInformationForm />
            <ExaminationRequestedForm />

        </div>
    );
};

export default ReqForm;
