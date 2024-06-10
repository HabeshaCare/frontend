import React, { useState } from 'react';
import DoctorCard from './doctorCard';
import picture from '@/public/img/pic.png'; // Adjust the path as needed

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    image: picture,
    name: '',
    rating: '',
    reviews: '',
    specialty: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const addDoctor = () => {
    setDoctors([...doctors, { ...newDoctor, rating: parseFloat(newDoctor.rating), reviews: parseInt(newDoctor.reviews) }]);
    setNewDoctor({
      image: picture,
      name: '',
      rating: '',
      reviews: '',
      specialty: '',
      location: ''
    });
    setIsFormVisible(false);
  };

  const removeDoctor = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Doctors</h2>
      <div className="flex flex-wrap gap-4">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            image={doctor.image}
            name={doctor.name}
            rating={doctor.rating}
            reviews={doctor.reviews}
            specialty={doctor.specialty}
            location={doctor.location}
            onRemove={() => removeDoctor(index)}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mt-4 shadow-lg transform transition-all hover:scale-110"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        +
      </button>
      {isFormVisible && (
        <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
          <input
            type="text"
            name="name"
            value={newDoctor.name}
            onChange={handleInputChange}
            placeholder="Doctor Name"
            className="border p-2 rounded-lg w-full mb-2"
          />
          <input
            type="text"
            name="rating"
            value={newDoctor.rating}
            onChange={handleInputChange}
            placeholder="Rating"
            className="border p-2 rounded-lg w-full mb-2"
          />
          <input
            type="text"
            name="reviews"
            value={newDoctor.reviews}
            onChange={handleInputChange}
            placeholder="Reviews"
            className="border p-2 rounded-lg w-full mb-2"
          />
          <input
            type="text"
            name="specialty"
            value={newDoctor.specialty}
            onChange={handleInputChange}
            placeholder="Specialty"
            className="border p-2 rounded-lg w-full mb-2"
          />
          <input
            type="text"
            name="location"
            value={newDoctor.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="border p-2 rounded-lg w-full mb-2"
          />
          <button
            onClick={addDoctor}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full transition-colors"
          >
            Add Doctor
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
