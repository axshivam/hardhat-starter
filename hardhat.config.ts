import { HardhatUserConfig } from "hardhat/config";
import '@openzeppelin/hardhat-upgrades';
import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";
require("hardhat-contract-sizer");
import dotenv from 'dotenv';
dotenv.config();

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a", "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82"],
      chainId: 31337,
    },
    amoy_testnet: {
      url: "https://polygon-amoy.g.alchemy.com/v2/Ss5eLdyAIf9cqnfIxJjTLy0vpUAB2r0f",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""]
    },
    sapolia_testnet: {
      url: "https://eth-sepolia.g.alchemy.com/v2/RfjjZNa20J-_QJtFIec4IqxqGT8HI603",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""]
    },
    holesky_testnet: {
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""]
    },
    goldcoast_testnet: {
      url: "https://api-goldcoast.dcomm.community/ext/bc/ACT/rpc",
      httpHeaders: {
        "Authorization": "Basic aGltYW5zaHU6Z25mcVhWV1NzRjNadTk5VGtMNEM="

      },
      chainId: 84962,

      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""]
    },
    dcomm_mainnet: {
      url: "https://api-mainnet.dcomm.network/ext/bc/ACT/rpc",
      httpHeaders: {
        "Authorization": "Basic aGltYW5zaHU6Z25mcVhWV1NzRjNadTk5VGtMNEM="

      },
      chainId: 84961,

      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""]
    },
  },
  etherscan: {
    apiKey: "NAPNIFUW7KNW7P8KEGHXN1PVSS7JWPNVBD",
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
      {
        network: "holesky",
        chainId: 17000,
        urls: {
          apiURL:
            "https://api-holesky.etherscan.io/api",
          browserURL: "https://holesky.etherscan.io",
        },
      },
    ],
  },
};

export default config;
