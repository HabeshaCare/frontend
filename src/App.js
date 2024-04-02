
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/signup";
import Login from './pages/auth/login';
import PatientProfile from "./pages/patient/profile/patientProfile";
import Dashboard from '@/pages/patient/dashboard';
import VarifyEmail from "./components/auth/varifyEmail";
import { QueryClient, QueryClientProvider } from 'react-query';
import DoctorProfile from '@/pages/doctor/profile/'
import MedicalHistory from "@/pages/patient/medicalhistory"

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          
          <Route path="/doctor/profile" element={<DoctorProfile />} />
          <Route path="/patient/medicalhistory" element={<MedicalHistory />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/patient/dashboard" element={<Dashboard />} />
          <Route path="/verifyEmail" element={<VarifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
