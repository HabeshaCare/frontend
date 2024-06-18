import React from "react";

const Content = ({
  doctorName,
  doctorSpecialization,
  timestamp,
  methodOfTreatment,
  generalAppearance,
}) => {
  return (
    <>
      <div className="flex justify-between mt-6">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div>
            <div className="font-bold">{doctorName}</div>
            <div className="text-[#B5B5C3]">{doctorSpecialization}</div>
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
        <div>
          <p className="font-semibold">{methodOfTreatment}</p>
        </div>
        <div className="w-1/3 text-[#5B5B3C]">{generalAppearance}</div>
      </div>
    </>
  );
};

const MedicalRecord = ({ recordsData, doctorsData }) => {
  return (
    <>
      <div className="flex justify-between mt-12 text-lg font-bold font-serif text-[#1F555D]">
        <div>Doctor's Name</div>
        <div>Record Date</div>
        <div>Method of treatment</div>
        <div className="">Additional Information</div>
      </div>
      {recordsData &&
        doctorsData &&
        recordsData.map((record) => {
          const doctor = doctorsData.find((doc) => doc.id === record.doctorId);
          return (
            <Content
              key={record.id}
              doctorName={doctor?.fullname}
              doctorSpecialization={doctor?.specialization}
              timestamp={record.timestamp}
              methodOfTreatment={record.methodOfTreatment}
              generalAppearance={record.generalAppearance}
            />
          );
        })}
    </>
  );
};

export default MedicalRecord;
