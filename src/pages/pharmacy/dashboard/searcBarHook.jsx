// src/hooks/usePatientSearch.js
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectPharmacyId } from "@/redux/pharmacySlice";
import { selectToken } from "@/redux/authSlice";

const usePatientSearch = (query) => {
  const id = useSelector(selectPharmacyId);
  const token = useSelector(selectToken);

  const fetchPatient = async () => {
    const data = await axios.get(`http://localhost:5072/api/patient?query=${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  return useQuery(['patient', query], fetchPatient, {
    enabled: !!query,
  });
};

export default usePatientSearch;
