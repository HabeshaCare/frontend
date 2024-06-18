
import { useMutation, useQuery } from "react-query";

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

import { getUsers, UpdateUserVerification } from "./lib";
import UserContent from "./UserContent";


const AssociatedUsers = () => {
    const token = useSelector((state) => state.auth.token);
    const healthCenterId = useSelector((state) => state.admin.institutionId)

    const { toast } = useToast();
    const { data: users, isError: userHasError, isLoading: userIsLoading, refetch: userRefetch } = useQuery(
        "associatedUsers",
        () => getUsers({ token, healthCenterId }),
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
                    description: "User verification updated successfully.",
                });
            },
            onError: (error) => {
                console.error("Error updating user:", error);
                toast({
                    title: "Error!",
                    description: "An error occurred while updating the user.",
                });
            },
        }
    );


    const handleUserConfirm = (userId, userRole, verificationStatus) => {
        verifyUserMutation.mutate({ userId, userRole, verificationStatus });
    };

    if (userIsLoading) return <div>Loading...</div>

    if (userHasError) toast({
        title: "Error!",
        description: "An error occurred while fetching the associated institutions.",
    })

    return (
        <>
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
                        {!userIsLoading && !userHasError && (
                            (users?.map((user, index) => <UserContent key={index} onConfirm={handleUserConfirm} userData={user} />)))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </>
    );
};

export default AssociatedUsers;
