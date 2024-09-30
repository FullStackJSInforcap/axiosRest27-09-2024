const findAllClientes = require('../service/clienteService');

const findAllClientesController = async (req, res) => {
    const arregloClientes = await findAllClientes();
    res.json(arregloClientes);
}

const findByIdClientesController = (req, res) => {
    res.json('FindById Clientes');
}

const insertController = (req, res) => {
    const parametros = req.body;
    res.json({
        msg: 'Insert Cliente',
        parametros
    });
}

const updateController = (req, res) => {
    const parametros = req.body;
    res.json({
        msg: 'Update Clientes',
        parametros
    });
}

const deleteByIdController = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'Delete Clientes',
        id
    });
}

module.exports = {
    findAllClientesController,
    findByIdClientesController,
    insertController,
    updateController,
    deleteByIdController
}