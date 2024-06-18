import React, { useState } from 'react';

const ToggleForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    gender: '',
    nationalId: '',
    height: '',
    weight: '',
    dateOfBirth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="container mx-auto p-4">
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded" 
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add Patient'}
      </button>

      {showForm && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
              Fullname:
            </label>
            <input 
              type="text" 
              name="fullname" 
              id="fullname" 
              placeholder="Enter Fullname"
              value={formData.fullname} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
              Phonenumber:
            </label>
            <input 
              type="text" 
              name="phonenumber" 
              id="phonenumber" 
              placeholder="Enter Phonenumber"
              value={formData.phonenumber} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter Email"
              value={formData.email} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender:
            </label>
            <select 
              name="gender" 
              id="gender" 
              value={formData.gender} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationalId">
              National ID:
            </label>
            <input 
              type="text" 
              name="nationalId" 
              id="nationalId" 
              placeholder="Enter National ID"
              value={formData.nationalId} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height (cm):
            </label>
            <input 
              type="number" 
              name="height" 
              id="height" 
              placeholder="Enter Height in cm"
              value={formData.height} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight (kg):
            </label>
            <input 
              type="number" 
              name="weight" 
              id="weight" 
              placeholder="Enter Weight in kg"
              value={formData.weight} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
              Date of Birth:
            </label>
            <input 
              type="date" 
              name="dateOfBirth" 
              id="dateOfBirth" 
              placeholder="Select Date of Birth"
              value={formData.dateOfBirth} 
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ToggleForm;
