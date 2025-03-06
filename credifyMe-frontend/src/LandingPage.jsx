import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <img src="images/logo.png" className="navbar-brand logo" alt="Credify-ME Logo" />
        <h1 className="logo_name text-shadow text-light">Credify-ME</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-blockchain">Why Choose Us?</a>
            </li>
            <li className="nav-item">
              <a href="login.html" className="btn navbar-btn cta-button">Login</a>
            </li>
            <li className="nav-item">
              <a href="register.html" className="btn navbar-btn cta-button">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/a.jpg" className="d-block w-100" alt="Fake credentials challenge" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Addressing the Challenge of Fake Credentials</h5>
            <p>Job applicants often face challenges with fake credentials and unverifiable work experience.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/carosuel1.jpg" className="d-block w-100" alt="Decentralized system" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Decentralized, Secure Verification</h5>
            <p>Our blockchain-powered system ensures verifiable, secure, and tamper-proof credentials.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="about-us" className="container my-5">
      <h2 className="text-center">About Us</h2>
      <hr className="text-dark mx-auto" style={{ width: "100px" }} />
      <p className="lead text-center">Transforming recruitment with secure, transparent, and efficient resume verification.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center">Our Mission</h4>
              <p>Providing a secure, transparent, and efficient solution for verifying resumes and credentials.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center">What We Do</h4>
              <p>We offer a blockchain-powered verification system ensuring trust in resumes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <p>© 2025 Credify-ME. All Rights Reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
