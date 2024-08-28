# Comentários sobre o Código login.js
## Declaração de Constantes:
As constantes usuario e senha armazenam as credenciais corretas que serão usadas para validar o login.
## Referências ao DOM:
- document.getElementById('usuario') e 'document.getElementById('senha') são usados para capturar os elementos de entrada do formulário, permitindo que o JavaScript acesse os valores digitados pelo usuário.
- document.getElementById('botao') captura o botão que será clicado para enviar o formulário.
## Evento de Clique:
O addEventListener('click', ...) adiciona uma função que será executada quando o botão for clicado. Essa função é responsável pela validação das credenciais.
## Validação das Credenciais:
A condição if (inputUsuario.value === usuario && inputSenha.value === senha) verifica se os valores inseridos pelo usuário correspondem às credenciais corretas.
Se as credenciais estiverem corretas, o usuário é redirecionado para sucesso.html.
Redirecionamento em Caso de Erro:
Se as credenciais estiverem incorretas, o código redireciona para sucesso.html, o que parece ser um erro. O correto seria redirecionar para uma página de erro, como erro.html.