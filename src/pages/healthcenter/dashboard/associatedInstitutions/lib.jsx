import axios from "axios";

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
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.log(error);
    }

}

export const getInstitutions = async ({ token, healthCenterId }) => {
    const laboratoryRequest = axios.get(
        `http://localhost:5072/api/laboratory`,
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

    const pharmacyRequest = axios.get(
        `http://localhost:5072/api/pharmacy`,
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
    try {
        const responses = await Promise.allSettled([pharmacyRequest, laboratoryRequest]);
        const data = responses.map((response) => response.value?.data?.data).filter((item) => item !== null && item !== undefined).reduce((acc, curr) => acc.concat(curr), []);
        return data;
    } catch (error) {
    }

}