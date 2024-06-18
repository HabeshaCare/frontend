import axios from 'axios';

export const updateProfile = async (data, token) => {

  const requestData = {
    ...data,
  };

  const response = await axios.put(
    `http://localhost:5072/api/doctor/${data.id}/profile`,
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
