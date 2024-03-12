# Controle de Fluxo e Operadores Lógicos

Nesta aula vamos explorar em detalhes os conceitos de controle de fluxo em JavaScript, incluindo `if`, `if-else`, `if-else if` e `switch` estruturas aninhadas e operadores lógicos. Vamos fornecer exemplos detalhados para cada conceito.

### 1. Estrutura Condicional `if`

A estrutura condicional `if` permite que você execute um bloco de código se uma condição especificada for verdadeira. A sintaxe é a seguinte:

```javascript
if (condição) {
    // código a ser executado se a condição for verdadeira
}
```

![if](https://www.alphacodingskills.com/cs/img/cs-if.png)

#### Exemplo:

```javascript
let temperatura = 25;

if (temperatura > 20) {
    console.log("Está quente lá fora!");
}
```

### 2. Estrutura Condicional `if-else`

A estrutura `if-else` permite que você execute um bloco de código se a condição especificada for verdadeira e outro bloco de código se a condição for falsa. A sintaxe é a seguinte:

```javascript
if (condição) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}
```
![if-else](https://www.alphacodingskills.com/cs/img/cs-if-else.png)

#### Exemplo:

```javascript
let hora = 13;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}
```

### 3. Estruturas Condicional `if-else if`

A estrutura `if-else if` permite que você avalie várias condições consecutivas. Se a primeira condição for falsa, ele verifica a próxima condição e assim por diante. A sintaxe é a seguinte:

```javascript
if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição2 for verdadeira
} else {
    // código a ser executado se nenhuma condição for verdadeira
}
```
![if-else-if](https://www.alphacodingskills.com/cs/img/cs-if-elseif-else.png)
#### Exemplo:

```javascript
let nota = 75;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}
```

### 4. Estruturas Aninhadas

Você pode aninhar múltiplas estruturas condicionais para lidar com diferentes casos. Isso significa que você pode ter um `if` dentro de outro `if` ou `if-else`.

#### Exemplo:

```javascript
let nota = 75;

if (nota >= 60) {
    if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80) {
        console.log("B");
    } else if (nota >= 70) {
        console.log("C");
    } else {
        console.log("D");
    }
} else {
    console.log("F");
}
```

### 4. Estrutura switch
A estrutura switch permite que você avalie uma expressão e execute o código associado a um caso correspondente. Ela é útil quando você tem muitas condições para avaliar. A sintaxe é a seguinte:

```javascript
switch (expressão) {
    case valor1:
        // código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        // código a ser executado se a expressão for igual a valor2
        break;
    default:
        // código a ser executado se nenhum dos casos for correspondido
}
```
![switch](https://www.alphacodingskills.com/cs/img/cs-switch.png)
Exemplo:

```javascript
let diaDaSemana = "Segunda";

switch (diaDaSemana) {
    case "Segunda":
    case "Terça":
    case "Quarta":
    case "Quinta":
    case "Sexta":
        console.log("Dia de trabalho.");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Fim de semana!");
        break;
    default:
        console.log("Dia inválido.");
}
```

### 5. Operadores Lógicos

Os operadores lógicos permitem combinar múltiplas condições em uma única expressão condicional. Os principais operadores lógicos em JavaScript são:

- `&&` (E lógico): Retorna verdadeiro se ambas as expressões forem verdadeiras.
- `||` (OU lógico): Retorna verdadeiro se pelo menos uma das expressões for verdadeira.
- `!` (NÃO lógico): Inverte o valor da expressão.

#### Exemplo:

```javascript
let idade = 25;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log("Você pode dirigir legalmente.");
} else {
    console.log("Você não pode dirigir.");
}
```

### 6. Exemplo Combinado

Vamos combinar todos os conceitos em um exemplo mais complexo:

```javascript
let diaDaSemana = "Sábado";
let clima = "ensolarado";

if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    if (clima === "ensolarado") {
        console.log("Vamos à praia!");
    } else if (clima === "nublado") {
        console.log("Vamos fazer um piquenique no parque.");
    } else {
        console.log("Vamos assistir a um filme em casa.");
    }
} else {
    console.log("É dia de trabalho. Vamos trabalhar!");
}
```

### Conclusão

Nesta aula, exploramos em detalhes os conceitos de controle de fluxo em JavaScript, incluindo `if`, `if-else if`, `if-else`, estruturas aninhadas e operadores lógicos. Esses conceitos são fundamentais para construir lógica em programas JavaScript e são amplamente utilizados em aplicações do mundo real. Pratique esses conceitos e experimente diferentes cenários para aprimorar suas habilidades de programação.
