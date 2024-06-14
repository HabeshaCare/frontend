import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ReqForm from "../../doctor/form/requestForm";
import DisplayPatientInfo from "./cardForm";
import ResultFormComponent from "./resultForm";

const Card = (props) => {
    const data = {
        name: 'John Doe',
        address: '123 Main St',
        organization: 'Acme Corp',
        phoneNumber: '+251912345678',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        drugTherapy: 'None',
        lastDose: 'N/A',
        clinicalInfo: 'No relevant clinical information.',
        urgency: 'Normal',
        sampleDate: '2024-06-14',
        fasting: 'Non-fasting',
        sampleType: 'Blood',
        profileTests: ['Biochemistry', 'Hematology'],
        specificTests: ['G2000', 'GT11', 'HB3'],
        additionalTests: ['Cervical Cytology: Pap smear'],
        site: 'Cervix'
    };
    return (
        <div className="w-10/12 bg-white rounded-lg shadow-md p-6 mx-auto mb-6 flex items-center justify-between">
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{props.Name}</h2>
                <p className="text-sm text-gray-500">{props.Hospital}</p>
            </div>

            <div className="flex">
                <Dialog>
                    <DialogTrigger>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">submit result </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Result form</DialogTitle>
                            <DialogDescription>
<ResultFormComponent/>
                               
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Dialog
                >
                    <DialogTrigger>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">view request</button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>request</DialogTitle>
                            <DialogDescription>
                                <DisplayPatientInfo data={data} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default Card;
