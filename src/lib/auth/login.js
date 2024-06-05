import axios from "axios";

 const login = async (formData) => {
  const response = await axios.post("http://localhost:5072/api/auth/login", formData);
  return response.data;
};


export default login