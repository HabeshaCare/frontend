import axios from "axios";


const getdoctors = async ({ token }) => {
    const response = await axios.get("http://localhost:5072/api/doctor",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    );
    return response.data;
}

export default getdoctors