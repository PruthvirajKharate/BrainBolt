const hre = require("hardhat");

async function main() {
  const UserRegistry = await hre.ethers.getContractFactory("UserRegistry");
  console.log("Deploying UserRegistry...");
  const userRegistry = await UserRegistry.deploy();
  await userRegistry.deployed();
  console.log(`UserRegistry deployed at: ${userRegistry.address}`);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
