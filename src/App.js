
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/auth/signup";
import Login from './pages/auth/login';
import Profile from '@/pages/patient/profile';
import Dashboard from '@/pages/patient/dashboard';
import VarifyEmail from "./components/auth/varifyEmail";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/verifyEmail"element={<VarifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
