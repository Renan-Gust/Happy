//Importar dependencia
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//Iniciando o express
const server = express()

//Utilizar body do req
server.use(express.urlencoded({extended: true}))

//Utilizando os arquivos estáticos
server.use(express.static('public'))

//Configurar template engine
server.set('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

//Rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

//Ligar o servidor
server.listen(5500)