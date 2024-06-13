import axios from 'axios';

export const updateProfilePicture = async (data, token) => {
//   console.log("Received token in API call:", token);
//   console.log("Received data in API call:", data);
console.log("data", data.file)

  const requestData = {
    ...data.file
  };

  const response = await axios.post(
    `http://localhost:5072/api/doctor/${data.id}/profile/upload-picture`,
     requestData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }   
  );

  return response.data;
};
