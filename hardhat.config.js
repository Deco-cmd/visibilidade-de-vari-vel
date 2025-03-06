require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",  // versão do Solidity usada no seu contrato
  networks: {
    sepolia: {
      url: `https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY`,  // URL da rede Sepolia
      accounts: [`0x${process.env.PRIVATE_KEY}`]  // Sua chave privada armazenada em .env
    }
  }
};
