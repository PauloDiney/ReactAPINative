const conexao = require('../db');

async function criarMembro(nome, formacao, equipe, contato, cargo) {
    const sql = "INSERT INTO membros (nome, formacao, equipe, contato, cargo) VALUES (?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, formacao, equipe, contato, cargo]);
        return true;
    } catch (err) {
        throw new Error(`Erro ao criar membro: ${err.message}`);
    }
}

async function listarMembros() {
    const sql = "SELECT * FROM membros";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        throw new Error(`Erro ao listar membros: ${err.message}`);
    }
}

async function atualizarMembro(id, nome, formacao, equipe, contato, cargo) {
    const sql = "UPDATE membros SET nome = ?, formacao = ?, equipe = ?, contato = ?, cargo = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, formacao, equipe, contato, cargo, id]);
        return true;
    } catch (err) {
        throw new Error(`Erro ao atualizar membro: ${err.message}`);
    }
}

async function deletarMembro(id) {
    const sql = "DELETE FROM membros WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        throw new Error(`Erro ao deletar membro: ${err.message}`);
    }
}

async function listarMembroPorId(id) {
    const sql = "SELECT * FROM membros WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        throw new Error(`Erro ao listar membro por ID: ${err.message}`);
    }
}

module.exports = {
    criarMembro,
    listarMembros,
    atualizarMembro,
    deletarMembro,
    listarMembroPorId
};