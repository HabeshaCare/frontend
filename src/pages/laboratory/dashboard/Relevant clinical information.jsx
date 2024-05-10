import React, { useState } from 'react';

const RelevantClinicalInformationForm = () => {
  const [formData, setFormData] = useState({
    drugTherapy: '',
    lastDose: {
      date: '',
      time: '',
    },
    otherInformation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Relevant Clinical Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="drugTherapy" className="block font-semibold mb-1">Drug therapy:</label>
          <input type="text" id="drugTherapy" name="drugTherapy" value={formData.drugTherapy} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Last dose:</label>
          <div className="flex mb-2">
            <input type="date" name="date" value={formData.lastDose.date} onChange={handleChange} className="px-3 py-2 border rounded-md mr-4" />
            <input type="time" name="time" value={formData.lastDose.time} onChange={handleChange} className="px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="otherInformation" className="block font-semibold mb-1">Other relevant clinical information:</label>
          <textarea id="otherInformation" name="otherInformation" value={formData.otherInformation} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-md"></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default RelevantClinicalInformationForm;
