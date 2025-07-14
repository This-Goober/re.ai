import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      navigate('/');
      setIsMenuOpen(false); // Close menu after logout
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            ré.ai
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/research" onClick={closeMenu}>Research</Link></li>
              <li><Link to="/learning" onClick={closeMenu}>Learning</Link></li>
            </ul>
            
            <div className="nav-auth">
              {currentUser && (
                <>
                  <span className="text-small">
                    Welcome, {currentUser.displayName || currentUser.email}
                  </span>
                  <button onClick={handleLogout} className="btn btn-ghost">
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navigation; 