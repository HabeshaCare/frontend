import React from 'react';

const TestRequestCard = ({ data }) => {
  const { doctorName, laboratoryName, requestedDate, tests } = data;


  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">{doctorName}</h2>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Laboratory {laboratoryName}</p>
        <p className="text-sm text-gray-600 mb-2">Requested Date sp{new Date(requestedDate).toLocaleDateString()}</p>
        <div className="mb-2">
          <h3 className="text-sm text-gray-600 font-bold mb-1">Tests:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {tests.map((test, index) => (
              <li key={index}>
                <span className="font-bold">{test.testName}</span>: {test.testValue ? test.testValue : 'Not specified'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestRequestCard;
