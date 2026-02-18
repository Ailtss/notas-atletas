# 🏆 Sistema de Cálculo de Média de Atletas  
### Projeto de Certificação – DEVstart | SENAI

📚 Projeto desenvolvido para fins educacionais, com foco na prática de lógica de programação e manipulação de dados utilizando **JavaScript**.

---

## 📌 Descrição do Projeto

Este sistema recebe uma lista de atletas contendo cinco notas para cada um e calcula a **média válida**, desconsiderando automaticamente a maior e a menor nota.

Ao final, o programa exibe:

- Nome do atleta  
- Notas recebidas  
- Média final calculada  

Esse modelo simula critérios reais de avaliação esportiva, onde valores extremos são descartados para evitar distorções no resultado.

---

## 🧠 Lógica Aplicada

O algoritmo percorre a lista de atletas e, para cada um:

- Cria uma cópia das notas para manipulação
- Utiliza funções nativas do JavaScript para:
  - Identificar o maior valor (`Math.max`)
  - Identificar o menor valor (`Math.min`)
- Remove os valores extremos
- Calcula a média das três notas restantes
- Exibe o resultado formatado no console

Essa abordagem demonstra aplicação de:
- Arrays
- Objetos
- Funções
- Métodos nativos da linguagem
- Regras de negócio

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

---

## 📊 Exemplo de Saída

```
Atleta: Carlos
Notas: 9, 8, 10, 7, 9
Média válida: 8.67

Atleta: Ana
Notas: 10, 9, 8, 9, 10
Média válida: 9.33
```

---

## 📁 Estrutura do Projeto

```
📦 sistema-media-atletas
 ┣ 📜 index.js
 ┗ 📜 README.md
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```

### 2️⃣ Acesse a pasta do projeto
```bash
cd NOME-DO-REPOSITORIO
```

### 3️⃣ Execute o arquivo com Node.js
```bash
node index.js
```

> ⚠️ É necessário ter o **Node.js** instalado na máquina.

---

## 🎯 Objetivos de Aprendizado

- Praticar manipulação de arrays e objetos em JavaScript  
- Aplicar regras de negócio em algoritmos  
- Trabalhar com funções e estruturação de código  
- Desenvolver organização e documentação de projetos  
- Utilizar Git e GitHub como ferramenta de versionamento  

---

## 🚀 Possíveis Melhorias Futuras

- Permitir entrada de dados dinâmica pelo usuário  
- Criar uma versão com interface web  
- Adicionar validação para notas inválidas  
- Implementar testes automatizados  

---

## 🛠 Tecnologias Utilizadas

- JavaScript  
- Node.js  
- Git  
- GitHub  

---

## 👨‍💻 Autor

Projeto desenvolvido por **Ailton da Silva**  
Curso **DEVstart – SENAI**

---

## 📌 Considerações Finais

Este projeto reforça a importância da organização de dados e da aplicação correta da lógica para resolver problemas reais.  
Além disso, demonstra a capacidade de estruturar um projeto completo e bem documentado, habilidade essencial no mercado de desenvolvimento de software.
