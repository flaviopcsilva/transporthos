const { Router } = require('express')
const { listarClientes } = require('./controladores/clientes')
const { listarFollowUps } = require('./controladores/followup')
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
router.get('/followup', listarFollowUps)
router.post('/followup')

router.get('/produto', listarProdutos)

module.exports = router
