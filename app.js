const express = require('express')
const fs = require('fs')

const app = express()

const data = JSON.parse(fs.readFileSync('./data.json'))

app.get('/', function (req, res) {
  res.send('Hello')
})

app.get('/product/:productId', function (req, res) {
  res.send(data)
})

app.listen(3000, function () {
  console.log('Mini-Shopping API listening on port 3000!');
})
