const knex = require("../conexao/bancodedados")

const listarFollowUps = async (req, res) => {
    try {

        const followup = await knex('followup')
        return res.status(200).json(followup)

    } catch (error) {
        return res.status(500).json({ Mensagem: `Erro interno do servidor ERROR: ${error.message}` })
    }
}

module.exports = {
    listarFollowUps
}