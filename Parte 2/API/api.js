// api to get all the products and logs from the database
const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(cors())
app.use(express.json())
app.listen(9000, () => console.log('server up'))

// connect to the database
client = new MongoClient('mongodb://webdev:webdev@localhost:27017/', { useNewUrlParser: true })
client.connect(() => console.log('conectado ao mongo'))

const produtos = client.db('webdev').collection('produtos')
const logs = client.db('webdev').collection('logs')

// REQUESTS DE PRODUTOS
app.get('/produtos', (req, res) => {
	produtos.find({}).toArray((err, result) => {
		if (err) return console.log(err)
		res.send(result)
	})
})

app.post('/produtos', (req, res) => {
	produtos.insertOne(req.body, (err, result) => {
		if (err) return console.log(err)
		res.send(result)
		console.log(`Novo produto adicionado: ${req.body}`)
	})
})

// update preço ou quantidade de um produto
app.put('/produtos', (req, res) => {
	const { id, mudança } = req.body
	produtos.updateOne({ _id: id }, { $set: { [mudança.nome]: mudança.novo } }, (err, result) => {
		if (err) return console.log(err)
		res.send(result)
		console.log(`Produto atualizado: ID:${id} ${JSON.stringify(mudança)}	${new Date().toLocaleTimeString('pt-BR')}`)
	})
})

app.delete('/produtos/:id', (req, res) => {
	produtos.deleteOne({ _id: Number(req.params.id) }, (err, result) => {
		if (err) return console.log(err)
		res.send(result)
		console.log(`Produto deletado: ID:${req.params.id}	${new Date().toLocaleTimeString('pt-BR')}`)
	})
})

// REQUESTS DE LOGS
app.get('/logs', (req, res) => {
	logs.find({}).toArray((err, result) => {
		if (err) return console.log(err)
		res.send(result)
	})
})

app.post('/logs', (req, res) => {
	logs.insertOne(req.body, (err, result) => {
		if (err) return console.log(err)
		res.send(result)
		console.log('Novo log')
	})
})
