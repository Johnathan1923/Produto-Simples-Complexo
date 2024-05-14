// Método Simples
const produtoSimples = document.getElementById('produto-simples');
produtoSimples.innerHTML = `
    <h2>Produto Simples</h2>
    <p>Nome: Caneta</p>
    <p>Descrição: Caneta preta de ponta fina</p>
    <p>Preço: R$ 2,50</p>
`;

// Método Complexo
const produtoComplexo = document.getElementById('produto-complexo');
const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto Complexo';
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Nome: Caderno\nDescrição: Caderno de 100 folhas, capa dura\nPreço: R$ 10,00';
produto.appendChild(descricaoProduto);

produtoComplexo.appendChild(produto);
