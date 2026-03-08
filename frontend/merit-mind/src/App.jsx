import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import RecruiterDashboard from './pages/recruiter/Dashboard';
import Jobs from './pages/recruiter/Jobs';
import Candidates from './pages/recruiter/Candidates';
import Simulator from './pages/recruiter/Simulator';
import Reports from './pages/recruiter/Reports';
import CandidateDashboard from './pages/candidate/Dashboard';
import Skills from './pages/candidate/Skills';
import Interview from './pages/candidate/Interview';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
        {/* Recruiter Routes */}
        <Route path="/recruiter/dashboard" element={
          <ProtectedRoute requiredRole="recruiter">
            <RecruiterDashboard />
          </ProtectedRoute>
        } />
        <Route path="/recruiter/jobs" element={
          <ProtectedRoute requiredRole="recruiter">
            <Jobs />
          </ProtectedRoute>
        } />
        <Route path="/recruiter/candidates" element={
          <ProtectedRoute requiredRole="recruiter">
            <Candidates />
          </ProtectedRoute>
        } />
        <Route path="/recruiter/simulator" element={
          <ProtectedRoute requiredRole="recruiter">
            <Simulator />
          </ProtectedRoute>
        } />
        <Route path="/recruiter/reports" element={
          <ProtectedRoute requiredRole="recruiter">
            <Reports />
          </ProtectedRoute>
        } />
        
        {/* Candidate Routes */}
        <Route path="/candidate/dashboard" element={
          <ProtectedRoute requiredRole="candidate">
            <CandidateDashboard />
          </ProtectedRoute>
        } />
        <Route path="/candidate/skills" element={
          <ProtectedRoute requiredRole="candidate">
            <Skills />
          </ProtectedRoute>
        } />
        <Route path="/candidate/interview" element={
          <ProtectedRoute requiredRole="candidate">
            <Interview />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;