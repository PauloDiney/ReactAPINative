const conexao = require('../db');

async function criarProjeto(nome, equipe, descricao, valor, data_inicio, data_fim, status){
    const sql = "INSERT INTO projetos (nome, equipe, descricao, valor, datainicio, datafinal, status) VALUES (?, ?, ?, ?, ?, ?, ?)";    
    try{
        const [res] = await conexao.query(sql, [nome, equipe, descricao, valor, data_inicio, data_fim, status]);
        return true;
    }catch (err) {
        throw new Error(`Erro ao criar projeto: ${err.message}`);
    }

}

async function listarProjetos(){
    const sql = "SELECT * FROM projetos";
    try{
        const [res] = await conexao.query(sql);
        return res;
    }catch (err) {
        throw new Error(`Erro ao listar projetos: ${err.message}`);
    }
}

async function atualizarProjeto(nome, equipe, descricao, valor, data_inicio, data_fim, status){
    const sql = "UPDATE projetos SET nome = ?, equipe = ?, descricao = ?, valor = ?, datainicio = ?, datafinal = ?, status = ? WHERE id = ?";    

    try{
        const [res] = await conexao.query(sql, [nome, equipe, descricao, valor, data_inicio, data_fim, status, id]);
        return true;

    }catch (err) {
        throw new Error(`Erro ao atualizar projeto: ${err.message}`);
    }

}

async function deletarProjeto(id){
    const sql = "DELETE FROM projetos WHERE id = ?";    

    try{
        const [res] = await conexao.query(sql, [id]);
        return true;

    }catch (err) {
        throw new Error(`Erro ao deletar projeto: ${err.message}`);
    }

}

async function listarProjetoPorId(id){
    const sql = "SELECT * FROM projetos WHERE id = ?";    

    try{
        const [res] = await conexao.query(sql, [id]);
        return res;

    }catch (err) {
        throw new Error(`Erro ao listar projeto por ID: ${err.message}`);
    }
}

module.exports = {
    criarProjeto, 
    listarProjetos, 
    atualizarProjeto, 
    deletarProjeto,
    listarProjetoPorId
};