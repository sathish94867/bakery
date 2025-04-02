import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import HorizontalNavbar from "./navbar";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
// import HomePage from "./HomePage"; // Your homepage component

const App = () => {
  return (
    <Router>
      <Header />
      <HorizontalNavbar/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />

      </Routes>
    </Router>
  );
};

export default App;
