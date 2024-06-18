import React from "react";

const Content = ({
  medicineName,
  doctorName,
  doctorSpecialization,
  timestamp,
  diagnosis,
}) => {
  return (
    <>
      <div className="flex justify-between mx-8 text-base mt-6">
        <div>
          <div className="text-left font-bold">{medicineName}</div>
          <div className="text-left text-[#B5B5C3]"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">{doctorName}</p>
            <p className="text-left text-[#B5B5C3]">{doctorSpecialization}</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">
            {new Date(timestamp).toLocaleDateString()}
          </p>
          <p className="text-[#B5B5C3]">
            {new Date(timestamp).toLocaleTimeString()}
          </p>
        </div>
        <div className="text-base font-semibold text-[#5B5B3C]">
          {diagnosis}
        </div>
      </div>
    </>
  );
};

const Prescription = ({ prescriptionsData, doctorsData }) => {
  return (
    <>
      <div className="flex justify-between mt-12 mx-8 text-lg font-bold font-serif text-[#1F555D]">
        <div>Medication Name</div>
        <div>Prescribed By</div>
        <div>Date</div>
        <div>Diagnosis</div>
      </div>
      {prescriptionsData &&
        doctorsData &&
        prescriptionsData.map((prescription) => {
          const doctor = doctorsData.find(
            (doc) => doc.id === prescription.doctorId
          );
          return (
            <Content
              key={prescription.id}
              medicineName={prescription.medicineName}
              doctorName={doctor?.fullname}
              doctorSpecialization={doctor?.specialization}
              timestamp={prescription.timestamp}
              diagnosis={prescription.diagnosis}
            />
          );
        })}
    </>
  );
};

export default Prescription;
