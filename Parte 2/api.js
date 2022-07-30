// api to get all the products and logs from the database
const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
app.listen(9000, () => console.log('server up'))

// connect to the database
client = new MongoClient('mongodb://webdev:webdev@localhost:27017/', { useNewUrlParser: true })
client.connect(() => console.log('conectado ao mongo'))

const produtos = client.db('produtos').collection('produtos')
const logs = client.db('produtos').collection('logs')

// get request to get all the products
app.get('/products', (req, res) => {
	produtos.find({}).toArray((err, result) => {
		if (err) return console.log(err)
		res.send(result)
	})
})

// get request to get all the logs
app.get('/logs', (req, res) => {
	logs.find({}).toArray((err, result) => {
		if (err) return console.log(err)
		res.send(result)
	})
})
