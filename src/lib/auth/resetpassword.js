import axios from "axios";

const resetpassword = async ({ token, password, confirmPassword }) => {
  const response = await axios.post("http://localhost:5072/api/auth/reset-password", {
    token,
    password,
    confirmPassword,
  });
  return response.data;
};

export default resetpassword;
