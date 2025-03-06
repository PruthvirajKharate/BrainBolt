import React, { useState, useEffect } from "react";
import Web3 from "web3";
import userRegistryABI from "../UserRegistryABI.json"; // Update with your actual ABI file

const RegisterStudent = () => {
  const [name, setName] = useState("");
  const [ipfsCid, setIpfsCid] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [networkId, setNetworkId] = useState(null);

  const contractAddress = "0xD7416401bCf0ed0FA6048FE4E70b81c149f620B0"; // Contract address

  // Initialize Web3 and get accounts on component mount
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      window.ethereum
        .enable()
        .then(() => {
          web3Instance.eth.getAccounts().then(setAccounts);
          web3Instance.eth.net.getId().then(setNetworkId);
        })
        .catch((error) => {
          console.error("User denied account access", error);
          setMessage("❌ Please connect your MetaMask wallet.");
        });
    } else {
      setMessage("❌ MetaMask is not installed.");
    }
  }, []);

  const registerStudent = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!web3 || !accounts.length || networkId !== 1337) {
      setMessage(
        "❌ Please connect MetaMask to the Ganache network (Chain ID: 1337)."
      );
      setLoading(false);
      return;
    }

    try {
      const contract = new web3.eth.Contract(
        userRegistryABI.abi,
        contractAddress
      );
      await contract.methods.registerUser(ipfsCid).send({ from: accounts[0] });

      setMessage("🎉 Student registered successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Registration failed!");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={registerStudent}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter IPFS CID"
          value={ipfsCid}
          onChange={(e) => setIpfsCid(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register Student"}
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default RegisterStudent;
