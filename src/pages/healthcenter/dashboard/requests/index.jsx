import { useState } from "react";

import { useMutation, useQuery } from "react-query";
import VerificationRequestNavBar from "./requestNavBar";

import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import UserContent from "./UserContent";
import InstitutionContent from "./InstitutionContent";

import { getUsers, UpdateInstitutionVerification, UpdateUserVerification, getInstitutions } from "./lib";


const VerificationRequest = () => {
    const [activeTab, setActiveTab] = useState("Users");
    const token = useSelector((state) => state.auth.token);
    const healthCenterId = useSelector((state) => state.admin.institutionId)

    const { toast } = useToast();
    const { data: users, isError: userHasError, isLoading: userIsLoading, refetch: userRefetch } = useQuery(
        "userRequests",
        () => getUsers({ token, healthCenterId }),
        {
            refetchInterval: 10000, // Refetch every 10 seconds
        }
    );

    const { data: institutions, isError: institutionHasError, isLoading: institutionIsLoading, refetch: institutionRefetch } = useQuery(
        "institutionRequests",
        () => getInstitutions({ token, healthCenterId }),
        {
            refetchInterval: 10000, // Refetch every 10 seconds
        }
    );

    const verifyUserMutation = useMutation(
        ({ userId, userRole, verificationStatus }) => UpdateUserVerification({ token, userId, userRole, verificationStatus }),
        {
            onSuccess: () => {
                userRefetch(); // Refetch the verification after a successful confirmation
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
        ({ institutionId, institutionType, verificationStatus }) => UpdateInstitutionVerification({ token, institutionId, institutionType, verificationStatus }),
        {
            onSuccess: () => {
                institutionRefetch(); // Refetch the verification after a successful confirmation
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
        verifyUserMutation.mutate({ userId, userRole, verificationStatus });
    };

    const handleInstitutionConfirm = (institutionId, institutionType, verificationStatus) => {
        verifyInstitutionMutation.mutate({ institutionId, institutionType, verificationStatus });
    }

    if (userIsLoading || institutionIsLoading) return <div>Loading...</div>

    if (userHasError || institutionHasError) toast({
        title: "Error!",
        description: "An error occurred while fetching the verification requests.",
    })

    return (
        <>
            <VerificationRequestNavBar
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
            {activeTab === "Users" && (
                <div className="mx-8">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold text-lg">Name</TableHead>
                                <TableHead className="font-bold text-lg">Contact</TableHead>
                                <TableHead className="font-bold text-lg">Gender</TableHead>
                                <TableHead className="font-bold text-lg">Role</TableHead>
                                <TableHead className="font-bold text-lg">License</TableHead>
                                <TableHead className="font-bold text-lg">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {activeTab === "Users" && !userIsLoading && !userHasError && (
                                (users?.map((user, index) => <UserContent key={index} onConfirm={handleUserConfirm} userData={user} />)))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={6}></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>)
            }
            {activeTab === "Institutions" && (
                <div className="mx-8">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold text-lg">Name</TableHead>
                                <TableHead className="font-bold text-lg">Created By</TableHead>
                                <TableHead className="font-bold text-lg">Location</TableHead>
                                <TableHead className="font-bold text-lg">Type</TableHead>
                                <TableHead className="font-bold text-lg">License</TableHead>
                                <TableHead className="font-bold text-lg">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {activeTab === "Institutions" && !institutionHasError && !institutionIsLoading && (
                                (institutions?.map((institution, index) => <InstitutionContent key={index} onConfirm={handleInstitutionConfirm} institutionData={institution} />)))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={6}></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                    {activeTab === "Institutions" && institutions == null && (
                        <div className="flex justify-center items-center h-96">No Institutions verification requests</div>
                    )}
                    {activeTab === "Users" && users == null && (
                        <div className="flex justify-center items-center h-96">No Users verification requests</div>
                    )}
                </div>

            )}
        </>
    );
};

export default VerificationRequest;
