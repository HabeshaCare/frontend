import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import postLabTestRequest from "@/lib/service/labtestrequest";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";

const ReqForm = ({ labId, patientId, requestorId, onSubmit }) => {
  const [formData, setFormData] = useState([]);
  const { toast } = useToast();
  const userToken = useSelector((state) => state.auth.token);

  // Mutation hook to handle the API request
  const sendlabtest = useMutation(
    // Mutation function to perform the API request
    ({ token, data, labId }) => postLabTestRequest({ token, data, labId }),
    {
      onSuccess: () => {
        toast({
          title: "Success!",
          description: "Lab test request submitted successfully.",
          action: <ToastAction altText="Continue">Continue</ToastAction>,
        });
        onSubmit(); // Notify parent component about the completion
      },
      onError: (error) => {
        if (
          error.response.data &&
          error.response.data.errors &&
          error.response.data.errors[0].includes(
            "not available in the laboratory"
          )
        ) {
          toast({
            title: "Error!",
            description: "Selected test is not available in the laboratory.",
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          });
        } else {
          toast({
            title: "Error!",
            description: "Error submitting lab test request.",
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          });
        }
      },
    }
  );

  const handleSpecificTestsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => [...prev, value]);
    } else {
      setFormData((prev) => prev.filter((test) => test !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finaldata = {
      testNames: formData,
      patientId: patientId,
      requestorId: requestorId,
    };
    sendlabtest.mutate({ token: userToken, data: finaldata, labId }); // Trigger the mutation
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold mb-4">
        Laboratory Test Request Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Select specific tests:
          </label>
          <div className="ml-6 grid grid-cols-3 gap-2">
            {[
              "G2000",
              "G2000-X",
              "GT9",
              "GTI",
              "NEO",
              "ES",
              "HB3",
              "DFS",
              "LFT",
              "RFT",
              "TFT",
              "MAC",
              "LGL",
              "LIP",
              "CEA",
              "CA 1",
              "CA 5",
              "CA 9",
              "PSA",
              "AFP",
              "Glucose",
              "HIV 1 & 2",
              "HbA1c",
              "HBsAg",
              "H. pylori",
              "Uric Acid",
              "Free T4",
              "FBE (incl. ESR)",
              "FBC",
              "Hb",
              "TWDC",
              "Platelets",
              "ABO & Rh (D)",
              "Malaria parasites",
              "Urine FEME",
              "RPR (VDRL)",
              "AFB (ZN) Smear Only",
              "AFB Smear & Culture",
              "Histology",
              "Non-Gynae/FNASite",
              "Microscopy/Culture/Sensitivity",
            ].map((test) => (
              <label key={test} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={test}
                  checked={formData.includes(test)}
                  onChange={handleSpecificTestsChange}
                  className="mr-2"
                />
                {test}
              </label>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReqForm;
