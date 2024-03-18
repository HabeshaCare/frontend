import axios from "axios";

export const register = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:5072/api/auth/signup/",
      data
    );
    console.log("Axios Response:", res); // Log the entire Axios response object
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
