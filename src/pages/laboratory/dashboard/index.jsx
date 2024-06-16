import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NavBar from "./navBar";
import Card from "./requestCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { selectLaboratoryId } from "@/redux/laboratorySlice";
import { selectToken } from "@/redux/authSlice";

const fetchCardData = async ({ adminData, token }) => {
  console.log("admin d", adminData)
  if (adminData == undefined)
    return
  const {
    institutionId
  } = adminData;

  const { data } = await axios.get(`http://localhost:5072/api/Laboratory/${institutionId
    }/test-requests`, {
    headers: {
      Authorization: `Bearer ${token}`
    },

  });
  console.log("Test Requests Data:", data);
  return data;
};

const fetchAdminData = async ({ queryKey }) => {
  const [_key, laboratoryId, token] = queryKey;
  console.log(laboratoryId)
  const { data } = await axios.get(`http://localhost:5072/api/admin/${laboratoryId}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log("Admin Data:", data);
  return data;
};

const LaboratoryDashboard = () => {
  const laboratoryId = useSelector(selectLaboratoryId);
  const token = useSelector(selectToken);

  const { data: adminData, isLoading: isLoadingAdmin, isError: isErrorAdmin, error: errorAdmin } = useQuery(
    ['adminData', laboratoryId, token],
    fetchAdminData,
   
  );

  const Addata = adminData?.data


  const { data: testRequestsData, isLoading: isLoadingTestRequests, isError: isErrorTestRequests, error: errorTestRequests } = useQuery(
    ['cardData', laboratoryId, token, adminData?.data?.institutionId
    ],
    () => fetchCardData({ adminData: Addata, token: token })
  );

  if (!laboratoryId) {
    return <div>Please select a laboratory to view test requests and admin data.</div>;
  }

  if (isLoadingAdmin || isLoadingTestRequests) {
    return <div>Loading...</div>;
  }

  if (isErrorAdmin) {
    return <div>Error fetching admin data: {errorAdmin.message}</div>;
  }

  if (isErrorTestRequests) {
    return <div>Error fetching test requests: {errorTestRequests.message}</div>;
  }

  return (
    <>
      <NavBar />
      <div className="h-24"></div>
      <div>
        {testRequestsData.data.map((item, index) => (
          <Card key={index} Name={item.
            doctorName
          } Hospital={item.laboratoryName}  item={item} />
        ))}
      </div>
    </>
  );
};

export default LaboratoryDashboard;
