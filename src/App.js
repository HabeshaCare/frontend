
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/signup";
import Login from './pages/auth/login';
import PatientProfile from "./pages/patient/profile/";
import PatientDashboard from '@/pages/patient/dashboard';
import DoctorsDashboard from '@/pages/doctor/dashboard';
import LaboratoryDashboard from '@/pages/laboratory/dashboard';
import LaboratoryProfile from "./pages/laboratory/profile/index";
import HealthCenterDashboard from '@/pages/healthcenter/dashboard';
import HealthCenterProfile from "./pages/healthcenter/profile";
import PharmacyDashboard from '@/pages/pharmacy/dashboard';
import PharmacyProfile from "./pages/pharmacy/profile";
import ReceptionDashboard from '@/pages/reception/dashboard';
import VarifyEmail from "./components/auth/varifyEmail";
import { QueryClient, QueryClientProvider } from 'react-query';
import DoctorProfile from '@/pages/doctor/profile/'
import MedicalHistory from "@/pages/patient/medicalhistory"
import ReceptionProfile from "@/pages/reception/profile";
import Appointement from "./pages/doctor/appointments";
import Patient from "./pages/doctor/patients";

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/pharmacy/profile" element={<PharmacyProfile />} />
          <Route path="/pharmacy/dashboard" element={<PharmacyDashboard />} />
          <Route path="/laboratory/profile" element={<LaboratoryProfile />} />
          <Route path="/laboratory/dashboard" element={<LaboratoryDashboard />} />
          <Route path="/healthcenter/dashboard" element={<HealthCenterDashboard />} />
          <Route path="/healthcenter/profile" element={<HealthCenterProfile />} />
          <Route path="/reception/profile" element={<ReceptionProfile />} />
          <Route path="/reception/dashboard" element={<ReceptionDashboard />} />
          <Route path="/doctor/patient" element={<Patient />} />
          <Route path="/doctor/appointments" element={<Appointement />} />
          <Route path="/doctor/profile" element={<DoctorProfile />} />
          <Route path="/doctor/dashboard" element={<DoctorsDashboard />} />
          <Route path="/patient/medicalhistory" element={<MedicalHistory />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/verifyEmail" element={<VarifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}


export default App;
