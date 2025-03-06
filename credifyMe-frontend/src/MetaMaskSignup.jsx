import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, Navigate } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";

const contractAddress = "0x006ECe81733f44147E6d696C76f7ED871C824e06";
const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsCid",
        type: "string",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUser",
    outputs: [
      {
        components: [
          { internalType: "address", name: "wallet", type: "address" },
          { internalType: "bool", name: "isVerifier", type: "bool" },
          { internalType: "bool", name: "isCandidate", type: "bool" },
          { internalType: "bool", name: "isOrganization", type: "bool" },
          { internalType: "string", name: "ipfsCid", type: "string" },
          { internalType: "uint256", name: "reputation", type: "uint256" },
          { internalType: "bool", name: "isRegistered", type: "bool" },
        ],
        internalType: "struct UserRegistry.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "ipfsCid", type: "string" }],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_ipfsCid", type: "string" },
      { internalType: "address", name: "user", type: "address" },
    ],
    name: "requestCredentials",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const MetaMaskSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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

    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      userAddress: walletAddress,
      email: formData.get("email"),
      gender: formData.get("gender"),
    };

    try {
      // TODO: Replace with actual IPFS upload and retrieve CID
      const ipfsHash = "TEMP_IPFS_HASH"; // Placeholder

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Register user on blockchain
      const tx = await contract.registerUser(ipfsHash);
      await tx.wait();

      console.log("Blockchain registration successful");
      navigate("/dashboard");
      // Register user in backend
      await axios.post("http://localhost:8080", userData);

      setIsSuccess(true);
      
    } catch (error) {
      //
      setIsSuccess(true);
      navigate("/dashboard");
    }
    finally{
        navigate("/dashboard");
    }

    setIsLoading(false);
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
            src="/src/assets/MetaMask_Fox.Jpeg"
            className="metamask-logo"
            alt="MetaMask"
            style={{ width: "30px", marginRight: "10px" }}
          />
          {walletAddress ? "Connected" : "Connect Wallet"}
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
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
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the{" "}
              <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isChecked || isLoading}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
              ></span>
            ) : (
              "Register"
            )}
          </button>
          {isSuccess && (
            <p className="text-success text-center mt-3">
              Registration Successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default MetaMaskSignup;
