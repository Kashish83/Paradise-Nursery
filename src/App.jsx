import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

// Landing Page Component
export function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-container">
          {/* Hero Welcome Card */}
          <header className="landing-hero">
            <span className="landing-badge">🌿 Welcome to Your Urban Oasis</span>
            <h1 className="landing-title">Paradise Nursery</h1>
            <div className="landing-divider"></div>
            <p className="landing-description">
              Where Greenery Meets Serenity. Welcome to Paradise Nursery, your premier online
              destination for hand-selected, air-purifying, aromatic, and easy-care indoor houseplants.
              Transform your living space and workspace into lush, tranquil botanical sanctuaries.
            </p>
            <div className="landing-cta-wrap">
              <button
                type="button"
                className="get-started-btn"
                onClick={handleGetStarted}
              >
                <span>Get Started</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 5" />
                </svg>
              </button>
            </div>
          </header>

          {/* About Us Component Section */}
          <section className="landing-about">
            <AboutUs />
          </section>
        </div>
      </div>
    </div>
  );
}

// Main App with React Router DOM routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
