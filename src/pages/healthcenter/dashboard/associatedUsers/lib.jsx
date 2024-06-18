import axios from "axios";

export const UpdateUserVerification = async ({ token, userId, userRole, verificationStatus }) => {

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const url = userRole === "Doctor" ? `http://localhost:5072/api/doctor/${userId}/verify?isVerified=${verificationStatus}`
            : `http://localhost:5072/api/admin/${userId}/verify?verified=${verificationStatus}`;
        const response = await axios.put(
            url,
            {},
            config
        );
        return response.data.data;
    } catch (error) {
    }
}

export const getUsers = async ({ token, healthCenterId }) => {
    const doctorsRequest = axios.get(
        `http://localhost:5072/api/doctor`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                AssociatedHealthCenterId: healthCenterId,
                Verified: true
            }
        }
    );

    const adminsRequest = axios.get(`http://localhost:5072/api/admin`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                AssociatedHealthCenterId: healthCenterId,
                Verified: true
            }
        });
    try {
        const responses = await Promise.allSettled([doctorsRequest, adminsRequest]);
        const data = responses.map((response) => response.value?.data?.data).filter((item) => item !== null && item !== undefined).reduce((acc, curr) => acc.concat(curr), []);
        return data;
    } catch (error) {
    }
}


export const fetchAdminInfo = async ({ token, adminId }) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
    try {
        const response = await axios.get(
            `http://localhost:5072/api/admin/${adminId}/profile`,
            config
        );
        return response.data.data;
    } catch (error) {
    }
}