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

const InstitutionContent = ({ institutionData, onConfirm }) => {
    const [isVerified, setIsVerified] = useState(institutionData?.verified);
    return (
        <>
            <div className="flex justify-around mt-8">

                <div>{institutionData?.name}</div>
                <div>{institutionData?.createdBy}</div>
                <div className="pl-24">{institutionData?.location}</div>
                <div className="border border-solid flex flex-col items-center h-8 w-24 rounded-2xl bg-red-100 text-red-600">
                    <p>{institutionData?.type}</p>
                </div>
                <div>
                    <a className="text-[#B5B5C3]" target="_blank" href={institutionData?.licenseUrl} rel="noreferrer">View License Info</a>
                </div>
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
            </div>
        </>
    );
};
export default InstitutionContent;