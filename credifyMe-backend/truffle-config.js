module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545, // Ganache RPC server port
      network_id: 5777, // Network ID from Ganache
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Ensure this matches the Solidity version you're using
    },
  },
  contracts_directory: "./credApp/contracts",
  contracts_build_directory: "./credApp/artifacts",
};
