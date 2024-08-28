# Comentários sobre o Código
## Referências aos Elementos do DOM:
const tabela = document.getElementById('minhaTabela');: Captura a tabela HTML onde os itens serão adicionados.
const btnAdicionar = document.getElementById('btnAdicionar');: Captura o botão que, ao ser clicado, adiciona um novo item à tabela.
const itemInput = document.getElementById('item');: Captura o campo de entrada onde o usuário insere o nome do item.
const quantidadeInput = document.getElementById('quantidade');: Captura o campo de entrada onde o usuário insere a quantidade do item.
const checkBtn = document.getElementById('apagar');: Captura um botão de apagar, mas não é utilizado neste trecho.
## Evento de Clique:
btnAdicionar.addEventListener('click', () => { ... });: Adiciona um evento de clique ao botão "Adicionar", que executa a função definida quando o botão é clicado.
## Verificação de Campos:
if (itemInput.value && quantidadeInput.value) { ... }: Verifica se ambos os campos de entrada (item e quantidade) não estão vazios antes de prosseguir.
## Criação de uma Nova Linha:
const novaLinha = document.createElement('tr');: Cria um novo elemento de linha (<tr>) para a tabela.
## Adicionando Células:
Para cada item (nome e quantidade), são criadas células (<td>) que contêm os valores dos campos de entrada. Essas células são então adicionadas à nova linha.
Um checkbox é adicionado em uma nova célula para permitir que o usuário marque itens para apagar.
## Adicionando a Nova Linha à Tabela:
tabela.getElementsByTagName('tbody').appendChild(novaLinha);: Adiciona a nova linha ao corpo da tabela (<tbody>).
## Limpeza dos Campos de Entrada:
Após adicionar o item à tabela, os campos de entrada são limpos (itemInput.value = ''; e quantidadeInput.value = '';), permitindo que o usuário insira novos itens.