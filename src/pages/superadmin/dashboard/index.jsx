import React, { useState } from "react";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { fetchAdminInfo, fetchHealthCenterInfo } from "./requests/lib";
import { addAdminData } from "@/redux/adminSlice";
import { useToast } from "@/components/ui/use-toast";
import { updateHealthcenter } from "@/redux/healthcenterSlice";

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const HealthCenterDashboard = () => {
  const [activeLink, setActiveLink] = useState("requests");
  const userData = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const { toast } = useToast();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery(
    "adminInfo",
    () => fetchAdminInfo({ token, adminId: userData?.id }),
    {
      onSuccess: (adminInfo) => {
        if (adminInfo !== null && adminInfo !== undefined)
          dispatch(addAdminData(adminInfo));
      },
    }
  );

  const healthCenterId = data?.institutionId;

  const { data: healthCenterData } = useQuery(
    "healthCenterInfo",
    () => fetchHealthCenterInfo({ token, healthCenterId }),
    {
      onSuccess: (healthCenterInfo) => {
        if (healthCenterInfo !== null && healthCenterInfo !== undefined)
          dispatch(updateHealthcenter(healthCenterInfo));
      },
      onError: (error) => {
        // Handle the error here
      },
    }
  );

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onLinkClick={handleLinkClick} />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-start bg-gray-100 p-4 text-gray-800">
            <div className="text-lg font-semibold">
              Welcome, Super Admin {getFirstName(userData.fullname)}
            </div>
          </div>
          <MainContent activeLink={activeLink} />
        </div>
      </div>
    </div>
  );
};

export default HealthCenterDashboard;
