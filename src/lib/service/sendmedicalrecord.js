import axios from "axios";

const sendMedicalRecord = async (token, data) => {
    // console.log("data", data);
    try {
        const res = await axios.post(
            "http://localhost:5072/api/records",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return res.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network Error");
    }
};

export default sendMedicalRecord;
