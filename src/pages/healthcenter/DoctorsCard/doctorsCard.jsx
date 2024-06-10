import React from 'react';

const DoctorCard = () => {
  return (
    <div className="w-72  bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-40 object-cover" src="https://via.placeholder.com/400x200" alt="Doctor" />
      <div className="p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold flex-1">Dr. Tahera Akter</h2>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm font-semibold">4.5</span>
            <svg className="w-5 h-5 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.216 3.736a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.16 2.3a1 1 0 00-.364 1.118l1.216 3.736c.3.921-.755 1.688-1.54 1.118l-3.16-2.3a1 1 0 00-1.175 0l-3.16 2.3c-.784.57-1.839-.197-1.54-1.118l1.216-3.736a1 1 0 00-.364-1.118l-3.16-2.3c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.216-3.736z" />
            </svg>
            <span className="text-gray-600 text-sm ml-1">(135)</span>
          </div>
        </div>
        <p className="text-gray-600">Cardiology</p>
        <div className="flex items-center text-gray-600 mt-2">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5a1 1 0 10-2 0v2a1 1 0 002 0zm0 6v-4a1 1 0 10-2 0v4a1 1 0 002 0zm2.293 1.707a1 1 0 011.414-1.414l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414zm-8.586-1.414a1 1 0 011.414 1.414L3.707 16.707a1 1 0 11-1.414-1.414l1.414-1.414z" />
          </svg>
          <span className="ml-1">USK New York</span>
        </div>
      </div>
     </div>
  );
};

export default DoctorCard;
