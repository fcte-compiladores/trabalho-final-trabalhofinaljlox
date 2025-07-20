# Interpretador jLox: Uma Implementação da Linguagem Lox em JavaScript

## 👥 Integrantes

| Nome                     | Matrícula  | Turma     |
|--------------------------|------------|-----------|
| Eric Camargo da Silva    | 202016168  | 16 horas  |
| Ingrid Alves Rocha       | 202045348  | 18 horas  |
| João Pedro Silva Sousa   | 222006258  | 18 horas  |

## 📘 Introdução

Este projeto é uma implementação de um interpretador para a linguagem de programação **Lox**, escrito inteiramente em **JavaScript** e projetado para rodar no ambiente **Node.js**. O desenvolvimento foi guiado pelos princípios apresentados no livro *Crafting Interpreters* de Robert Nystrom, seguindo a implementação `jlox`.

O objetivo é construir um interpretador funcional que abrange desde a análise léxica do código-fonte até a execução de expressões e declarações. O interpretador é um *tree-walking interpreter*, que constrói uma **AST (Árvore de Sintaxe Abstrata)** e caminha por ela para avaliar o programa.

### Funcionalidades já implementadas:

- Análise e execução de expressões aritméticas com precedência de operadores
- Avaliação de expressões lógicas e comparações
- Manipulação de tipos primitivos: números, strings, booleanos e `nil`
- Modo interativo (REPL) e execução de arquivos `.lox`
- Relatórios de erro de sintaxe e tempo de execução

## 🧠 Estratégias e Arquitetura

### 🔹 Analisador Léxico (`Scanner.js`)
Transforma o código em uma sequência de *tokens* reconhecendo números, operadores, palavras-chave etc.

### 🔹 Analisador Sintático (`Parser.js`)
Implementa um *Parser de Descida Recursiva*, que transforma os tokens em uma AST. Tem suporte a recuperação de erro com sincronização.

### 🔹 Padrão Visitor (`Expr.js`, `Interpreter.js`)
Permite aplicar operações à AST desacoplando dados e comportamento.

### 🔹 Avaliador (`Interpreter.js`)
Percorre recursivamente a AST para avaliar expressões e executar comandos. Usa pós-ordem para calcular resultados.

## 💡 Sintaxe da Linguagem

### Expressões Aritméticas

```lox
(100 - 20) / (2 * 5) + 3 // Resultado: 11
5! // Resultado: 120
```

### Expressões Lógicas e Comparações

```lox
100 > 20    // true
!false      // true
!0          // false (0 é truthy)
```

### Tipos de Dados

- `Number`
- `String`
- `Boolean`
- `nil`

```lox
"O futuro da computação é " + "brilhante!"
```

## 🛠️ Instalação

Pré-requisitos: **Node.js 18.x ou superior**

```bash
git clone <REPOSITORIO_GITHUB>
cd jlox
npm install
```

## ▶️ Execução

### Modo REPL interativo:

```bash
node index.js
```

### Executando arquivo `.lox`:

```bash
node index.js exemplos/hello.lox
```

## 🧪 Testes Automatizados

Este projeto inclui uma suíte de testes unitários para garantir a estabilidade e correção do interpretador. Os testes estão organizados por módulo na pasta `tests/` e cobrem:

- `interpreter.test.js`: testes de avaliação da AST
- `expr.test.js`: testes de construção e uso de expressões
- `scanner.test.js`: testes de análise léxica (tokens)
- `parser.test.js`: testes de parsing e AST
- `runtime-errors.test.js`: testes de erros esperados no tempo de execução

### ▶️ Como rodar os testes

Após instalar as dependências com `npm install`, execute:

```bash
npm test
```

Isso irá rodar o arquivo `tests/all.test.js`, que agrupa todos os testes.  
Todos os testes usam apenas `console.assert()` com Node.js puro, sem necessidade de frameworks externos.

## 💡 Exemplos

Arquivos na pasta `exemplos/` com variados níveis de dificuldade:

- `hello.lox`: hello world
- `fibonacci.lox`: recursividade
- `ordenar.lox`: bubble sort
- `estrutura.lox`: controle de fluxo e variáveis
- `busca-binaria.lox`: exemplo de busca

## 📁 Estrutura do Código

```
jlox/
├── lox.js           # Ponto de entrada do interpretador
├── index.js         # Executável principal para REPL ou arquivos
├── Scanner.js       # Analisador léxico
├── TokenType.js     # Enum dos tokens
├── Token.js         # Classe dos tokens
├── Parser.js        # Analisador sintático (gera AST)
├── Expr.js          # Definições da AST
├── Interpreter.js   # Avaliação da AST
├── package.json     # Dependências (Node.js)
└── exemplos/        # Códigos exemplo em Lox
```

## 📚 Referências

- **Crafting Interpreters** - Livro base com explicações da arquitetura e semântica
- **Node.js Docs** - Para execução no ambiente JavaScript
- **MDN Web Docs** - Consulta sobre sintaxe JavaScript moderna
- **ECMAScript Spec** - Inspiração geral

## 🐞 Bugs e Limitações


- Falta tratamento de erros mais detalhado (linha/coluna)
- Recursos como arrays, funções anônimas e objetos ainda não estão implementados
