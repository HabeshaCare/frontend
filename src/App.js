import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

import Register from "./pages/auth/signup";
import Login from './pages/auth/login';
// import PatientProfile from "./pages/patient/profile/";
import PatientDashboard from '@/pages/patient/dashboard';
import DoctorsDashboard from '@/pages/doctor/dashboard';
import LaboratoryDashboard from '@/pages/laboratory/dashboard';
import LaboratoryProfile from "./pages/laboratory/profile";
import HealthCenterDashboard from '@/pages/healthcenter/[id]/dashboard';
import HealthCenterProfile from "./pages/healthcenter/[id]/dashboard/profile";
import PharmacyDashboard from '@/pages/pharmacy/dashboard';
import PharmacyProfile from "./pages/pharmacy/profile";
import ReceptionDashboard from '@/pages/reception/dashboard';
import VarifyEmail from "./components/auth/varifyEmail";
import DoctorProfile from '@/pages/doctor/profile/'
// import MedicalHistory from "@/pages/patient/medicalhistory"
import ReceptionProfile from "@/pages/reception/profile";
import Appointement from "@/pages/doctor/appointments";
import Patient from "./pages/doctor/patients";
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/homepage';
import VideoChat from './pages/video-call/';
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/patient/appointment/chat" element={<VideoChat />} />
              <Route path="/pharmacy/profile" element={<ProtectedRoute requiredRole="PharmacyAdmin"><PharmacyProfile /></ProtectedRoute>} />
              <Route path="/pharmacy/dashboard" element={<ProtectedRoute requiredRole="PharmacyAdmin"><PharmacyDashboard /></ProtectedRoute>} />

              <Route path="/laboratory/profile" element={<ProtectedRoute requiredRole="LaboratoryAdmin"><LaboratoryProfile /></ProtectedRoute>} />
              <Route path="/laboratory/dashboard" element={<ProtectedRoute requiredRole="LaboratoryAdmin"><LaboratoryDashboard /></ProtectedRoute>} />

              <Route path="/healthcenter/dashboard" element={<ProtectedRoute requiredRole="HealthCenterAdmin"><HealthCenterDashboard /></ProtectedRoute>} />
              <Route path="/healthcenter/profile" element={<ProtectedRoute requiredRole="HealthCenterAdmin"><HealthCenterProfile /></ProtectedRoute>} />

              <Route path="/reception/profile" element={<ProtectedRoute requiredRole="Reception"><ReceptionProfile /></ProtectedRoute>} />
              <Route path="/reception/dashboard" element={<ProtectedRoute requiredRole="Reception"><ReceptionDashboard /></ProtectedRoute>} />

              <Route path="/doctor/patient" element={<ProtectedRoute requiredRole="Doctor"><Patient /></ProtectedRoute>} />
              <Route path="/doctor/appointments" element={<ProtectedRoute requiredRole="Doctor"><Appointement /></ProtectedRoute>} />
              <Route path="/doctor/profile" element={<ProtectedRoute requiredRole="Doctor"><DoctorProfile /></ProtectedRoute>} />
              <Route path="/doctor/dashboard" element={<ProtectedRoute requiredRole="Doctor"><DoctorsDashboard /></ProtectedRoute>} />

              {/* <Route path="/patient/appointments" element={<ProtectedRoute requiredRole="Patient"><Appointement /></ProtectedRoute>} />
              <Route path="/patient/medicalhistory" element={<ProtectedRoute requiredRole="Patient"><MedicalHistory /></ProtectedRoute>} />
              <Route path="/patient/profile" element={<ProtectedRoute requiredRole="Patient"><PatientProfile /></ProtectedRoute>} /> */}
              <Route path="/patient/dashboard" element={<ProtectedRoute requiredRole="Patient"><PatientDashboard /></ProtectedRoute>} />

              <Route path="/verifyEmail" element={<VarifyEmail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/unauthorized" element={<div>Unauthorized Access <a href="/login" className='text-primary '>Login</a></div>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
