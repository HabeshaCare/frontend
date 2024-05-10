import React, { useState } from 'react';

const RequesterDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    organization: '',
    telephone: '',
    dob: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Card Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-1">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="organization" className="block font-semibold mb-1">Organization:</label>
          <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="telephone" className="block font-semibold mb-1">Telephone number:</label>
          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block font-semibold mb-1">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender:</label>
          <div className="flex">
            <label htmlFor="male" className="inline-flex items-center mr-4">
              <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} className="mr-2" />
              Male
            </label>
            <label htmlFor="female" className="inline-flex items-center">
              <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} className="mr-2" />
              Female
            </label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default RequesterDetailsForm;
