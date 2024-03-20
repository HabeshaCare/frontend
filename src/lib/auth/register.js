import axios from "axios";

export const register = (data) => {
  // Return the promise chain
  return axios.post(
    "http://localhost:5072/api/auth/signup/",
    data
  )
  .then(res => res.data)
  .catch(error => {
    console.log(error);
    throw error; // Re-throwing the error for handling it further if needed
  });
};

export default register