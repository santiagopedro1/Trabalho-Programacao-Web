import axios from 'axios'
import { Notify } from 'quasar'

export async function GetAllProducts() {
	const produtos = await axios('http://localhost:9000/produtos')
	return produtos.data
}

export function updateProduto(produto, mudança) {
	//make an axios put request to update the product
	console.log(mudança)
	axios({
		method: 'put',
		url: 'http://localhost:9000/produtos',
		data: {
			id: produto[0],
			mudança: mudança
		}
	})
		.then(response => {
			console.log(response)
			Notify.create({
				message: 'Produto atualizado com sucesso',
				color: 'positive',
				timeout: 3000
			})
			let velho = mudança.nome == 'preço' ? produto[4] : produto[5]
			addLog([
				'Editar',
				`ID: ${produto[0]}, ${produto[1]} ${produto[2]} ${produto[3]}\nMudou ${mudança.nome} de ${
					mudança.nome == 'preço'
						? Intl.NumberFormat('pt-br', {
								style: 'currency',
								currency: 'BRL'
						  }).format(velho)
						: velho
				} para ${
					mudança.nome == 'preço' ? Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(mudança.novo) : mudança.novo
				}`
			])
			return response
		})
		.catch(error => {
			console.log(error)
			return error
		})
}

export function deleteProduto(produto) {
	//make an axios delete request to delete the product
	axios({
		method: 'delete',
		url: 'http://localhost:9000/produtos/' + produto[0]
	})
		.then(response => {
			Notify.create({
				message: 'Produto excluído com sucesso',
				color: 'positive',
				timeout: 3000
			})
			console.log(response.data)
			addLog(['Remover', `ID: ${produto[0]}, ${produto[1]} ${produto[2]} ${produto[3]}`])
			return response
		})
		.catch(error => {
			console.log(error)
			return error
		})
}

export function addProduto(produto) {
	//make an axios post request to add the product
	axios({
		method: 'post',
		url: 'http://localhost:9000/produtos',
		data: {
			_id: Number(produto[0]),
			categoria: produto[1],
			marca: produto[2],
			modelo: produto[3],
			preço: Number(produto[4]),
			quantidade: Number(produto[5])
		}
	})
		.then(response => {
			Notify.create({
				message: 'Produto adicionado com sucesso',
				color: 'positive',
				timeout: 3000
			})
			console.log(response)
			addLog(['Adicionar', `ID: ${produto[0]} ${produto[1]} ${produto[2]} ${produto[3]}`])
			return response
		})
		.catch(error => {
			console.log(error)
			return error
		})
}

export async function GetAllLogs() {
	const response = await axios('http://localhost:9000/logs')
	return response.data
}

function addLog(log) {
	//make an axios post request to add the log
	axios({
		method: 'post',
		url: 'http://localhost:9000/logs',
		data: {
			ação: log[0],
			descrição: log[1],
			data: new Date()
		}
	})
		.then(response => {
			console.log(response)
			return 'OK'
		})
		.catch(error => {
			console.log(error)
			return error
		})
}
