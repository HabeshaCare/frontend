import axios from "axios";

export const updateAdmin = async ({ token, adminId, updatedData }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const url = `http://localhost:5072/api/admin/${adminId}/profile`;
    const response = await axios.put(url, updatedData, config);
    return response.data.data;
  } catch (error) {}
};

export const updateProfilePicture = async ({ token, adminId, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      `http://localhost:5072/api/admin/${adminId}/upload-profile`,
      formData,
      config
    );

    return response.data.data;
  } catch (error) {}
};

export const updateHealthCenter = async ({
  token,
  healthCenterId,
  updatedData,
  formData,
}) => {
  console.log("healthCenterId: ", healthCenterId);
  console.log("updatedData: ", updatedData);
  const baseUrl = `http://localhost:5072/api/healthcenter/${healthCenterId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await axios.put(baseUrl, updatedData, config);

    if (formData) {
      const formDataConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formDataUrl = `${baseUrl}/upload-license`;
      response = await axios.post(formDataUrl, formData, formDataConfig);
    }

    return response.data.data;
  } catch (error) {}
};
