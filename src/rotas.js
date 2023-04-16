const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    return res.json('Rota funcionando')
})

module.exports = router