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
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const UpdateInstitutionVerification = async ({ token, institutionId, institutionType, verificationStatus }) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const url = `http://localhost:5072/api/${institutionType}/${institutionId}/verify?verified=${verificationStatus}`;
        const response = await axios.put(
            url,
            {},
            config
        );
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const getUsers = async ({ token, healthCenterId }) => {
    const doctorsRequest = axios.get(
        `http://localhost:5072/api/doctor/`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                AssociatedHealthCenterId: healthCenterId,
                Verified: false
            }
        }
    );

    const adminsRequest = axios.get(`http://localhost:5072/api/doctor/`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                AssociatedHealthCenterId: healthCenterId,
                Verified: false
            }
        });
    try {
        const responses = await Promise.all([adminsRequest, doctorsRequest]);
        const data = responses.map((response) => response.data);
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}