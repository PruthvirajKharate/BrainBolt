require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    ganache: {

      url: "http://127.0.0.1:7545",
      accounts: [
        "0x54a0e679a496bc205d80d0b15ff10590d6dd614cbb8746553f2410ce17429ad4",
        "0x54a0e679a496bc205d80d0b15ff10590d6dd614cbb8746553f2410ce17429ad4",
        "0x97fe22fe28b06ae1b95150ed96ebbc2cb05529c16950164c931340b786e2aaaab"
      ],
      chainId: 1337,
    },
  }
};
