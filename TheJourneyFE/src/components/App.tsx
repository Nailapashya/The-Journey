import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JourneyPage from './pages/JourneyPage';
import AddJourneyPage from './pages/AddJourneyPage';
import MyProfilePage from './pages/MyProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<JourneyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-journey" element={<AddJourneyPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
