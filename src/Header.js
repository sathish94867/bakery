import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import "./Header.css"; // Import CSS
import logo from "./images/logo.png"; // Import the logo


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
        <img src={logo} alt="Bakery Logo" className="logo-img" />     

        <span className="title">SDS Bakery</span>   </div>
        {/* Search Bar */}
   <div className="search-bar">
          <input
            type="text"
            placeholder="Search for cakes, pastries..."
            className="search-input"
          />
          <button className="search-btn">
            <Search className="search-icon" size={18} />
          </button>
        </div>

        {/* Icons */}
        <div className="icon-group">
          <div className="icon-wrapper">
            <User className="icon" size={30} />
          </div>
          <div className="icon-wrapper cart-icon">
            <ShoppingCart className="icon" size={30} />
            <span className="badge">0</span> {/* Badge for cart count */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
