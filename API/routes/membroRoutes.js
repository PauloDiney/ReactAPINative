const express = require('express');
const router = express.Router();
const membroController = require('../controllers/membroController');

router.post('/membros', membroController.criarMembro);
router.get('/membros', membroController.listarMembros);
router.put('/membros/:id', membroController.atualizarMembro);
router.get('/membros/:id', membroController.listarMembroPorId);
router.delete('/membros/:id', membroController.deletarMembro);

module.exports = router;