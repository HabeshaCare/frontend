import axios from 'axios';
import { useSelector } from 'react-redux';


export const updateProfile = async (data) => {
    const userData = useSelector((state) => state.auth.user);
    console.log("name from state", userData.fullname);

    const response = await axios.post('http://localhost:5072/api/doctor/' + { userData.id } + '/profile', data); // Replace with your actual API endpoint
    return response.data;
};