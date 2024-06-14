import axios from "axios";

const forgotpassword = async (email) => {
    console.log("email", email);
    try {
      const res = await axios.post(`http://localhost:5072/api/auth/forgot-password?email=${email}`);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
};

export default forgotpassword;
