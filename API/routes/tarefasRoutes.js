const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.post('/tarefas', tarefasController.criarTarefa);
router.get('/tarefas', tarefasController.listarTarefas);
router.put('/tarefas/:id', tarefasController.atualizarTarefa);
router.get('/tarefas/:id', tarefasController.listarTarefaPorId);
router.delete('/tarefas/:id', tarefasController.deletarTarefa);

module.exports = router;