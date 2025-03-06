import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row justify-content-between">
          
          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-4 mb-3 text-center">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home"><i className="bi bi-house-door"></i> Home</a></li>
              <li><a href="#how-it-works"><i className="bi bi-info-circle"></i> About Us</a></li>
              <li><a href="#for-employers"><i className="bi bi-briefcase"></i> Benefits</a></li>
              <li><a href="#why-blockchain"><i className="bi bi-shield-lock"></i> Why Choose Us?</a></li>
            </ul> 
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-4 col-md-4 mb-3 text-center">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="bi bi-envelope-fill"></i> email@example.com</li>
              <li><i className="bi bi-phone-fill"></i> +1 234 567 890</li>
              <li><i className="bi bi-geo-alt-fill"></i> 123, Address Street, City, Country</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-4 col-md-4 mb-3 text-center">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <p className="mb-0">© 2025 <span className="brand-name">Credify-ME</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
