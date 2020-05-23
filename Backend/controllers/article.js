'use strict'

var validator = require('validator');
var Article   = require('../models/article');

var controller = {
    datosCurso: (req, res) => {

        var contenido = req.body.contenido;

        return res.status(200).send({
            status: 'success',
            curso: "Master en Frameworkssssss JS",
            autor: "Victor Robles",
            fecha: "Mayo 2020",
            contenido
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            status: 'success',
            message: 'soy la accion test de mi controllador article'
        });
    },
    save: (req, res) => {

        // Recoger parametros por post
        var params = req.body;
 
        // Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err) {
            return res.status(500).send({
                status: 'error',
                message: 'faltan datos por enviar'
            });
        }
        if (validate_title && validate_content){
            
            // Crear el objeto a guardar
                var article = new Article();

            // Asignar Valores
                article.title = params.title;
                article.content = params.content;
                article.image = null;

            // Guardar el Articulo
                article.save((err, articleStored) =>{

                    if(err || !articleStored){
                        return res.status(500).send({
                            status: 'error',
                            message: 'Los datos del articulo no se han guardado!'
                        });
                    }

                    // Devolver una respuesta
                    return res.status(200).send({
                        status: 'success',
                        article: articleStored
                    });

                });

            

        }else{

            return res.status(500).send({
                status: 'error',
                message: 'Los datos no son validos'
            });

        }



    },
    getArticles: (req,res) => {

        var query = Article.find({});

        var last = req.params.last;

        if (last || last != undefined ){
            query.limit(5);
        }

        query.sort('-_id').exec((err, articles)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });

      
    },
    getArticle: (req,res) => {

        // Recoger el Id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if (!articleId || articleId == null ){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !'
            });
        }

        // Buscar el articulo
        Article.findById(articleId, (err,articleFinded) => {
            if(err || !articleFinded){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encuetra el articulo !'
                });
            }
            // Devolver en json
            return res.status(200).send({
                status: 'success',
                article: articleFinded
            });
        });
 
    },
    update: (req,res) => {

        // Recoger el Id de la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err) {
            return res.status(500).send({
                status: 'error',
                message: 'faltan datos por enviar !'
            });
        }

        if (validate_title && validate_content){

            // Buscar y Actualizar
            Article.findByIdAndUpdate(
                {_id: articleId},params,
                {new:true},
                (err, articleUpdated)=>{
                    if(err){
                        return res.status(500).send({
                            status: 'error',
                            message: 'Error al actualizar el articulo !'
                        });
                    }
                    if(!articleUpdated){
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el articulo !'
                        });
                    }
        
                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                }
            );
            
            
        }else{

            return res.status(500).send({
                status: 'error',
                message: 'La Validacion no es correcta !'
            });

        }
         
    },
    delete: (req,res) => {
        
        // Recoger el Id de la url
        var articleId = req.params.id;

        // Buscar y Eliminar
        Article.findByIdAndDelete(
            {_id: articleId},
            (err, articleRemoved)=>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al borrar el articulo !'
                    });
                }
                if(!articleRemoved){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    article: articleRemoved
                });
            }
        );

    }

}; //end controller 

module.exports = controller;    