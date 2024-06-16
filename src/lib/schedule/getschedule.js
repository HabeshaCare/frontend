import axios from "axios";

const getschedule = async ({ token, userId }) => {
  try {
    const response = await axios.get(
      `http://localhost:5072/api/user/${userId}/schedule`,
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
}

export default getschedule;