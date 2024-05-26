import React from 'react';
import 'tailwindcss/tailwind.css';

const PrescriptionCard = ({ patientName, doctorName, date, medication, dosage, instructions }) => {
  return (
    <div className="m-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Prescription</div>
          <p className="block mt-1 text-2xl leading-tight font-medium text-black">{patientName}</p>
          <p className=" mt-8 block  text-l leading-tight text-gray-600">Prescribed by: {doctorName}</p>
          <p className="mt-8 text-gray-500  text-l">Date: {date}</p>
          <p className="mt-8 text-gray-500 text-l ">Dosage: {dosage}</p>
          <p className="mt-8 text-gray-500 text-l">Instructions: {instructions}</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 active:bg-green-700 focus:outline-none transition-all duration-300">Print</button>
      
      </div>
    </div>
  );
}

// Usage example
const App = () => (
  <div className="flex items-center justify-center ">
    <PrescriptionCard 
      patientName="John Doe"
      doctorName="Dr. Smith"
      date="2024-05-20"
      medication="Ibuprofen"
      dosage="200mg"
      instructions="Take one pill every 6 hours with food."
    />
  </div>
);

export default App;
