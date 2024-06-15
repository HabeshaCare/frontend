import axios from "axios";

const GetPatient = async ({ token, id }) => {
  console.log("token", token);
  console.log("id", id);
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    const url = `http://localhost:5072/api/patient/${id}/profile`;
    const response = await axios.get(url, config);

    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);

    if (error.response) {
      console.error("Error response data:", error.response.data);
      return { error: error.response.data };
    } else if (error.request) {
      console.error("Error request:", error.request);
      return { error: "No response received from server" };
    } else {
      console.error("Error message:", error.message);
      return { error: error.message };
    }
  }
};

export default GetPatient;
