import axios from 'axios';

export const updateProfile = async (data) => {

    const response = await axios.post('http://localhost:5072/api/doctor/profile', data); // Replace with your actual API endpoint
    return response.data;
};