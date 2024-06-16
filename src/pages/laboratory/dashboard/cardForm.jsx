import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { selectToken } from "@/redux/authSlice"; // Adjust the path based on your actual file structure

const DisplayPatientInfo = () => {
  const token = useSelector(selectToken); // Fetch token using useSelector
  const id = localStorage.getItem('userId');

  const { data, isLoading, isError } = useQuery('patientInfo', fetchPatientInfo);

  async function fetchPatientInfo() {
    try {
      const response = await axios.get(`http://localhost:5072/index/api/Laboratory/${id}/test-requests`, {
        headers: {
          Authorization: `Bearer ${token}` // Pass token in Authorization header
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch patient information');
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching patient information!</div>;

  const {
    name,
    address,
    organization,
    phoneNumber,
    dateOfBirth,
    gender,
    drugTherapy,
    lastDose,
    clinicalInfo,
    urgency,
    sampleDate,
    fasting,
    sampleType,
    profileTests,
    specificTests,
    additionalTests,
    site
  } = data;
  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="shadow-md rounded-lg p-6 mb-4 bg-white">
          <h2 className="mb-4 text-gray-700 text-lg font-bold">Card Form</h2>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <p className="text-gray-900">{name}</p>
            </div>
            <div className="w-full lg:w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
              <p className="text-gray-900">{dateOfBirth}</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
              <p className="text-gray-900">{address}</p>
            </div>
            <div className="w-full lg:w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Organization:</label>
              <p className="text-gray-900">{organization}</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2">Telephone number:</label>
              <p className="text-gray-900">{phoneNumber}</p>
            </div>
            <div className="w-full lg:w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
              <p className="text-gray-900">{gender}</p>
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-lg p-6 mb-4 bg-white">
          <h2 className="mb-4 text-gray-700 text-lg font-bold">Relevant Clinical Information Form</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Drug therapy:</label>
            <p className="text-gray-900">{drugTherapy}</p>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last dose:</label>
              <p className="text-gray-900">{lastDose}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Other relevant clinical information:</label>
            <p className="text-gray-900">{clinicalInfo}</p>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="shadow-md rounded-lg p-6 mb-4 bg-white">
            <h2 className="mb-4 text-gray-700 text-lg font-bold">Sample Details Form</h2>
            <div className="flex flex-wrap mb-4">
              <div className="w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2">Urgency:</label>
                <p className="text-gray-900">{urgency}</p>
              </div>
              <div className="w-full lg:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Sample taken from patient:</label>
                <p className="text-gray-900">{sampleDate}</p>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2">Fasting:</label>
                <p className="text-gray-900">{fasting}</p>
              </div>
              <div className="w-full lg:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Sample type:</label>
                <p className="text-gray-900">{sampleType}</p>
              </div>
            </div>
          </div>

          <div className="shadow-md rounded-lg p-6 mb-4 bg-white">
            <h2 className="mb-4 text-gray-700 text-lg font-bold">Examination Requested Form</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Profile tests:</label>
              <p className="text-gray-900">{profileTests.join(', ')}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Specific tests:</label>
              <p className="text-gray-900">{specificTests.join(', ')}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Additional tests:</label>
              <p className="text-gray-900">{additionalTests.join(', ')}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Site:</label>
              <p className="text-gray-900">{site}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPatientInfo;
