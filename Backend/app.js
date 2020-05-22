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
    res.status(200).send(`
        <h1>Todo es correcto</h1>
        <ol>
            <li>Node Js</li>
            <li>React Js</li>
            <li>Angular Js</li>
            <li>Vue Js</li>
        </ol>
    `);
});


// Exportar modulo (fichero actual)
module.exports = app;