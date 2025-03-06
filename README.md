⸻

Visibilidade de Funções e Variáveis em Solidity

Este repositório contém um contrato inteligente Solidity que demonstra os diferentes níveis de visibilidade de funções e variáveis.

📝 Descrição

O contrato Visibilidade contém uma variável de estado chamada nome e duas funções:
	•	salvaNome(string memory _nome): Função externa que permite definir um valor para a variável nome.
	•	qualNome(): Função interna que retorna o valor da variável nome.

Além disso, o contrato Outro herda Visibilidade e utiliza a função herdada qualNome dentro da sua própria função hoo.

📜 Código

Aqui está o código corrigido do contrato:
|******************************************************************************************|
|  // SPDX-License-Identifier: MIT                                                         |
|  pragma solidity ^0.8.0;                                                                 |
|                                                                                          |
|  // Declaração do contrato principal                                                     |
|  contract Visibilidade {                                                                 |
|      string internal nome; // Variável "nome" tem visibilidade "internal"                |
|                                                                                          |
|      // Função externa que permite definir um valor para a variável "nome"               |
|      function salvaNome(string memory _nome) external {                                  |
|          nome = _nome;                                                                   |
|      }                                                                                   |
|                                                                                          |
|      // Função interna que retorna o valor da variável "nome"                            |
|      function qualNome() internal view returns (string memory) {                         |
|          return nome;                                                                    |
|      }                                                                                   |
|  }                                                                                       |
|                                                                                          |
|  // Declaração de um novo contrato chamado "Outro" que HERDA o contrato "Visibilidade"   |
|  contract Outro is Visibilidade {                                                        |
|      // Função externa que chama a função "qualNome" herdada do contrato "Visibilidade"  |
|      function hoo() external view returns (string memory) {                              |
|          return qualNome();                                                              |
|      }                                                                                   |
| }                                                                                        |
********************************************************************************************
🚀 Funcionamento
	1.	O contrato Visibilidade permite armazenar um nome usando salvaNome(string memory _nome).
	2.	A função qualNome() pode ser usada internamente para acessar o nome salvo.
	3.	O contrato Outro herda Visibilidade e pode chamar qualNome() dentro da função hoo(), pois qualNome() tem visibilidade internal.

🔍 Visibilidades Utilizadas

Visibilidade	Acesso
internal	Acessível dentro do contrato e por contratos que herdam dele
external	Pode ser chamada apenas externamente, não dentro do próprio contrato

🛠️ Como Testar
	1.	Implante o contrato Outro.
	2.	Chame salvaNome("Seu Nome") através de uma transação.
	3.	Chame hoo() para recuperar o nome salvo.

Isso demonstrará como a herança e as visibilidades funcionam em Solidity.

⸻
