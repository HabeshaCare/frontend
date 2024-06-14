import axios from 'axios';
import FormData from 'form-data';

export const updateProfilePicture = async (data, token) => {
//   console.log("Received token in API call:", token);
//   console.log("Received data in API call:", data);
console.log("data", data.file)

  const requestData = new FormData();
  requestData.append('image', data.file, data.file.name);


  const response = await axios.post(
    `http://localhost:5072/api/patient/${data.id}/profile/upload-picture`,
     requestData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }   
  );

  return response.data;
};
