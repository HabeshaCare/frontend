import axios from "axios";

const verifyToken = (token) => {
  return axios
    .post(`http://localhost:5072/api/auth/verify?token=${token}`)
    .then((response) => {
      console.log("Email verification successful:", response.data);
      return response.data; // Return data if verification is successful
    })
    .catch((error) => {
      console.log("Error verifying email:", error);
      throw error; // Throw error to be caught by the useMutation hook
    });
};

export default verifyToken;
