const { Router } = require('express');
const findAllProductos = require('../service/productoService');

const router = Router();

router.get('/', async (req, res) => {
    const arregloProductos = await findAllProductos();
    res.json(arregloProductos);
});

router.get('/:id', (req, res) => {
    res.json('FindById Productos');
});

router.post('/', (req, res) => {
    res.json('Insert Productos');
});

router.put('/', (req, res) => {
    res.json('Update Productos');
});

router.delete('/', (req, res) => {
    res.json('Delete Productos');
});

module.exports = router;