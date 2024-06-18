import axios from "axios";

const verifyToken = (token) => {
  return axios
    .post(`http://localhost:5072/api/auth/verify?token=${token}`)
    .then((response) => {
      return response.data; // Return data if verification is successful
    })
    .catch((error) => {
      throw error; // Throw error to be caught by the useMutation hook
    });
};

export default verifyToken;
