# Saída de dados

Em JavaScript, o `console`, `alert` e `confirm` são recursos essenciais para interação com o usuário e depuração de código. 
- O `console` é principalmente usado para depuração e registro de informações durante o desenvolvimento.
- O `alert` é usado para exibir mensagens simples para o usuário, mas pode interromper o fluxo da aplicação.
- O `confirm` é usado para solicitar confirmação do usuário antes de realizar ações importantes.

Vamos entender como cada um deles é utilizado:

### 1. `console`:

O objeto `console` é uma ferramenta de depuração muito poderosa que permite registrar mensagens, variáveis e objetos no console do navegador durante o desenvolvimento. Ele possui vários métodos úteis:

- `console.log()`: Exibe mensagens no console.
- `console.warn()`: Exibe mensagens de aviso no console.
- `console.error()`: Exibe mensagens de erro no console.
- `console.info()`: Exibe mensagens informativas no console.
- `console.table()`: Exibe dados em formato de tabela.

Exemplo de uso:

```javascript
console.log("Olá, mundo!");
console.warn("Isso é um aviso!");
console.error("Isso é um erro!");
console.info("Informação útil!");
```

O `console` é especialmente útil para depurar código e monitorar o fluxo de execução durante o desenvolvimento.

### 2. `alert`:

O `alert` exibe uma caixa de diálogo com uma mensagem para o usuário e um botão "OK". Ele é usado principalmente para fornecer informações simples ou para solicitar uma ação do usuário.

Exemplo de uso:

```javascript
alert("Esta é uma mensagem de alerta!");
```

O `alert` é útil para mensagens simples, mas pode interromper a experiência do usuário, especialmente em páginas da web.

### 3. `confirm`:

O `confirm` exibe uma caixa de diálogo com uma mensagem para o usuário, juntamente com botões "OK" e "Cancelar". Ele é usado para solicitar uma confirmação do usuário para uma ação.

Exemplo de uso:

```javascript
let resposta = confirm("Deseja realmente excluir este item?");
if (resposta === true) {
    // Código para excluir o item
} else {
    // Código para cancelar a exclusão
}
```

O `confirm` é comumente utilizado para confirmações antes de realizar ações importantes, como excluir um item ou enviar um formulário.


Para usar o `console`, `alert` e `confirm` em um navegador, você pode simplesmente incorporar scripts JavaScript em uma página da web ou executar comandos diretamente no console do navegador. Aqui está como você pode fazer isso:

### 4. Incorporando Scripts JavaScript em uma Página da Web:

1. **Crie um arquivo HTML:**
   Crie um arquivo HTML com o conteúdo desejado e inclua um script JavaScript dentro da tag `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de JavaScript</title>
</head>
<body>
    <h1>Exemplo de JavaScript</h1>

    <button onclick="exibirAlerta()">Clique aqui para exibir um alerta</button>

    <script>
        function exibirAlerta() {
            alert("Esta é uma mensagem de alerta!");
        }
    </script>
</body>
</html>
```

2. **Abra o Arquivo HTML no Navegador:**
   Abra o arquivo HTML em um navegador da web. Quando você clicar no botão, o `alert` será exibido.

### 5. Executando Comandos no Console do Navegador:

A maioria dos navegadores modernos possui um console embutido que pode ser acessado pressionando `F12` ou clicando com o botão direito do mouse e selecionando "Inspecionar" ou "Inspeção" e, em seguida, acessando a guia "Console".

1. **Console:**
   Você pode usar o `console.log()`, `console.warn()`, `console.error()`, `console.info()`, etc., diretamente no console do navegador.

2. **Alert e Confirm:**
   Você pode usar `alert()` e `confirm()` diretamente no console do navegador também.

### 6. Exemplo no Console do Navegador:

1. Abra o console do navegador (pressionando `F12`).
2. Digite os comandos:

```javascript
console.log("Isso é uma mensagem de log.");
console.warn("Isso é um aviso!");
console.error("Isso é um erro!");
console.info("Isso é uma informação.");

alert("Esta é uma mensagem de alerta!");

let resposta = confirm("Deseja continuar?");
console.log("Resposta:", resposta);
```




