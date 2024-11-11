const { expect } = require("chai");
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Ton Capital Tier Wise Smart Wallets", function () {
  async function contractDeployments() {
    const [owner, user1, user2] =
      await ethers.getSigners();
    const USDTToken = await ethers.getContractFactory("USDTToken");

    const usdtToken = await USDTToken.deploy();

    const usdtTokenAddress = await usdtToken.getAddress();

    const Contract = await ethers.getContractFactory(
      "Contract"
    );
    const contract = await Contract.deploy(
      usdtTokenAddress,
    );

    return {
      owner,
      user1,
      user2,
      contract,
    };
  }
  it("Contract deployment should assign initial config", async function () {
    const {
      owner,
      user1,
      user2,
      contract,
    } = await loadFixture(contractDeployments);
  });
}