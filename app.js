const express = require('express')
const fs = require('fs')
const cors = require('cors')
const _ = require('lodash')

const app = express()

const data = JSON.parse(fs.readFileSync('./data.json'))

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello')
})

app.get('/products', function (req, res) {
  const result = data.products
  res.send(result)
})

app.get('/products/:productId', function (req, res) {
  const productId = req.params ? req.params.productId : ''
  const result = _.find(data.products, product => product._id === productId)
  res.send(result)
})

app.listen(3000, function () {
  console.log('Mini-Shopping API listening on port 3000!')
})
