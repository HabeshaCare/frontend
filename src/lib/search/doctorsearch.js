import axios from "axios";

const searchDoctors = async ({ token, searchQuery }) => {
  console.log("searchQuery: ", searchQuery);
  console.log("token: ", token);
  
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  const body = {
    search: searchQuery,
  };

  const response = await axios.post("http://localhost:5072/api/ai/search/doctors", body, config);
  return response.data;
};

export default searchDoctors;
