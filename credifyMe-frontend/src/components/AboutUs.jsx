import React from "react";
import "./AboutUs.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <section id="about-us" className="container-fluid mt-5 p-2">
      <h2 className="text-center section-title">About Us</h2>
      <hr className="divider mx-auto" />
      <p className="lead text-center">
        Transforming recruitment with secure, transparent, and efficient resume verification.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card about-card ">
            <div className="card-body text-center">
              <h4>Our Mission</h4>
              <ul className="custom-list">
                <li>Eliminating risks of fake credentials in hiring.</li>
                <li>Ensuring a secure and efficient verification process.</li>
                <li>Providing trustworthy hiring solutions for organizations.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card about-card">
            <div className="card-body text-center">
              <h4>What We Do</h4>
              <ul className="custom-list">
                <li>Develop a blockchain-powered verification system.</li>
                <li>Allow employers to quickly verify educational qualifications and work experience.</li>
                <li>Enable job seekers to showcase verified credentials with confidence.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card about-card">
            <div className="card-body text-center">
              <h4>Our Solutions</h4>
              <ul className="custom-list">
                <li><span className="highlight">Secure and Tamper-Proof:</span> Blockchain prevents fraud and ensures data integrity.</li>
                <li><span className="highlight">Decentralized Network:</span> Instantly verify resumes without intermediaries.</li>
                <li><span className="highlight">Efficiency in Hiring:</span> Speed up recruitment with automated credential checks.</li>
                <li><span className="highlight">Increased Trust:</span> Job seekers can showcase verified credentials to employers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
