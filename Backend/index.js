'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost:27017/api_rest_blog', 
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true 
        })
        .then(() =>{
            console.log('la conexion a la BD es correcta !!');

            // crear servidor y ponerme a escuchar peticiones http
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            });
        })
        .catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
    });