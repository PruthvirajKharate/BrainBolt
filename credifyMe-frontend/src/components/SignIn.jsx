import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import metamaskLogo from "../assets/MetaMask_Fox.Jpeg"; // Corrected path

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const navigate = useNavigate();

  const handleMetaMaskConnect = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask not detected. Please install MetaMask.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      console.log("Connected account:", address);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect to MetaMask.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!walletAddress) {
      alert("Please connect your MetaMask wallet first.");
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Connect with MetaMask</h3>
        
        <button
          className="btn btn-warning w-100 mb-3 d-flex align-items-center justify-content-center"
          onClick={handleMetaMaskConnect}
        >
          <img
            src={metamaskLogo}
            className="metamask-logo"
            alt="MetaMask"
            style={{ width: "30px", marginRight: "10px" }}
          />
          {walletAddress ? "Connected" : "Connect Wallet"}
        </button>

        {walletAddress && (
          <p className="text-center text-success">Wallet: {walletAddress}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner-border spinner-border-sm" role="status"></span>
            ) : (
              "Sign In"
            )}
          </button>

          {isSuccess && (
            <p className="text-success text-center mt-3">
               Log in Successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
