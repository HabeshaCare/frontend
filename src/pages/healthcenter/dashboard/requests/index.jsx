import { useState } from "react";

import { useMutation, useQuery } from "react-query";
import VerificationRequestNavBar from "./requestNavBar";

import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

import UserContent from "./UserContent";
import InstitutionContent from "./InstitutionContent";

import { getUsers, UpdateInstitutionVerification, UpdateUserVerification } from "./lib";


const VerificationRequest = () => {
    const [activeTab, setActiveTab] = useState("Users");
    const token = useSelector((state) => state.auth.token);
    const healthCenterId = useSelector((state) => state.admin.institutionId)

    const { toast } = useToast();
    const { data: users, isError, isLoading, refetch } = useQuery(
        "verificationRequests",
        () => getUsers({ token, healthCenterId }),
        {
            refetchInterval: 10000, // Refetch every 10 seconds
        }
    );
    const [institutions, setInsitutions] = [];

    const verifyUserMutation = useMutation(
        (userId, userRole, verificationStatus) => UpdateUserVerification({ token, userId, userRole, verificationStatus }),
        {
            onSuccess: () => {
                refetch(); // Refetch the verification after a successful confirmation
                toast({
                    title: "Success!",
                    description: "User verified successfully.",
                });
            },
            onError: (error) => {
                console.error("Error verifying user:", error);
                toast({
                    title: "Error!",
                    description: "An error occurred while verifying the user.",
                });
            },
        }
    );

    const verifyInstitutionMutation = useMutation(
        (institutionId, institutionType, verificationStatus) => UpdateInstitutionVerification({ token, institutionId, institutionType, verificationStatus }),
        {
            onSuccess: () => {
                refetch(); // Refetch the verification after a successful confirmation
                toast({
                    title: "Success!",
                    description: "Institution verified successfully.",
                });
            },
            onError: (error) => {
                console.error("Error verifying institution:", error);
                toast({
                    title: "Error!",
                    description: "An error occurred while verifying the institution.",
                });
            },
        }
    )

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleUserConfirm = (userId, userRole, verificationStatus) => {
        verifyUserMutation.mutate(userId, userRole, verificationStatus);
    };

    const handleInstitutionConfirm = (institutionId, institutionType, verificationStatus) => {
        verifyInstitutionMutation.mutate(institutionId, institutionType, verificationStatus);
    }

    if (isLoading)
        return <div className="flex justify-center items-center">Loading...</div>;

    if (isError)
        toast({
            title: "Error!",
            description: "An error occurred while fetching verification requests.",
        })

    return (
        <>
            <VerificationRequestNavBar
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
            {activeTab === "Users" && (
                <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold">
                    <div>Name</div>
                    <div className="pl-24">Contact</div>
                    <div>Role</div>
                    <div>License Information</div>
                </div>)
            }
            {activeTab === "Institutions" && (
                <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold">
                    <div>Name</div>
                    <div>Created by</div>
                    <div className="pl-24">Location</div>
                    <div>Type</div>
                    <div>License Information</div>
                </div>

            )}
            {console.log(activeTab === "Institutions")}
            {activeTab === "Users" && (
                (users.map((user, index) => <UserContent key={index} onConfirm={handleUserConfirm} userData={user} />)))}
            {activeTab === "Institutions" && (
                (institutions.map((institution, index) => <InstitutionContent key={index} onConfirm={handleInstitutionConfirm} institutionData={institution} />)))}
        </>
    );
};

export default VerificationRequest;
