if (!window.localStorage.getItem('produtos')) {
	window.localStorage.setItem(
		'produtos',
		JSON.stringify([
			{ id: 1, nome: 'Notebook', marca: 'Dell', preco: 2000, qtd: 10 },
			{ id: 2, nome: 'Mouse', marca: 'Logitech', preco: 50, qtd: 20 },
			{ id: 3, nome: 'Teclado', marca: 'Logitech', preco: 100, qtd: 30 }
		])
	)
	// prettier-ignore
	window.localStorage.setItem(
		'logs',
		JSON.stringify([
		'Adicionado: ID: 1 - Notebook - Marca: Dell - R$ 2000 - 10 itens em 01/01/2020 00:00:00',
		'Adicionado: ID: 2 - Mouse - Marca: Logitech - R$ 50 - 20 itens em 01/01/2020 00:00:00',
		'Adicionado: ID: 3 - Teclado - Marca: Logitech - R$ 100 - 30 itens em 01/01/2020 00:00:00'
	])
	)
}
let produtos = JSON.parse(window.localStorage.getItem('produtos'))
let logs = JSON.parse(window.localStorage.getItem('logs'))

function popularTabela(onde) {
	let corpoTabela = document.getElementById('corpoTabela')
	corpoTabela.innerHTML = ''
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
	let PIDs = []
	produtos.forEach(element => {
		PIDs.push(element.id)
	})

	let id = Number(inputs[0].value)
	let nome = inputs[1].value
	let marca = inputs[2].value
	let preco = Number(inputs[3].value)
	let qtd = Number(inputs[4].value)

	if (isNaN(id) || isNaN(preco) || isNaN(qtd)) return alert('ID, Preço e Quantidade devem ser números')

	if (PIDs.includes(id)) return alert('ID já existe')

	if (nome === '' || marca === '') return alert('Nome e Marca são obrigatórios')

	produtos.push({ id: id, nome: nome, marca: marca, preco: preco, qtd: qtd })
	addLogs('Adicionado', { id, nome, marca, preco, qtd })
	addLocalStorage()

	return alert('Produto adicionado com sucesso')
}

function removerProduto(alvo) {
	qtdRemover = prompt('Quantas unidades deseja remover?\n(Número maior que a quantidade em estoque removerá todo o estoque)')
	if (qtdRemover != null) {
		if (isNaN(qtdRemover)) return alert('Quantidade deve ser um número')
		if (qtdRemover === '') return alert('Quantidade não pode ser vazia')
		if (qtdRemover >= produtos[alvo].qtd) {
			addLogs('Removido', produtos[alvo], produtos[alvo].qtd)
			produtos.splice(alvo, 1)
		} else {
			produtos[alvo].qtd -= qtdRemover
			addLogs('Removido', produtos[alvo], qtdRemover)
		}

		addLocalStorage()
		popularTabela('remover')
		return alert('Produto removido com sucesso')
	} else return
}

function addLogs(tipo, pacote, qtdRemovida) {
	tipo === 'Adicionado'
		? logs.push(`Adicionado: ID: ${pacote.id} - ${pacote.nome} - Marca: ${pacote.marca} - R$ ${pacote.preco} - ${pacote.qtd} itens em ${new Date().toLocaleString('pt-BR')}`)
		: logs.push(`Removido: ${qtdRemovida} unidades do produto ID: ${pacote.id} - ${pacote.nome} - Marca: ${pacote.marca} em ${new Date().toLocaleString('pt-BR')}`)
}

function popularLogs() {
	logs.reverse()
	let logEl = document.getElementById('logs')
	for (let i = 0; i < logs.length; i++) {
		logEl.innerHTML += `<li class="logItem" >${logs[i]}</li>`
	}
}

function addLocalStorage() {
	localStorage.setItem('produtos', JSON.stringify(produtos))
	localStorage.setItem('logs', JSON.stringify(logs))
}

// window.localStorage.clear()
