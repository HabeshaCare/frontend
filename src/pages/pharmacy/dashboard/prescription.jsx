import React from 'react';
import 'tailwindcss/tailwind.css';

const PrescriptionCard = ({ patientName, doctorName, date, medication, dosage, instructions }) => {
  return (
    // <div className="m-10 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-5">
        <div className="bg-indigo-100 p-4 rounded-md">
          <div className="uppercase tracking-widest text-sm text-indigo-600 font-semibold">Prescription</div>
          <p className="block mt-1 text-2xl leading-tight font-medium text-black">{patientName}</p>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600">Prescribed by: <span className="text-gray-800">{doctorName}</span></p>
          <p className="mt-4 text-lg text-gray-600">Date: <span className="text-gray-800">{date}</span></p>
          <p className="mt-4 text-lg text-gray-600">Medication: <span className="text-gray-800">{medication}</span></p>
          <p className="mt-4 text-lg text-gray-600">Dosage: <span className="text-gray-800">{dosage}</span></p>
          <p className="mt-4 text-lg text-gray-600">Instructions: <span className="text-gray-800">{instructions}</span></p>
        </div>
        <button className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition-all duration-300">Complete</button>
      </div>
    // </div>
  );
  }

// Usage example
// const App = () => (
//     <div className="flex items-center justify-center ">
//       <PrescriptionCard
//         patientName="John Doe"
//         doctorName="Dr. Smith"
//         date="2024-05-20"
//         medication="Ibuprofen"
//         dosage="200mg"
//         instructions="Take one pill every 6 hours with food."
//       />
//     </div>
//   );

  export default PrescriptionCard;
