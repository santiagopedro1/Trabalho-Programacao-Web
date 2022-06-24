function popularTabela(onde) {
	let corpoTabela = document.getElementById('corpoTabela')
	if (onde === 'visualização') {
		for (let i = 0; i < produtos.length; i++) {
			let produto = produtos[i]
			corpoTabela.innerHTML += `
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
			corpoTabela.innerHTML += `
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
		? logs.push(`Adicionado: ID: ${pacote.id} - ${pacote.nome} - ${pacote.marca} - R$ ${pacote.preco} - ${pacote.qtd} itens em ${new Date().toLocaleString()}`)
		: logs.push(`Removido: ${pacote.qtd} unidades do produto ${pacote.id} - ${pacote.nome} - ${pacote.marca} em ${new Date().toLocaleString()}`)
}

function popularLogs() {
	let logEl = document.getElementById('logs')
	for (let i = 0; i < logs.length; i++) {
		logEl.innerHTML += `<li class="logItem" >${logs[i]}</li>`
	}
}
