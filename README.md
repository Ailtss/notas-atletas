# 🏆 Sistema de Cálculo de Média de Atletas  
### Projeto de Certificação – DEVstart | SENAI

Este projeto foi desenvolvido como parte do curso **DEVstart** do SENAI, com o objetivo de praticar lógica de programação, manipulação de arrays e aplicação de regras de negócio utilizando **JavaScript**.

---

## 📌 Descrição do Problema

Criar uma função capaz de:

- Receber uma lista (matriz) de objetos contendo:
  - Nome do atleta
  - Cinco notas atribuídas
- Calcular a média das notas **desconsiderando a maior e a menor nota**
- Exibir:
  - Nome do atleta
  - Notas recebidas
  - Média final calculada

---

## 🧠 Lógica Aplicada

Para calcular a média corretamente:

1. Recebemos as 5 notas do atleta.
2. Identificamos a **maior** e a **menor** nota.
3. Removemos essas duas notas.
4. Calculamos a média apenas das **3 notas restantes**.
5. Exibimos os resultados formatados no console.

Essa abordagem simula sistemas reais de avaliação esportiva, onde valores extremos são descartados para evitar distorções na média final.

---

## 💻 Exemplo de Estrutura de Dados

```javascript
const atletas = [
  {
    nome: "Carlos",
    notas: [9, 8, 10, 7, 9]
  },
  {
    nome: "Ana",
    notas: [10, 9, 8, 9, 10]
  }
];
```


## 📊 Exemplo de Saída Esperada

```
Atleta: Carlos
Notas: 9, 8, 10, 7, 9
Média válida: 8.67

Atleta: Ana
Notas: 10, 9, 8, 9, 10
Média válida: 9.33
```

## 🚀 Como Executar o Projeto
Clone o repositório:
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

Acesse a pasta do projeto:
cd NOME-DO-REPOSITORIO

Execute o arquivo JavaScript com Node.js:
node nome-do-arquivo.js

É necessário ter o Node.js instalado na máquina.


## 🎯 Objetivos de Aprendizado
- Praticar manipulação de arrays e objetos em JavaScript
- Aplicar regras de negócio em algoritmos
- Trabalhar com funções e estruturação de código
- Utilizar Git e GitHub como ferramenta de versionamento
- Desenvolver um projeto com foco em organização e clareza

## 🛠 Tecnologias Utilizadas
- JavaScript
- Node.js
- Git
- GitHub

## 👨‍💻 Autor
Projeto desenvolvido por Ailton da Silva
Curso DEVstart – SENAI

