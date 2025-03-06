// Importando as dependências necessárias
const hre = require("hardhat");

async function main() {
  // Compilando e pegando o contrato
  const [deployer] = await hre.ethers.getSigners();
  console.log("Iniciando o deploy com a conta:", deployer.address);

  // Aqui substitua o nome do seu contrato
  const ContractFactory = await hre.ethers.getContractFactory("MeuContrato2402");
  
  // Fazendo o deploy do contrato
  const contract = await ContractFactory.deploy();

  console.log("Contrato sendo implantado para:", contract.address);

  // Espera até o contrato ser minerado
  await contract.deployed();

  console.log("Contrato implantado com sucesso na rede:", contract.address);
  console.log("Mensagem enviada com hash:", contract.deployTransaction.hash);
}

// Chama a função main e captura erros
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
