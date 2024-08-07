import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-circom";

import circuits = require('./circuits.config.json');
require('dotenv').config();


process.env.BASE_PATH = __dirname;


import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks: {
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: ["6806ab112638ecb619f66fc7a62d758f8bc8c23507c85162a8877a46dc534c39"],
    },
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
