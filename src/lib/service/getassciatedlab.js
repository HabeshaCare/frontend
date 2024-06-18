import axios from "axios";

const getLab = async ({ token }) => {
    const response = await axios.get(`http://localhost:5072/api/laboratory?AssociatedHealthCenterId=666cbd003c4c4d37b4eda6fd`,
        {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }
    );
    return response.data;
}

export default getLab;