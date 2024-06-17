import axios from "axios";

const sendPrescription = async (token, data, medicalRecordId) => {
  try {
    const res = await axios.post(
      `http://localhost:5072/api/records/${medicalRecordId}/prescriptions`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default sendPrescription;
