const findAllProductos = require('../service/productoService');

const findAllProductosController = async (req, res) => {
    const arregloProductos = await findAllProductos();
    res.json(arregloProductos);
}

const findByIdController = (req, res) => {
    res.json('FindById Productos');
}

const insertController = (req, res) => {
    res.json('Insert Productos');
}

const updateController = (req, res) => {
    res.json('Update Productos');
}

const deleteByIdController = (req, res) => {
    res.json('Delete Productos');
}

module.exports = {
    findAllProductosController,
    findByIdController,
    insertController,
    updateController,
    deleteByIdController
}