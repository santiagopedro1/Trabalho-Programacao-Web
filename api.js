const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())
app.listen(3000, () => console.log('Server started on port 3000'))

//requests
//get all produtos
app.get('/', (req, res) => {
	res.send('get all produtos')
	//get all content from produtos.json
	res.json(fs.readFileSync('produtos.json', 'utf8'))
})

//add a produto
app.post('/', (req, res) => {
	res.send('add a produto')
})

//delete a produto
app.delete('/', (req, res) => {
	res.send('delete a produto')
})
