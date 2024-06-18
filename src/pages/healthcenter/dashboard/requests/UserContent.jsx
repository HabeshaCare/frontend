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

const UserContent = ({ userData, onConfirm }) => {
    const [isVerified, setIsVerified] = useState(userData?.verified);
    return (
        <>
            <TableRow>
                <TableCell>
                    <div className="flex flex-row gap-2 items-center" >
                        <img src={userData?.imageUrl} className="w-10 h-10 rounded-lg bg-gray-300" alt="profile pic" />
                        <p>{userData?.fullname ?? "N/A"}</p>
                    </div>
                </TableCell>
                <TableCell>{userData?.phonenumber ? userData?.phonenumber : userData?.email ? userData.email : "N/A"}</TableCell>
                <TableCell>{userData?.gender === "M" ? "Male" : "Female"}</TableCell>
                <TableCell>{userData?.role}</TableCell>
                <TableCell> <a href={`http://localhost:5072/${userData.licensePath}`} className="hover:underline hover:cursor-pointer" target="_blank" rel="noreferrer" ><div className="flex flex-row gap-1">View License Info <FaExternalLinkAlt /> </div> </a></TableCell>
                <TableCell>
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
                                <AlertDialogAction className="ghost" onClick={() => { onConfirm(userData?.id, userData?.role, !isVerified); setIsVerified(!isVerified) }}>
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

export default UserContent