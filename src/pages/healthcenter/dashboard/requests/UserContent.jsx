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

const UserContent = ({ userData, onConfirm }) => {
    const [isVerified, setIsVerified] = useState(userData?.verified);
    return (
        <>
            <div className="flex justify-around mt-8">
                <div className="flex items-center gap-4">
                    <img src={userData?.imageUrl} className="w-10 h-10 rounded-lg bg-gray-300" alt="profile pic" />
                    <div className="flex flex-col">
                        <p className="text-left font-bold">{userData?.fullname}</p>
                        <p className="text-left text-[#B5B5C3]">{userData?.gender}</p>
                    </div>
                </div>
                <div >{userData?.phonenumber}</div>
                <div className="border border-solid flex flex-col items-center h-8 w-24 rounded-2xl bg-gray-200">
                    <p>{userData?.role}</p>
                </div>
                <div>
                    <a className="text-[#B5B5C3]" target="_blank" href={userData?.licenseUrl} rel="noreferrer" >View License Info</a>
                </div>
                <AlertDialog className="h-8 w-24">
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">{userData?.verified ? "remove" : "verify"}</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Verifying User</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you have reviewed the profile and want to verify the user?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>No</AlertDialogCancel>
                            <AlertDialogAction onClick={() => { onConfirm(userData?.id, userData?.role, !isVerified); setIsVerified(!isVerified) }}>
                                Yes
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

        </>
    );
};

export default UserContent