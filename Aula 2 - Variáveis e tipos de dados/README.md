# Declaração de Variáveis em JavaScript


## 1. Introdução às Variáveis em JavaScript:
  Uma variável é um espaço em memória para armazenar valores de diferentes tipos de dados.
  Em JavaScript, as variáveis podem armazenar números, strings, booleanos, objetos, funções e outros tipos de dados. A declaração de variáveis em JavaScript é fundamental para a programação eficaz. Compreender os diferentes tipos de variáveis e escopos ajuda a escrever código mais limpo e eficiente.


## 2. Declaração de Variáveis:
   - Em JavaScript, existem três palavras-chave para declarar variáveis: `var`, `let` e `const`.
   - **`var`:**
     - Era a forma original de declarar variáveis em JavaScript.
     - Tem escopo de função, o que significa que é visível em toda a função onde foi declarada.
     - Pode ser redeclarada e atualizada dentro do mesmo escopo.
   - **`let`:**
     - Introduzido no ECMAScript 6 (ES6), tem escopo de bloco.
     - É visível apenas dentro do bloco em que foi declarado.
     - Pode ser atualizado, mas não redeclarado no mesmo escopo.
   - **`const`:**
     - Também introduzido no ECMAScript 6 (ES6), é usado para declarar constantes.
     - Assim que atribuído um valor, não pode ser reatribuído.
     - Tem escopo de bloco, como `let`.


## 3. Exemplos de Declaração de Variáveis:
```javascript
// Declaração usando var
var x = 10;
var nome = "João";
var isAtivo = true;
var lista = [1, 2, 3];
var pessoa = { nome: "Maria", idade: 25 };


// Declaração usando let
let y = 20;
let idade = 30;
let saldo = 1000.50;

// Declaração usando const
const PI = 3.14;
const URL = "https://exemplo.com";
const estudantes = ["Ana", "Carlos", "Pedro"];
```


## 4. Boas Práticas na Declaração de Variáveis:
   - Dê nomes significativos às variáveis para tornar o código mais legível e compreensível.
   - Evite o uso excessivo de variáveis globais, pois podem causar conflitos e dificultar a manutenção do código.
   - Prefira usar `const` sempre que possível para garantir imutabilidade, a menos que a variável precise ser reatribuída.
   - Utilize `let` quando precisar reatribuir valores, mas mantenha o escopo das variáveis o mais restrito possível para evitar efeitos colaterais indesejados.
   - Mantenha consistência na forma como declara suas variáveis ao longo do código.

Em JavaScript, os tipos de dados são categorias que definem os valores que podem ser armazenados e manipulados em um programa. JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente em tempo de execução com base no valor que ela contém. Abaixo estão os principais tipos de dados em JavaScript:

## 5. Tipos de dados

### Tipos Primitivos

1. **Número (`number`)**:
   - Representa números inteiros e de ponto flutuante (aqueles com vírgula). Negativos ou Positivos que sejam.
   - Exemplos: `10`, `3.14`, `-5`.

2. **String (`string`)**:
   - Sequência de caracteres delimitada por aspas simples (`'`) ou duplas (`"`).
   - Exemplos: `'Olá, mundo!'`, `"JavaScript"`.

3. **Booleano (`boolean`)**:
   - Representa um valor lógico verdadeiro (`true`) ou falso (`false`).
   - Usado para tomada de decisões em estruturas de controle.
   - Exemplos: `true`, `false`.

4. **Null (`null`)**:
   - Representa a ausência intencional de qualquer valor ou objeto.
   - Em JavaScript, `null` é um valor primitivo que representa "nada" ou "nulo".
   - Exemplo: `null`.

5. **Undefined (`undefined`)**:
   - Representa uma variável que foi declarada, mas ainda não recebeu um valor.
   - Se uma variável é declarada, mas não inicializada, seu valor é `undefined`.
   - Exemplo: `undefined`.

6. **Symbol (`symbol`)** (introduzido no ECMAScript 6):
   - Um valor único que não é igual a nenhum outro valor.
   - Usado para criar identificadores únicos para propriedades de objetos.
   - Exemplo: `Symbol('foo')`.

### Tipos de Dados Compostos:

1. **Objeto (`object`)**:
   - Estrutura de dados que pode armazenar múltiplos valores como pares chave-valor.
   - Pode conter propriedades e métodos.
   - Notação JSON
   - Exemplo: `{ nome: 'João', idade: 30 }`.

2. **Array (`array`)**:
   - Objeto especial em JavaScript usado para armazenar uma coleção ordenada de elementos.
   - Os elementos de um array podem ser de qualquer tipo de dado.
   - Exemplo: `[1, 2, 3, 4, 5]`.

3. **Função (`function`)**:
   - Bloco de código JavaScript que pode ser chamado e executado.
   - Pode aceitar parâmetros e retornar valores.
   - Exemplo: `function soma(a, b) { return a + b; }`.


## 6. Inferência de Tipos em JavaScript:

JavaScript é uma linguagem de tipagem dinâmica, o que significa que não é necessário declarar explicitamente o tipo de uma variável. O tipo de uma variável é inferido automaticamente com base no valor atribuído a ela.

```javascript
// Exemplos de inferência de tipos
let numero = 10; // tipo number
let texto = "Olá, mundo!"; // tipo string
let ativo = true; // tipo boolean
let lista = [1, 2, 3]; // tipo array
let pessoa = { nome: "João", idade: 30 }; // tipo object
```

A inferência de tipos em JavaScript permite que você escreva código de forma mais flexível, sem se preocupar com a declaração explícita do tipo de variável.

```javascript
// Exemplo de inferência de tipos em uma função
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); // Saída: 8
console.log(soma("Olá", "Mundo")); // Saída: OláMundo
console.log(soma(5, "3")); // Saída: 53 (concatenação de strings)
```

Neste exemplo, a função `soma` pode lidar com diferentes tipos de variáveis passadas como argumentos, e o resultado da função é inferido com base nos tipos dos argumentos passados.

A inferência de tipos em JavaScript é poderosa, mas também pode levar a comportamentos inesperados se não for utilizada com cuidado. É importante entender como os tipos são inferidos e como isso afeta o comportamento do seu código.

## 7. Escopo de Variáveis:
   - O escopo de uma variável refere-se à parte do código onde a variável pode ser referenciada.
   - **Escopo Global:**
     - Variáveis globais são declaradas fora de qualquer função ou bloco.
     - Podem ser acessadas de qualquer lugar do código.
   - **Escopo Local:**
     - Variáveis locais são declaradas dentro de uma função ou bloco.
     - Só podem ser acessadas dentro da função ou bloco onde foram declaradas.
   - **Escopo de Função:**
     - Variáveis declaradas com `var` têm escopo de função.
     - São visíveis dentro da função em que foram declaradas.
   - **Escopo de Bloco:**
     - Variáveis declaradas com `let` e `const` têm escopo de bloco.
     - São visíveis apenas dentro do bloco em que foram declaradas.


