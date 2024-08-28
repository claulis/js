
// Declaração de constantes para o usuário e senha válidos
const usuario = 'José'; // Nome de usuário correto
const senha = '123456'; // Senha correta

// Obtendo referências aos elementos do DOM
const inputUsuario = document.getElementById('usuario'); // Campo de entrada para o nome de usuário
const inputSenha = document.getElementById('senha'); // Campo de entrada para a senha
const botao = document.getElementById('botao'); // Botão para submeter o formulário

// Adiciona um evento de clique ao botão
botao.addEventListener('click', () => {
    // Verifica se os valores dos campos de entrada correspondem ao usuário e senha válidos
    if (inputUsuario.value === usuario && inputSenha.value === senha) {
        // Se as credenciais estiverem corretas, redireciona para a página de sucesso
        window.location.href = 'sucesso.html';
    } else {
        // Se as credenciais estiverem incorretas, redireciona para a página de erro
        // **Nota:** Aqui deveria ser 'erro.html' ao invés de 'sucesso.html'
        window.location.href = 'sucesso.html'; // Isso parece ser um erro, pois redireciona para a mesma página de sucesso
    }
});
