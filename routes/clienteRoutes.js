const { Router } = require('express');
const findAllClientes = require('../service/clienteService');

const router = Router();

router.get('/', async (req, res) => {
    const arregloClientes = await findAllClientes();
    res.json(arregloClientes);
});

router.get('/:id', (req, res) => {
    res.json('FindById Clientes');
});

router.post('/', (req, res) => {
    res.json('Insert Clientes');
});

router.put('/', (req, res) => {
    res.json('Update Clientes');
});

router.delete('/', (req, res) => {
    res.json('Delete Clientes');
});

module.exports = router;