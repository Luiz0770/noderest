//configurara servidr
const express = require('express')
const app = express()
const port = process.env.PORT || 3030
//renderizar front-end
app.use(express.json())
app.set('view engine', 'ejs')
app.set('view engine', 'html')

//exportar os dados de conexao do servidor
modelu.express = {app,port}