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
  console.log("Updating profile picture");
  console.log("formdata: ", formData);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      `http://localhost:5072/api/admin/${adminId}/profile/upload-picture`,
      formData,
      config
    );

    return response.data.data;
  } catch (error) {
    throw error;
  }
};
