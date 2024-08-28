// Obtendo referências aos elementos do DOM
const tabela = document.getElementById('minhaTabela'); // Captura a tabela onde os itens serão adicionados
const btnAdicionar = document.getElementById('btnAdicionar'); // Captura o botão para adicionar itens
const itemInput = document.getElementById('item'); // Captura o campo de entrada para o nome do item
const quantidadeInput = document.getElementById('quantidade'); // Captura o campo de entrada para a quantidade do item

// Adiciona um evento de clique ao botão de adicionar
btnAdicionar.addEventListener('click', () => {
    // Verifica se os campos de item e quantidade não estão vazios
    if (itemInput.value && quantidadeInput.value) {
        // Cria uma nova linha na tabela
        const novaLinha = document.createElement('tr');

        // Cria uma nova célula para o item
        const novoItem = document.createElement('td');
        novoItem.textContent = itemInput.value; // Define o texto da célula como o valor do campo de item
        novaLinha.appendChild(novoItem); // Adiciona a célula à nova linha

        // Cria uma nova célula para a quantidade
        const novaQuantidade = document.createElement('td');
        novaQuantidade.textContent = quantidadeInput.value; // Define o texto da célula como o valor do campo de quantidade
        novaLinha.appendChild(novaQuantidade); // Adiciona a célula à nova linha

        // Adiciona a nova linha ao corpo da tabela
        tabela.getElementsByTagName('tbody')[0].appendChild(novaLinha);

        // Limpa os campos de entrada após adicionar o item
        itemInput.value = '';
        quantidadeInput.value = '';
    }
});