let produtos = [
	{ id: '1', nome: 'Produto 1', marca: 'Marca 1', preco: 10.4, qtd: 1 },
	{ id: '2', nome: 'Produto 2', marca: 'Marca 2', preco: 20, qtd: 2 },
	{ id: '3', nome: 'Produto 3', marca: 'Marca 3', preco: 30, qtd: 3 },
	{ id: '4', nome: 'Produto 4', marca: 'Marca 4', preco: 40, qtd: 4 },
	{ id: '5', nome: 'Produto 5', marca: 'Marca 5', preco: 50, qtd: 5 }
]

let logs = []

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

function addProduto() {
	let pid = document.getElementById('pid').value
	let pnome = document.getElementById('pnome').value
	let pmarca = document.getElementById('pmarca').value
	let ppreco = document.getElementById('ppreço').value
	let pqtd = document.getElementById('pqtd').value

	produtos.push({ id: pid, nome: pnome, marca: pmarca, preco: ppreco, qtd: pqtd })

	addLogs('Adicionado', { id: pid, nome: pnome, marca: pmarca, preco: ppreco, qtd: pqtd })
}

function removerProduto(alvo) {
	// Código para remover um produto

	addLogs('Removido', { id: alvo.pid, nome: alvo.pnome, marca: alvo.pmarca, qtd: alvo.pqtd })
}

function addLogs(tipo, pacote) {
	tipo === 'Adicionado'
		? logs.push(`Adicionado: ID: ${pacote.id} - ${pacote.nome} - ${pacote.marca} - R$ ${pacote.preco} - ${pacote.qtd} em ${new Date().toLocaleString()}`)
		: logs.push(`Removido: ${pacote.qtd} unidades do produto ${pacote.id} - ${pacote.nome} - ${pacote.marca} em ${new Date().toLocaleString()}`)
}
