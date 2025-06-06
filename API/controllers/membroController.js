const membroService = require('../services/membroServices');

async function criarMembro(req, res) {
    try {
        const { nome, formacao, equipe, contato, cargo } = req.body;
        const resultado = await membroService.criarMembro(nome, formacao, equipe, contato, cargo);
        res.status(201).send('Membro criado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao criar membro: ${err.message}`);
    }
}

async function listarMembros(req, res) {
    try {
        const resultado = await membroService.listarMembros();
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar membros: ${err.message}`);
    }
}

async function atualizarMembro(req, res) {
    try {
        const { id } = req.params;
        const { nome, formacao, equipe, contato, cargo } = req.body;
        await membroService.atualizarMembro(id, nome, formacao, equipe, contato, cargo);
        res.status(200).send('Membro atualizado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao atualizar membro: ${err.message}`);
    }
}

async function listarMembroPorId(req, res) {
    try {
        const { id } = req.params;
        const resultado = await membroService.listarMembroPorId(id);
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar membro por ID: ${err.message}`);
    }
}

async function deletarMembro(req, res) {
    try {
        const { id } = req.params;
        await membroService.deletarMembro(id);
        res.status(200).send('Membro deletado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao deletar membro: ${err.message}`);
    }
}

module.exports = {
    criarMembro,
    listarMembros,
    atualizarMembro,
    deletarMembro,
    listarMembroPorId
};