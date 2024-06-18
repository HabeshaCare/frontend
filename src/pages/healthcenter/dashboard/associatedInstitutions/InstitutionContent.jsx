import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { FaExternalLinkAlt } from "react-icons/fa";

const InstitutionContent = ({ institutionData, onConfirm }) => {
    const [isVerified, setIsVerified] = useState(institutionData?.verified);
    return (
        <>
            <TableRow>
                <TableCell>{institutionData?.name}</TableCell>
                <TableCell>{institutionData?.location}</TableCell>
                <TableCell>{institutionData?.type}</TableCell>
                <TableCell> <Button variant="link" target="_blank" href={institutionData?.licenseUrl} rel="noreferrer" ><div className="flex flex-row gap-1">View License Info <FaExternalLinkAlt /></div>
                </Button></TableCell>
                <TableCell>
                    <AlertDialog className="h-8 w-24">
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">{institutionData?.verified ? "remove" : "verify"}</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Verifying User</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Are you sure you have reviewed the profile and want to verify the institution?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction onClick={() => { onConfirm(institutionData?.id, institutionData?.type, !isVerified); setIsVerified(!isVerified) }}>
                                    Yes
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </TableCell>
            </TableRow>

        </>
    );
};
export default InstitutionContent;