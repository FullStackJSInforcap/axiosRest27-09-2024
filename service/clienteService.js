const fs = require('node:fs');
const readline = require('node:readline');
const Cliente = require('../models/cliente');

const findAllClientes = async () => {
    const clientes = [];
    const fileStream = fs.createReadStream('./data/clientes.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const arregloLinea = line.split(',');
        const cliente = new Cliente(arregloLinea[0], arregloLinea[1], arregloLinea[2]);
        clientes.push(cliente);
    }
    return clientes;
}

module.exports = findAllClientes;