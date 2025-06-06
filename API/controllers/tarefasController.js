const tarefasServices = require('../services/tarefasServices');

async function criarTarefa(req, res) {
    try {
        const { nome, membro, projeto, dataStart, dataEnd, descricao } = req.body;
        const resultado = await tarefasServices.criarTarefa(nome, membro, projeto, dataStart, dataEnd, descricao);
        res.status(201).send('Tarefa criada com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao criar tarefa: ${err.message}`);
    }
}

async function listarTarefas(req, res) {
    try {
        const resultado = await tarefasServices.listarTarefas();
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar tarefas: ${err.message}`);
    }
}

async function atualizarTarefa(req, res) {
    try {
        const { id } = req.params;
        const { nome, membro, projeto, dataStart, dataEnd, descricao } = req.body;
        await tarefasServices.atualizarTarefa(nome, membro, projeto, dataStart, dataEnd, descricao, id);
        res.status(200).send('Tarefa atualizada com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao atualizar tarefa: ${err.message}`);
    }
}

async function listarTarefaPorId(req, res) {
    try {
        const { id } = req.params;
        const resultado = await tarefasServices.listarTarefaPorId(id);
        res.json(resultado);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao listar tarefa por ID: ${err.message}`);
    }
}

async function deletarTarefa(req, res) {
    try {
        const { id } = req.params;
        await tarefasServices.deletarTarefa(id);
        res.status(200).send('Tarefa deletada com sucesso');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Erro ao deletar tarefa: ${err.message}`);
    }
}

module.exports = {
    criarTarefa,
    listarTarefas,
    atualizarTarefa,
    listarTarefaPorId,
    deletarTarefa
};