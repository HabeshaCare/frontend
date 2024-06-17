import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ReportForm from "./medicalrecordfield";
import PrescriptionForm from "./prescriptionform";
import sendPrescription from "@/lib/service/sendprescription";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSelector } from "react-redux";

const CombinedForm = ({ onSubmit }) => {
  const [medicalRecordId, setMedicalRecordId] = useState(null);
  const { toast } = useToast();
  const userToken = useSelector((state) => state.auth.token);

  const sendPrescriptionMutation = useMutation(
    ({ token, data, recordId }) => sendPrescription(token, data, recordId),
    {
      onSuccess: () => {
        toast({
          title: "Success!",
          description: "Prescription submitted successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        onSubmit(); // Notify parent component about the completion
      },
      onError: (error) => {
        toast({
          title: "Error!",
          description: "Error submitting prescription.",
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      },
    }
  );

  const handleReportSubmit = (data) => {
    const recordId = data.data.id; // Extract medical record ID from the response
    console.log("Medical record ID:", recordId);
    setMedicalRecordId(recordId);
  };

  const handlePrescriptionSubmit = (formData) => {
    if (medicalRecordId) {
      sendPrescriptionMutation.mutate({
        token: userToken,
        data: formData,
        recordId: medicalRecordId,
      });
    } else {
      toast({
        title: "Error!",
        description: "Submit medical report first.",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Medical Report</h3>
      <ReportForm onSubmit={handleReportSubmit} />
      {medicalRecordId && (
        <>
          <h3 className="font-bold text-lg">Prescription</h3>
          <PrescriptionForm onSubmit={handlePrescriptionSubmit} />
        </>
      )}
    </div>
  );
};

export default CombinedForm;
