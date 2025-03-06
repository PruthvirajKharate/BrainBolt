import React from "react";
import "./WhyChooseUs.css"; // Import CSS for styling

const WhyChooseUs = () => {
  return (
    <div className="container-fluid why-choose-us">
      <div className="row w-100">
        {/* Left Section */}
        <div className="col-md-4 left-section">
          <h2>Why Choose Us?</h2>
          <p>The numbers speak for themselves.</p>
        </div>

        {/* Right Section */}
        <div className="col-md-8 right-section">
          {[
            {
              id: 1,
              percentage: "91%",
              title: "Tamper-Proof Verification",
              description:
                "Ensuring that credentials and work experiences are authenticated and cannot be altered.",
              color: "circle-1",
            },
            {
              id: 2,
              percentage: "89%",
              title: "Blockchain-Based Transparency",
              description:
                "Using blockchain to provide a secure and fraud-proof verification process.",
              color: "circle-2",
            },
            {
              id: 3,
              percentage: "83%",
              title: "Data Privacy & Security",
              description:
                "We use encryption and access controls to secure all sensitive data.",
              color: "circle-3",
            },
          ].map((item) => (
            <div className="info-box" key={item.id}>
              <div className={`circle ${item.color}`}>{item.id}</div>
              <div className="info-text">
                <h5>
                  {item.percentage} {item.title}
                </h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
