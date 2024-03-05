import React from "react"
import NavBar from "@/components/dashboard/navBar"
import Home from "@/components/dashboard/home"
import Telemedicine from "@/components/dashboard/telemedicine"
import Records from "@/components/dashboard/records"

const Dashboard = () => {
    return(
        <>
        <NavBar/>
        <Home/>
        <Telemedicine/>
        <Records/>
        </>
    )
}


export default Dashboard