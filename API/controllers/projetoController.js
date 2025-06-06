const projetoServices = require('../services/projetosServices');

async function criarProjeto(req, res) {
    try {
        const { nome, equipe, descricao, valor, data_inicio, data_fim, status } = req.body;
        const resultado = await projetoServices.criarProjeto(nome, equipe, descricao, valor, data_inicio, data_fim, status);
        res.status(201).send('Projeto criado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao criar projeto: ${err.message}`);
    }
}

async function listarProjetos(req, res) {
    try {
        const resultado = await projetoServices.listarProjetos();
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar projetos: ${err.message}`);
    }
}

async function atualizarProjeto(req, res) {
    try {
        const { id } = req.params;
        const { nome, equipe, descricao, valor, data_inicio, data_fim, status } = req.body;
        await projetoServices.atualizarProjeto(id, nome, equipe, descricao, valor, data_inicio, data_fim, status);
        res.status(200).send('Projeto atualizado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao atualizar projeto: ${err.message}`);
    }
}

async function listarProjetoPorId(req, res) {
    try {
        const { id } = req.params;
        const resultado = await projetoServices.listarProjetoPorId(id);
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar projeto por ID: ${err.message}`);
    }
}

async function deletarProjeto(req, res) {
    try {
        const { id } = req.params;
        await projetoServices.deletarProjeto(id);
        res.status(200).send('Projeto deletado com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao deletar projeto: ${err.message}`);
    }
}

module.exports = {
    criarProjeto,
    listarProjetos,
    atualizarProjeto,
    listarProjetoPorId,
    deletarProjeto
}