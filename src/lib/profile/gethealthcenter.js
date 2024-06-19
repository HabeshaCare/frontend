import axios from "axios";

const gethealthcenter = async ({ token }) => {
  const response = await axios.get("http://localhost:5072/api/HealthCenter", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export default gethealthcenter;
