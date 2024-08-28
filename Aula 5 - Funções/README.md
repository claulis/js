### 1. O Que São Funções?

Funções são blocos de código que realizam uma tarefa específica. Elas podem ser chamadas em diferentes partes do código para evitar repetição e facilitar a manutenção. As funções ajudam a dividir o código em pedaços menores e mais gerenciáveis.

### 2. Quando Usar Funções?

Você deve usar funções quando precisar realizar uma tarefa específica que será reutilizada em várias partes do seu código. Isso evita duplicação e melhora a legibilidade e a manutenção do código.

### 3. Tipos de Funções

Em JavaScript, temos três principais formas de declarar funções:

#### 3.1. Função Declarada

Uma função declarada é uma forma tradicional de criar funções. Ela é definida usando a palavra-chave `function` e possui um nome declarado.

**Exemplo:**

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Maria')); // Output: Olá, Maria!
```

**Explicação:**

- `function saudacao(nome)` define uma função chamada `saudacao` com um parâmetro `nome`.
- `return` retorna uma string formatada com o nome fornecido.

#### 3.2. Função Expressa

Uma função expressa é uma função atribuída a uma variável. Esse tipo de função é frequentemente usado em expressões e callbacks.

**Exemplo:**

```javascript
const soma = function(a, b) {
  return a + b;
};

console.log(soma(5, 3)); // Output: 8
```

**Explicação:**

- `const soma = function(a, b)` cria uma função anônima e a atribui à variável `soma`.
- Essa função retorna a soma dos dois parâmetros `a` e `b`.

#### 3.3. Função de Flecha

Funções de flecha são uma forma mais concisa de escrever funções e são úteis para funções curtas e callbacks.

**Exemplo:**

```javascript
const multiplicar = (x, y) => x * y;

console.log(multiplicar(4, 5)); // Output: 20
```

**Explicação:**

- `const multiplicar = (x, y) => x * y` define uma função de flecha que multiplica `x` e `y`.
- As funções de flecha são mais compactas e não têm seu próprio `this`.

### 4. Parâmetros

Parâmetros são valores que você passa para uma função para que ela possa usá-los. Funções podem ter zero ou mais parâmetros.

**Exemplo com múltiplos parâmetros:**

```javascript
function saudacaoCompleta(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

console.log(saudacaoCompleta('Ana', 25)); // Output: Olá, Ana! Você tem 25 anos.
```

**Explicação:**

- A função `saudacaoCompleta` recebe dois parâmetros: `nome` e `idade`.
- Ela usa esses parâmetros para criar uma mensagem personalizada.

### 5. Passagem de Parâmetros

Os parâmetros podem ser passados de várias formas, como valores literais, variáveis, ou até mesmo resultados de outras funções.

**Exemplo de passagem de parâmetros:**

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

let usuario = 'Carlos';
console.log(saudacao(usuario)); // Output: Olá, Carlos!
```

**Explicação:**

- O valor da variável `usuario` é passado para a função `saudacao` como argumento.

### 6. Retornos

Uma função pode retornar um valor usando a palavra-chave `return`. Se não houver um `return`, a função retorna `undefined` por padrão.

**Exemplo de retorno:**

```javascript
function dobro(numero) {
  return numero * 2;
}

console.log(dobro(10)); // Output: 20
```

**Explicação:**

- A função `dobro` retorna o dobro do número fornecido.

### 7. Funções Sem Retorno

Nem todas as funções precisam retornar um valor. Algumas funções realizam uma ação sem retornar nada.

**Exemplo de função sem retorno:**

```javascript
function imprimirMensagem(mensagem) {
  console.log(mensagem);
}

imprimirMensagem('Este é um exemplo de função sem retorno.'); 
// Output: Este é um exemplo de função sem retorno.
```

**Explicação:**

- A função `imprimirMensagem` apenas imprime a mensagem no console e não retorna nenhum valor.


