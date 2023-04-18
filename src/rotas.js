const { Router } = require('express')
const { listarClientes } = require('./controladores/clientes')
const { listarFollowUps } = require('./controladores/followup')

const router = Router()

router.get('/', (req, res) => {
    return res.json('Rota funcionando')
})

//rotas de clientes
router.get('/cliente', listarClientes)
router.post('/cliente')

//ROTAS FOLLOWUP
router.get('/followup', listarFollowUps)
router.post('/followup')

module.exports = router
