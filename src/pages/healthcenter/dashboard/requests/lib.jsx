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
        console.log(error);
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
        return response.data.data;
    } catch (error) {
        console.log(error);
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
                Verified: false
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
                Verified: false
            }
        });
    try {
        const responses = await Promise.allSettled([doctorsRequest, adminsRequest]);
        const data = responses.map((response) => response.value?.data?.data).filter((item) => item !== null && item !== undefined).reduce((acc, curr) => acc.concat(curr), []);
        console.log("Promise data: ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getInstitutions = async ({ token, type, healthCenterId }) => {
    const institutionsRequest = axios.get(
        `http://localhost:5072/api/${type}`,
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
    try {
        const response = await institutionsRequest;
        return response.data.data;
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}