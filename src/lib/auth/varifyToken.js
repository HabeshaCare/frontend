import axios from "axios";

const verifyToken = (token) => {
  const response = axios
    .post("http://localhost:5072/api/auth/verify", token)
    .then(
      console.log("Email verification successful:", response.data)
      // Optionally, you can redirect the user to a success page or display a message
    )
    .catch((error) => {
      console.log("Error verifying email");
      console.error("Error verifying email:", error);
      // Optionally, you can redirect the user to an error page or display an error message
    });
};

export default verifyToken;
