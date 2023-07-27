import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Packages from './components/pages/Packages';
import Visa from './components/pages/Visa';
import LoginForm from './components/pages/LoginForm';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/sign-up' ? (
        <div className="background-image"></div>
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/sign-up" element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default App;
