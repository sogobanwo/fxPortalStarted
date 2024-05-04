const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const NikeShoeNFT = await hre.ethers.getContractFactory("NikeShoeNFT");

  const nikeShoeNFT = await NikeShoeNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await nikeShoeNFT.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});