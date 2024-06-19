import axios from "axios";

export const UpdateUserVerification = async ({
  token,
  userId,
  userRole,
  verificationStatus,
}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const url =
      userRole === "Doctor"
        ? `http://localhost:5072/api/doctor/${userId}/verify?isVerified=${verificationStatus}`
        : `http://localhost:5072/api/admin/${userId}/verify?verified=${verificationStatus}`;
    const response = await axios.put(url, {}, config);
    return response.data.data;
  } catch (error) {}
};

export const UpdateInstitutionVerification = async ({
  token,
  institutionId,
  institutionType,
  verificationStatus,
}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const url = `http://localhost:5072/api/${institutionType}/${institutionId}/verify?verified=${verificationStatus}`;
    const response = await axios.put(url, {}, config);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchPatients = async ({ token, query }) => {
  if (query === "") return [];
  try {
    const patientResponse = await axios.get(
      `http://localhost:5072/api/patient`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          query,
        },
      }
    );
    return patientResponse.data.data;
  } catch (error) {
    throw error;
  }
};

export const getInstitutions = async ({ token, healthCenterId }) => {
  const laboratoryRequest = axios.get(`http://localhost:5072/api/laboratory`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      AssociatedHealthCenterId: healthCenterId,
      Verified: false,
    },
  });

  const pharmacyRequest = axios.get(`http://localhost:5072/api/pharmacy`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      AssociatedHealthCenterId: healthCenterId,
      Verified: false,
    },
  });
  try {
    const responses = await Promise.allSettled([
      pharmacyRequest,
      laboratoryRequest,
    ]);
    const data = responses
      .map((response) => response.value?.data?.data)
      .filter((item) => item !== null && item !== undefined)
      .reduce((acc, curr) => acc.concat(curr), []);
    return data;
  } catch (error) {}
};

export const fetchAdminInfo = async ({ token, adminId }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `http://localhost:5072/api/admin/${adminId}/profile`,
      config
    );
    return response.data.data;
  } catch (error) {}
};

export const fetchHealthCenterInfo = async ({ token, healthCenterId }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `http://localhost:5072/api/healthcenter/${healthCenterId}`,
      config
    );
    return response.data.data;
  } catch (error) {}
};
