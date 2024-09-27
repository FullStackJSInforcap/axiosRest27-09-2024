const fs = require('node:fs');
const readline = require('node:readline');
const Producto = require('../models/producto');

const findAllProductos = async () => {
    const productos = [];
    const fileStream = fs.createReadStream('./data/productos.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const arregloLinea = line.split(',');
        const producto = new Producto(arregloLinea[0], arregloLinea[1], arregloLinea[2], arregloLinea[3], arregloLinea[4]);
        productos.push(producto);
    }
    return productos;
}

module.exports = findAllProductos;