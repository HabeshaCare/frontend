import axios from "axios";

const ConfirmSchedule = async ({ token, userId, scheduleId }) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.put(
            `http://localhost:5072/api/user/${userId}/schedule/${scheduleId}/status`,true,
            config
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default ConfirmSchedule;
