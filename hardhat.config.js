require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "5e9fb697345b4a7391b889fcea1e504c";

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mainnet:{
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
