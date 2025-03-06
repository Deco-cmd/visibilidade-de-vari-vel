// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//internal
//private
//public



// Declaração do contrato principal
contract visibilidade {
    string internal  nome; // Variável "nome" tem visibilidade "internal", ou seja, pode ser acessada neste contrato e em contratos derivados

    

     // Função externa que permite definir um valor para a variável "nome"
        function salvaNome (string memory _nome) external {
            nome = _nome;
        }
      


    // Função interna que retorna o valor da variável "nome"
    // Como é "internal", pode ser chamada dentro do próprio contrato ou por contratos que herdam este contrato     
        function qualNome()  internal  view returns  (string memory){
            return nome;
        }
}




// Declaração de um novo contrato chamado "Outro" que HERDA o contrato "Visibilidade"
contract outro is visibilidade{
    

    // Função externa que chama a função "qualNome" herdada do contrato "Visibilidade"
    // Como "qualNome" tem visibilidade "internal", ela pode ser acessada aqui sem problemas
    function hoo () external  view  returns (string memory) {
        return qualNome();
    }

}