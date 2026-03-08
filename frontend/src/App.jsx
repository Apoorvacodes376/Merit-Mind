import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BiasDetection from './pages/BiasDetection';
import JobRewriter from './pages/JobRewriter';
import Counterfactual from './pages/Counterfactual';
import SkillGraph from './pages/SkillGraph';
import FairnessOptimizer from './pages/FairnessOptimizer';
import SilenceRank from './pages/SilenceRank';
import EmotionBlind from './pages/EmotionBlind';
import BiasSimulator from './pages/BiasSimulator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="bias-detection" element={<BiasDetection />} />
          <Route path="job-rewriter" element={<JobRewriter />} />
          <Route path="counterfactual" element={<Counterfactual />} />
          <Route path="skill-graph" element={<SkillGraph />} />
          <Route path="fairness-optimizer" element={<FairnessOptimizer />} />
          <Route path="silence-rank" element={<SilenceRank />} />
          <Route path="emotion-blind" element={<EmotionBlind />} />
          <Route path="bias-simulator" element={<BiasSimulator />} />
        </Route>
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
