import axios from "axios";

export const register = (data) => {
  console.log("Register request data:", data); // Log request payload
  return axios
    .post("http://localhost:5072/api/auth/signup/", data)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Axios error:", error); // Log Axios error
    });
};


export default register;
