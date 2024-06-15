// src/components/PrescriptionCard.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const PrescriptionCard = ({ prescription, onComplete }) => {
  const { diagnosis, medicineName, doctorId, id, dosage, instructions, status } = prescription;

  const handleComplete = () => {
    if (onComplete) {
      onComplete(prescription.id); // Pass prescription id to handle complete action
    }
  };

  return (
    <div className="p-5">
      <div className="bg-indigo-100 p-4 rounded-md">
        <div className="uppercase tracking-widest text-sm text-indigo-600 font-semibold">Prescription</div>
        <p className="block mt-1 text-2xl leading-tight font-medium text-black">{ medicineName}</p>
      </div>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Diagnosis: <span className="text-gray-800">{diagnosis}</span></p>
        <p className="mt-4 text-lg text-gray-600">medicineName: <span className="text-gray-800">{ medicineName}</span></p>
        <p className="mt-4 text-lg text-gray-600">Status: <span className="text-gray-800">{status}</span></p>
      </div>
      
        <button
          onClick={handleComplete}
          className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition-all duration-300"
        >
          Complete
        </button>
      
    </div>
  );
};

export default PrescriptionCard;
