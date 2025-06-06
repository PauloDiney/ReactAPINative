const express = require('express');
const router = express.Router();
const projetoController = require('../controllers/projetoController');

router.post('/projetos', projetoController.criarProjeto);
router.get('/projetos', projetoController.listarProjetos);
router.put('/projetos/:id', projetoController.atualizarProjeto);
router.get('/projetos/:id', projetoController.listarProjetoPorId);
router.delete('/projetos/:id', projetoController.deletarProjeto);

module.exports = router;