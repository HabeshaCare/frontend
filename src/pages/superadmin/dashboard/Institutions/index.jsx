
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

import InstitutionContent from "./InstitutionContent";

import { getInstitutions, UpdateInstitutionVerification } from "./lib";


const AssociatedInstitutions = () => {
    const token = useSelector((state) => state.auth.token);
    const healthCenterId = useSelector((state) => state.admin.institutionId)

    const { toast } = useToast();
    const { data: institutions, isError: institutionHasError, isLoading: institutionIsLoading, refetch: institutionRefetch } = useQuery(
        "associatedInstitution",
        () => getInstitutions({ token, healthCenterId }),
        {
            refetchInterval: 10000, // Refetch every 10 seconds
        }
    );
    const verifyInstitutionMutation = useMutation(
        ({ institutionId, institutionType, verificationStatus }) => UpdateInstitutionVerification({ token, institutionId, institutionType, verificationStatus }),
        {
            onSuccess: () => {
                institutionRefetch(); // Refetch the verification after a successful confirmation
                toast({
                    title: "Success!",
                    description: "Institution verification updated successfully.",
                });
            },
            onError: (error) => {
                console.error("Error updating institution:", error);
                toast({
                    title: "Error!",
                    description: "An error occurred while updating the institution.",
                });
            },
        }
    )
    const handleInstitutionConfirm = (institutionId, institutionType, verificationStatus) => {
        verifyInstitutionMutation.mutate({ institutionId, institutionType, verificationStatus });
    }

    if (institutionIsLoading) return <div>Loading...</div>

    if (institutionHasError) toast({
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
                            <TableHead className="font-bold text-lg">Location</TableHead>
                            <TableHead className="font-bold text-lg">Type</TableHead>
                            <TableHead className="font-bold text-lg">License</TableHead>
                            <TableHead className="font-bold text-lg">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {!institutionHasError && !institutionIsLoading && (
                            (institutions?.map((institution, index) => <InstitutionContent key={index} onConfirm={handleInstitutionConfirm} institutionData={institution} />)))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                {institutions == null && (
                    <div className="flex justify-center items-center h-96">No Institutions verification requests</div>
                )}
            </div>
        </>
    );
};

export default AssociatedInstitutions;
