import axios from "axios";


const getRecords = async ({ token, patientId }) => {
    // console.log("Token:", token);
    console.log("Patient ID:", patientId);
    try {
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }, 
        };
        const response = await axios.get(`http://localhost:5072/api/patient/${patientId}/records`, config);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export default getRecords;