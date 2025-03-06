import React from "react";
import "./Carousel.css"; // Import CSS for styling

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/src/assets/l4logo.Jpeg" className="carousel-image" alt="Fake credentials challenge" />
          <div className="carousel-caption">
            <h5>Addressing the Challenge of Fake Credentials</h5>
            <p>Job applicants often face challenges with fake credentials and unverifiable work experience.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/src/assets/blockchain.jpeg" className="carousel-image" alt="Decentralized system" />
          <div className="carousel-caption">
            <h5>Decentralized, Secure Verification</h5>
            <p>Our blockchain-powered system ensures verifiable, secure, and tamper-proof credentials.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/src/assets/l3logo.Jpeg" className="carousel-image" alt="Decentralized system" />
          <div className="carousel-caption">
            <h5>Faster and More efficient Hiring</h5>
            <p>Employers can quickly validate the candidates resumes, reducing delays and improving the efficiency of the recruitment process.</p>
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

export default Carousel;
