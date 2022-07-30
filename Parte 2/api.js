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
	})
})

// update preço ou quantidade de um produto
app.put('/produtos/:id', (req, res) => {
	produtos.updateOne({ _id: req.params.id }, { $set: req.body }, (err, result) => {
		if (err) return res.send(err)
		res.send(result)
	})
})

app.delete('/produtos/:id', (req, res) => {
	produtos.deleteOne({ _id: req.params.id }, (err, result) => {
		if (err) return res.send(err)
		res.send(result)
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
	})
})
