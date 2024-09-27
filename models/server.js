const express = require('express');

class Server{

    constructor(){
        this._app = express();
        this.routes();
    }

    routes(){
        this._app.use('/productos', require('../routes/productoRoutes'));
        this._app.use('/clientes', require('../routes/clienteRoutes'));
    }

    listen(){
        this._app.listen(3000, () => {
            console.log('Escuchando en el puerto 3000');
        });
    }

}

module.exports = Server;