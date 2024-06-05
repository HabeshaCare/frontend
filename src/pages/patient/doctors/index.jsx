import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import doc from "@/public/img/docprofile.webp";
import doc2 from "@/public/img/docprofile2.webp";
import doc3 from "@/public/img/docprofile3.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
const Card = ({ doctor }) => {
  return (
    <div
      className="relative flex justify-center items-end m-2 p-2 w-1/5 h-48 rounded-lg bg-cover bg-center overflow-hidden transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${doctor.profilePicture})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#1F555D] to-transparent text-white">
        <p className="font-bold text-sm">{doctor.name}</p>
        <p className="text-xs">{doctor.speciality}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-inherit border-none ">View Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "Doctor Yeabsira Nigusse",
      speciality: "General Practitioner",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Jane Doe",
      speciality: "Cardiologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor John Smith",
      speciality: "Neurologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc2, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
    {
      name: "Doctor Emily Johnson",
      speciality: "Dermatologist",
      profilePicture: doc3, // Replace with actual image URL
    },
  ];

  return (
    <>
      <div className="mx-10 sm:mx-32 lg:mx-72 mt-4">
        <Input placeholder="Search Your doctor" className="h-12" />
      </div>
      <div className="flex flex-wrap justify-around mt-6">
        {doctors.map((doctor, index) => (
          <Card key={index} doctor={doctor} />
        ))}
      </div>
    </>
  );
};

export default Doctors;
