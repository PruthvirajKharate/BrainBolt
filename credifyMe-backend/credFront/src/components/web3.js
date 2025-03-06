import Web3 from "web3";

// Assuming you are using MetaMask for Web3 provider
const web3 = new Web3(window.ethereum);

// Ensure the user is connected to MetaMask and the correct network
const userRegistryAddress = "0xD7416401bCf0ed0FA6048FE4E70b81c149f620B0"; // Your contract address
const userRegistryABI = [
  // Paste the ABI of your contract here
];

const userRegistry = new web3.eth.Contract(userRegistryABI, userRegistryAddress);

export default userRegistry;
