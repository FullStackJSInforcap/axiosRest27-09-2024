const findAllClientes = require('../service/clienteService');

const findAllClientesController = async (req, res) => {
    const arregloClientes = await findAllClientes();
    res.json(arregloClientes);
}

const findByIdClientesController = (req, res) => {
    res.json('FindById Clientes');
}

const insertController = (req, res) => {
    res.json('Insert Clientes');
}

const updateController = (req, res) => {
    res.json('Update Clientes');
}

const deleteByIdController = (req, res) => {
    res.json('Delete Clientes');
}

module.exports = {
    findAllClientesController,
    findByIdClientesController,
    insertController,
    updateController,
    deleteByIdController
}