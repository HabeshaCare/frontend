import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReqForm from "../../doctor/patients/requestForm";

const Card = (props) => {
  return (
    <div className="w-10/12 bg-white rounded-lg shadow-md p-6 mx-auto mb-6 flex items-center justify-between">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{props.Name}</h2>
        <p className="text-sm text-gray-500">{props.Hospital}</p>
      </div>

      <div className="flex">
        <Dialog>
          <DialogTrigger>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              submit result{" "}
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Result form</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              view request
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>request</DialogTitle>
              <DialogDescription>
                <ReqForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
