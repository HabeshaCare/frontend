import React from "react"
import NavBar from "../../../components/dashboard/navBar.jsx"
import Home from "../../../components/dashboard/home.jsx"
import Telemedicine from "../../../components/dashboard/telemedicine.jsx"


const Dashboard = () => {
    return(
        <>
        <NavBar/>
        <Home/>
        <Telemedicine/>
        </>
    )
}


export default Dashboard