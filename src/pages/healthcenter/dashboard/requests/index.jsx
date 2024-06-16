import { useState } from "react";
import VerificationRequestNavBar from "./requestNavBar";

const UserContent = ({ userData }) => {
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
            </div>

        </>
    );
};

const InstitutionContent = ({ institutionData }) => {
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
                    <a className="text-[#B5B5C3]" target="_blank" href={institutionData?.licenseUrl} rel="noreferrer" >View License Info</a>
                </div>
            </div>
        </>
    );
};

const VerificationRequest = () => {
    const [activeTab, setActiveTab] = useState("Users");
    const [users, setUsers] = useState([
        {
            fullname: "Abebe Kebede", imageUrl: "https://randomuser.me/api/portraits", gender: "Male", licenseUrl: "https://randomuser.me/api/portraits", phonenumber: "0912345678", role: "Doctor"
        },
        {
            fullname: "Zuvan Belay", imageUrl: "https://randomuser.me/api/portraits", gender: "Female", licenseUrl: "https://randomuser.me/api/portraits", phonenumber: "0912345678", role: "Reception"
        }
    ]);
    const [institutions, setInsitutions] = useState([
        {
            name: "Institution 1",
            createdBy: "John Doe",
            location: "New York",
            type: "Hospital",
            licenseUrl: "https://example.com/license1"
        },
        {
            name: "Institution 2",
            createdBy: "Jane Smith",
            location: "London",
            type: "Clinic",
            licenseUrl: "https://example.com/license2"
        }
    ]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <VerificationRequestNavBar
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
            {activeTab === "Users" && (
                <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold">
                    <div>Name</div>
                    <div className="pl-24">Contact</div>
                    <div>Role</div>
                    <div>License Information</div>
                </div>)
            }
            {activeTab === "Institutions" && (
                <div className="flex justify-around my-4 text-[#1F555D] text-lg font-bold">
                    <div>Name</div>
                    <div>Created by</div>
                    <div className="pl-24">Location</div>
                    <div>Type</div>
                    <div>License Information</div>
                </div>

            )}
            {console.log(activeTab === "Institutions")}
            {activeTab === "Users" && (
                (users.map((user, index) => <UserContent key={index} userData={user} />)))}
            {activeTab === "Institutions" && (
                (institutions.map((institution, index) => <InstitutionContent key={index} institutionData={institution} />)))}
        </>
    );
};

export default VerificationRequest;
