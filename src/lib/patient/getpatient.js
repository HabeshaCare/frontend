import axios from 'axios';

const getPatient = async ({ token, id }) => {
    console.log("token from api:", token)
    try {
        const config = {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        };
        const response = await axios.get(`http://localhost:5072/api/HealthCenter/666cbd003c4c4d37b4eda6fd/patients`, config);
        console.log("API Response:", response.data); // Log the API response to the console
        return response.data;
    } catch (error) {
        console.error("Error fetching patient data:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export default getPatient;
