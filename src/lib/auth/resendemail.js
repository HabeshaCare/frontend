import axios from 'axios';

const resendEmail = async (email) => {
    try {
        const res = await axios.post("http://localhost:5072/api/auth/resend-token?email=" + email);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

export default resendEmail;