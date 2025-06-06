const conexao = require('../db');

async function criarTarefa(nome, membro, projeto, dataStart, dataEnd, descricao){

    const sql = "INSERT INTO tarefas (nome, membro, projeto, dataStart, dataEnd, descricao) VALUES (?, ?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, membro, projeto, dataStart, dataEnd, descricao]);
        return true;
    }
    catch (err) {
        throw new Error(`Erro ao criar projeto: ${err.message}`);
    }

}

async function listarTarefas(){
    const sql = "SELECT * FROM tarefas";
    try {
        const [res] = await conexao.query(sql);
        return res
    }
    catch (err) {
        throw new Error(`Erro ao listar projetos: ${err.message}`);
    }
}

async function atualizarTarefa(nome, membro, projeto, dataStart, dataEnd, descricao, id){

    const sql = "UPDATE tarefas SET nome = ?, membro = ?, projeto = ?, dataStar = ?, dataEnd = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, membro, projeto, dataStart, dataEnd, descricao, id]);
        return true;
    }
    catch (err) {
        throw new Error(`Erro ao atualizar projeto: ${err.message}`);
    }
}

async function deletarTarefa(id){
    const sql = "DELETE FROM tarefas WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    }
    catch (err) {
        throw new Error(`Erro ao deletar projeto: ${err.message}`);
    }
}

async function listarTarefaPorId(id){
    const sql = "SELECT * FROM tarefas WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    }
    catch (err) {
        throw new Error(`Erro ao listar projeto por ID: ${err.message}`);
    }
}

module.exports = {
    criarTarefa,
    listarTarefas,
    atualizarTarefa,
    deletarTarefa,
    listarTarefaPorId
};