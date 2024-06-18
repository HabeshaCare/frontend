import axios from "axios";


const getDoctor = async ({ token, id }) => {
    const response = await axios.get(`http://localhost:5072/api/doctor/${id}/profile`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    );
    return response.data;
}

export default getDoctor