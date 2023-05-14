const { Router } = require('express')
const { listarClientes } = require('./controladores/clientes')
const { listarFollowUps, listarFollowUpPorNomeCliente } = require('./controladores/followup')

const { listarUsuarios } = require('./controladores/usuarios')

const { listarProdutos } = require('./controladores/produtos')



const router = Router()

router.get('/', (req, res) => {
    return res.json('Rota funcionando')
})

//rotas de clientes
router.get('/cliente', listarClientes)
router.post('/cliente')
router.put('/cliente')

//ROTAS FOLLOWUP
router.get('/followup', listarFollowUpPorNomeCliente)
router.post('/followup')

// rotas de produtos
router.get('/produto', listarProdutos)

// rotas de usuarios
router.get('/usuario', listarUsuarios)




module.exports = router
