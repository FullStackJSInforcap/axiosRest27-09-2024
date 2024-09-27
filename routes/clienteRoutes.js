const { Router } = require('express');
const { findAllClientesController, findByIdClientesController, insertController, updateController, deleteByIdController } = require('../controllers/clienteController');

const router = Router();

router.get('/', findAllClientesController);

router.get('/:id', findByIdClientesController);

router.post('/', insertController);

router.put('/', updateController);

router.delete('/', deleteByIdController);

module.exports = router;