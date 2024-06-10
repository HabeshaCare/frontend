import NavBar from "./navBar";
import DoctorList from "../DoctorsCard/doctorList"
const HealthCenterDashboard = () => {
    return (
      <>
      <NavBar/>
      <div className="h-28"></div>
    <div className="m-10"> <DoctorList/></div>
     
      </>
    );
  };


  export default HealthCenterDashboard
  