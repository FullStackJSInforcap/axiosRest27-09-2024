const { Router } = require('express');
const { findAllProductosController, findByIdController, insertController, updateController, deleteByIdController } = require('../controllers/productoController');

const router = Router();

router.get('/', findAllProductosController);

router.get('/:id', findByIdController);

router.post('/', insertController);

router.put('/', updateController);

router.delete('/', deleteByIdController);

module.exports = router;