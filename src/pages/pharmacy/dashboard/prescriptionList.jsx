// src/components/PrescriptionList.js
import React, { useState } from 'react';
import PrescriptionCard from './prescription';
import 'tailwindcss/tailwind.css';

const PrescriptionList = ({ prescriptions }) => {
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const handleComplete = (prescriptionId) => {
    // Update the status of the prescription to "sold" (or any other logic)
    const updatedPrescriptions = prescriptions.map(p => {
      if (p.id === prescriptionId) {
        return { ...p, status: 'sold' };
      }
      return p;
    });

    // Update the state to reflect the change
    setSelectedPrescription(updatedPrescriptions.find(p => p.id === prescriptionId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="mb-4 text-gray-700 text-lg font-bold">Prescription List</h2>
          <ul>
            {prescriptions.map(prescription => (
              <li
                key={prescription.id}
                className="cursor-pointer p-2 border-b"
                onClick={() => setSelectedPrescription(prescription)}
              >
                {prescription.medicineName}
              </li>
            ))}
          </ul>
        </div>
        {selectedPrescription && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <PrescriptionCard
              prescription={selectedPrescription}
              onComplete={() => handleComplete(selectedPrescription.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionList;
