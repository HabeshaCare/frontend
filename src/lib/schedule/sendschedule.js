import axios from "axios";

const sendappointment = async ({ token, userId, to, from, doctorId }) => {
  try {
    const response = await axios.post(
      `http://localhost:5072/api/user/${userId}/schedule`,
      {
        to,
        from,
        doctorId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default sendappointment;
