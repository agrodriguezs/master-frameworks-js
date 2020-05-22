'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas


// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS


// Agregar prefijos a rutas

// Ruta o metodo de prueba para el API rest
app.get('/probando',(req, res) => {
    res.send('hola mundo, esto es una prueba');
    console.log('hola mundo');
});
app.get('/probando2',(req, res) => {
    res.status(200).send({
        curso: "Master en Frameworks JS",
        autor: "Victor Robles",
        fecha: "Mayo 2020"
    });
});


// Exportar modulo (fichero actual)
module.exports = app;