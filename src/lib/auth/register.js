import axios from "axios";

export const register = (data) => {
  return axios
    .post("http://localhost:5072/api/auth/signup/", data)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};


export default register;
