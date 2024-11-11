import { ethers, upgrades } from "hardhat";
import hre from "hardhat";
import fs from "fs";

async function main() {
  const Contract = await ethers.getContractFactory("Contract");

  const contract = await Contract.deploy();

  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();

  fs.writeFileSync(
    `constants/contractAddress.json`,
    `{\n "contractAddress" : "${contractAddress}" \n}`
  );

  console.log(`Contract deployed to: ${contractAddress}`);

  await hre.run("verify:verify", {
    address: contractAddress,
    contract: "contracts/Contract.sol:Contract",
    constructorArguments: [],
  });
}

main();
