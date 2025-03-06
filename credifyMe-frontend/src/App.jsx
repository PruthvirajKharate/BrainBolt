import React from "react";
import Home from "./Home";
import CandidateDashboard from "./CandidateDashboard";
import MetaMaskSignup from "./MetaMaskSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<MetaMaskSignup />} />
        <Route path="/dashboard" element={<CandidateDashboard />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
