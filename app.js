const express = require('express')
const { append } = require('express/lib/response')
const path = require('path')
const { db } = require('./DB')
const PORT = 3000
const server = express()
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'src', 'views'))

server.use(express.urlencoded({ extended: true }))

server.get('/', function (req, res) {
    res.render('main', { listOfCities: db.cities })

})

server.post('/adcities', (req, res) => {
    const dataFromForm = req.body
    db.cities.push(dataFromForm)
    res.redirect('/')
})

server.get('/asd', function (req, res) {
    res.send('<h1>Good buy World!@!@#@</h1>')

})

server.get('*', function (req, res) {
    res.send(`<div>
    <h1>404</h1>
    <a href = '/'>Домашняя страница</a>
    </div>`)
})
server.listen(PORT, () => {
    console.log(`Serverr has been started on port: ${PORT}`)
})