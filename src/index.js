require('dotenv').config()
const express = require('express')
const router = require('./rotas')

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor Rodando na Porta ${process.env.PORT_SERVER}`)
})