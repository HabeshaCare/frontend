// src/hooks/usePatientSearch.js
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {selectPharmacyId} from "@/redux/pharmacySlice";
import {selectToken} from "@/redux/authSlice"
 




const fetchPatient = async (query) => {
//   const token = getAuthToken();
const id =localStorage.getItem("id")
const token = localStorage.getItem("token");
console.log(token);
console.log(token);
  const data  = await axios.get('http://localhost:5072/api/patient?query=ET12345', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const usePatientSearch = (query) => {
  return useQuery(['patient', query], () => fetchPatient(query), {
    enabled: !!query,
  });
};

export default usePatientSearch;
