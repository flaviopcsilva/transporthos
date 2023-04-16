const knex = require("../conexao/bancodedados")

const listarClientes = async (req, res) => {

    try {

        const cliente = await knex('clientes')

        return res.status(200).json(cliente)

    } catch (error) {
        return res.status(500).json({ Mensagem: `Erro interno do servidor ERROR: ${error.message}` })
    }

}

module.exports = {
    listarClientes
}