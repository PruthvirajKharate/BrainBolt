import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MetaMaskSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);
    const [signature, setSignature] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
    });

    const navigate = useNavigate();

    const handleMetaMaskConnect = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                const account = accounts[0];

                // Request user to sign a message for authentication
                const message = `Sign this message to authenticate with our service. Wallet: ${account}`;
                const signature = await window.ethereum.request({
                    method: "personal_sign",
                    params: [message, account],
                });

                setWalletAddress(account);
                setSignature(signature);
                alert("Connected and signed in with MetaMask!");
            } catch (error) {
                console.error("MetaMask connection failed:", error);
            }
        } else {
            alert("MetaMask is not installed. Please install it to continue.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!walletAddress || !signature) {
            alert("Please connect MetaMask and sign the authentication message.");
            return;
        }

        setIsLoading(true);
        setIsSuccess(false);

        // Prepare JSON data
        const data = {
            name: formData.name,
            email: formData.email,
            gender: formData.gender,
            walletAddress,
            signature,
        };

        try {
            const response = await axios.post("http://localhost:8080/register", data, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                setIsSuccess(true);
                alert("Registration successful!");
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-3">Connect with MetaMask</h3>
                <button className="btn btn-warning w-100 mb-3 d-flex align-items-center justify-content-center" onClick={handleMetaMaskConnect}>
                    <img src="/src/assets/MetaMask_Fox.Jpeg" className="metamask-logo" alt="MetaMask" style={{ width: "30px", marginRight: "10px" }} />
                    {walletAddress ? "Connected" : "Connect Wallet"}
                </button>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" onChange={(e) => setIsChecked(e.target.checked)} required />
                        <label className="form-check-label" htmlFor="terms">
                            I agree to the <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={!isChecked || isLoading}>
                        {isLoading ? <span className="spinner-border spinner-border-sm" role="status"></span> : "Register"}
                    </button>
                    {isSuccess && <p className="text-success text-center mt-3">Registration Successful!</p>}
                </form>
            </div>
        </div>
    );
};

export default MetaMaskSignup;
