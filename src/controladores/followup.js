const knex = require("../conexao/bancodedados")

const listarFollowUps = async (req, res) => {
    try {

        const followup = await knex('followup')
        return res.status(200).json(followup)

    } catch (error) {
        return res.status(500).json({ Mensagem: `Erro interno do servidor ERROR: ${error.message}` })
    }
}

const listarFollowUpPorNomeCliente = async (req, res) => {
    const { cliente } = req.query

    try {

        const clienteExiste = await knex('clientes')
            .whereRaw('lower(nome) like ?', `%${cliente}%`)
            .first()

        if (!clienteExiste) {
            return res.status(404).json({ Mensagem: 'Cliente não existe' })
        }

        const resultadoDaBusca = await knex('clientes')
            .select('clientes.cnpj_mf', 'clientes.nome', 'followup.processo'
                , 'followup.valorcif', 'followup.origen', 'followup.destino'
                , 'followup.followup_atual')
            .join('followup', 'clientes.cnpj_mf', '=', 'followup.cliente_cnpj')
            .whereRaw('lower(nome) like ?', `%${cliente}%`)




        return res.status(200).json(resultadoDaBusca)


    } catch (error) {
        return res.status(500).json({ Mensagem: `Erro interno do Servidor ${error.message}` })
    }

}

module.exports = {
    listarFollowUps,
    listarFollowUpPorNomeCliente
}