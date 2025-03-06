import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { useHistory } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/src/assets/l2.Jpeg" className="logo" alt="Credify-ME Logo" />
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end mx-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/why-choose-us">Why Choose Us?</Link>
            </li>
          </ul>
        </div>

        {/* Buttons (Right Aligned) */}
        <div className="d-flex">
          <Link to="/login" className="btn btn-primary navbar-btn me-2">Sign In</Link>
          <Link to="/register" className="btn btn-warning text-dark navbar-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
