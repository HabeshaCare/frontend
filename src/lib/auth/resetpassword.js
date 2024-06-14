import axios from "axios";


const resetpassword = async (email, password, token) => {
    console.log("email", email);
    try {
        const res = await axios.post(`http://localhost:5072/api/auth/reset-password?email=${email}&password=${password}&token=${token}`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export default resetpassword;