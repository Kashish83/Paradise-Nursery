import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';

const Navbar = () => {
  // Retrieve total quantity dynamically from Redux store
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-tagline">Where Greenery Meets Serenity</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-item active-nav' : 'nav-item'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive ? 'nav-item active-nav' : 'nav-item'
            }
          >
            Plants
          </NavLink>

          {/* Cart Link with Icon and Dynamic Badge */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'nav-item cart-nav-link active-nav' : 'nav-item cart-nav-link'
            }
            aria-label={`Shopping Cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cart-svg"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalQuantity > 0 && (
                <span className="cart-badge-count">{totalQuantity}</span>
              )}
            </div>
            <span className="cart-text">Cart</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
