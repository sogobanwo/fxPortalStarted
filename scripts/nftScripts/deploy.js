const hre = require("hardhat");

async function main() {
  const NikeShoeNFTFactory = await hre.ethers.getContractFactory("NikeShoeNFT");

  const NikeShoeNFT = await NikeShoeNFTFactory.deploy();

  console.log("NikeShoeNFT deployed to: ", NikeShoeNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});