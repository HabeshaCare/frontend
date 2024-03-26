import axios from "axios";


const GetUserData = async () => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('userId');
    console.log('Token:', token);
    console.log('User ID:', user_id);
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };

    const url = 'http://localhost:5072/api/patient/' + user_id + '/profile';
    const response = await axios.get(url, config);
    return response.data;

  };
  export default GetUserData;