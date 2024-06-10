import axios from 'axios';

export const updateProfile = async (data) => {
    console.log("doctor id from api call ", data.id)
    console.log("data from api call ", data)

    const requestData = {
        ...data,
        id: data.id
    };
    const response = await axios.post(`http://localhost:5072/api/doctor/${data.id}/profile`, requestData) // Replace with your actual API endpoint
    return response.data;
};