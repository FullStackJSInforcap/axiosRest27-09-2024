const express = require('express');
const findAllClientes = require('../service/clienteService');

class Server{

    constructor(){
        this._app = express();
        this.routes();
    }

    routes(){
        this._app.get('/clientes', async (req, res) => {
            const arregloClientes = await findAllClientes();
            res.json(arregloClientes);
        });

        this._app.get('/productos', (req, res) => {
            res.send('Funcionando');
        });
    }

    listen(){
        this._app.listen(3000, () => {
            console.log('Escuchando en el puerto 3000');
        });
    }

}

module.exports = Server;