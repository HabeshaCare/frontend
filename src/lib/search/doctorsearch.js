import axios from "axios";

const searchDoctors = async ({ token, searchQuery }) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };


  const response = await axios.post("http://localhost:5072/api/ai/search/doctors", searchQuery, config);
  return response.data;
};

export default searchDoctors;
