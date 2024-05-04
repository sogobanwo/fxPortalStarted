const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const NikeShoeNFTFactory = await hre.ethers.getContractFactory(
    "NikeShoeNFT"
  );
  const nikeShoeNFT = await NikeShoeNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await nikeShoeNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await nikeShoeNFT.balanceOf(process.env.WALLET_ADDRESS)) +
      " NikeShoeNFT NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await nikeShoeNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});