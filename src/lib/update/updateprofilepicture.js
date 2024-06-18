import axios from 'axios';
import FormData from 'form-data';

export const updateProfilePicture = async (data, token) => {
  const requestData = new FormData();
  requestData.append('image', data.file, data.file.name);


  const response = await axios.post(
    `http://localhost:5072/api/doctor/${data.id}/profile/upload-picture`,
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
