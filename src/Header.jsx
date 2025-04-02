import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import "./Header.css";
import logo from "./images/logo.png";
import LoginPage from "./LoginPage"; // Import the LoginPage component

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // For navigation

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Bakery Logo" className="logo-img" />
            <span className="title">SDS Bakery</span>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search for cakes, pastries..." className="search-input" />
            <button className="search-btn">
              <Search className="search-icon" size={18} />
            </button>
          </div>

          {/* Icons */}
          <div className="icon-group">
            {/* User Icon - Opens Login Modal */}
            <div className="icon-wrapper" onClick={() => setShowLogin(true)} title="Login / Register">
              <User className="icon" size={30} />
            </div>

            {/* Cart Icon - Navigates to Cart Page */}
            <div className="icon-wrapper cart-icon" onClick={() => navigate("/cart")} title="View Cart">
              <ShoppingCart className="icon" size={30} />
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Login/Register Modal */}
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
