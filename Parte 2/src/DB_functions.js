import axios from 'axios'
import { Notify } from 'quasar'

export async function GetAllProducts() {
	const produtos = await axios('http://localhost:9000/produtos')
	return produtos.data
}

export function updateProduto(id, mudança) {
	//make an axios put request to update the product
	axios({
		method: 'put',
		url: 'http://localhost:9000/produtos',
		data: {
			id: id,
			mudança: mudança
		}
	})
		.then(response => {
			console.log(response)
			Notify.create({
				message: 'Produto atualizado com sucesso',
				color: 'positive'
			})
			return 1
		})
		.catch(error => {
			console.log(error)
			return error
		})
}

export function deleteProduto(id) {
	//make an axios delete request to delete the product
	axios({
		method: 'delete',
		url: 'http://localhost:9000/produtos/' + id
	})
		.then(response => {
			Notify.create({
				message: 'Produto excluído com sucesso',
				color: 'positive'
			})
			console.log(response)
			return 1
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
			_id: produto[0],
			categoria: produto[1],
			marca: produto[2],
			modelo: produto[3],
			preço: produto[4],
			quantidade: produto[5]
		}
	})
		.then(response => {
			Notify.create({
				message: 'Produto adicionado com sucesso',
				color: 'positive'
			})
			console.log(response)
			return 1
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

export function addLog(log) {
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
