import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Learning from './components/Learning';
import Login from './components/Login';
import Signup from './components/Signup';
import Donate from './components/Donate';
import VoiceSplitter from './components/VoiceSplitter';
import './App.css';
import './styles/apple-inspired.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/voice-splitter" element={<VoiceSplitter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
          
          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2025 ré.ai - Where Music Meets AI</p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App; 