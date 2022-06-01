let produtos = [
	{ id: '1', nome: 'Produto 1', marca: 'Marca 1', preco: 10.4, qtd: 1 },
	{ id: '2', nome: 'Produto 2', marca: 'Marca 2', preco: 20, qtd: 2 },
	{ id: '3', nome: 'Produto 3', marca: 'Marca 3', preco: 30, qtd: 3 },
	{ id: '4', nome: 'Produto 4', marca: 'Marca 4', preco: 40, qtd: 4 },
	{ id: '5', nome: 'Produto 5', marca: 'Marca 5', preco: 50, qtd: 5 }
]

function attTabela() {
	let tabela = document.getElementById('corpoTabela')
	for (let i = 0; i < produtos.length; i++) {
		let produto = produtos[i]
		tabela.innerHTML += `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.marca}</td>
            <td>R$ ${produto.preco}</td>
            <td>${produto.qtd}</td>
        </tr>
        `
	}
}
