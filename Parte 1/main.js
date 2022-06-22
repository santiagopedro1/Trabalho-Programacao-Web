let produtos = [
	{ id: 1, nome: 'Produto 1', marca: 'Marca 1', preco: 10.4, qtd: 1 },
	{ id: 2, nome: 'Produto 2', marca: 'Marca 2', preco: 20, qtd: 2 },
	{ id: 3, nome: 'Produto 3', marca: 'Marca 3', preco: 30, qtd: 3 },
	{ id: 4, nome: 'Produto 4', marca: 'Marca 4', preco: 40, qtd: 4 },
	{ id: 5, nome: 'Produto 5', marca: 'Marca 5', preco: 50, qtd: 5 }
]

let logs = [
	'Adicionado: ID: 1 - Produto 1 - Marca 1 - R$ 10.4 - 1 em 6/22/2022, 7:04:16 PM',
	'Adicionado: ID: 2 - Produto 2 - Marca 2 - R$ 20 - 2 em 6/22/2022, 7:04:16 PM',
	'Adicionado: ID: 3 - Produto 3 - Marca 3 - R$ 30 - 3 em 6/22/2022, 7:04:16 PM',
	'Adicionado: ID: 4 - Produto 4 - Marca 4 - R$ 40 - 4 em 6/22/2022, 7:04:16 PM',
	'Adicionado: ID: 5 - Produto 5 - Marca 5 - R$ 50 - 5 em 6/22/2022, 7:04:16 PM'
]

function popularTabela(onde) {
	let tabela = document.getElementById('corpoTabela')
	if (onde === 'visualização') {
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
	} else {
		for (let i = 0; i < produtos.length; i++) {
			let produto = produtos[i]
			tabela.innerHTML += `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.marca}</td>
            <td>R$ ${produto.preco}</td>
            <td>${produto.qtd}</td>
			<td><button onclick="removerProduto(${i})">🗑️</button></td>
        </tr>
        `
		}
	}
}

function addProduto() {
	let inputs = document.getElementsByTagName('input')

	let id = Number(inputs[0].value)
	let nome = inputs[1].value
	let marca = inputs[2].value
	let preco = Number(inputs[3].value)
	let qtd = Number(inputs[4].value)

	if (isNaN(id) || isNaN(preco) || isNaN(qtd)) return alert('ID, Preço e Quantidade devem ser números')

	produtos.push({ id: id, nome: nome, marca: marca, preco: preco, qtd: qtd })

	addLogs('Adicionado', { id: id, nome: nome, marca: marca, preco: preco, qtd: qtd })
}

function removerProduto(alvo) {
	// Código para remover um produto
	console.log(produtos[alvo])

	addLogs('Removido', { id: alvo.pid, nome: alvo.pnome, marca: alvo.pmarca, qtd: alvo.pqtd })
}

function addLogs(tipo, pacote) {
	tipo === 'Adicionado'
		? logs.push(`Adicionado: ID: ${pacote.id} - ${pacote.nome} - ${pacote.marca} - R$ ${pacote.preco} - ${pacote.qtd} em ${new Date().toLocaleString()}`)
		: logs.push(`Removido: ${pacote.qtd} unidades do produto ${pacote.id} - ${pacote.nome} - ${pacote.marca} em ${new Date().toLocaleString()}`)
}

function popularLogs() {
	let logEl = document.getElementById('logs')
	for (let i = 0; i < logs.length; i++) {
		logEl.innerHTML += `<li class="logItem" >${logs[i]}</li>`
	}
}
