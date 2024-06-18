// postLabTestRequest.js

import axios from "axios";

const postLabTestRequest = async ({ token, data, labId }) => {
    console.log("data from api:", data);
    console.log("labId from api:", labId);
    console.log("token from api:", token);
    try {
        const response = await axios.post(
            `http://localhost:5072/api/laboratory/${labId}/test-requests`,

            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default postLabTestRequest;
