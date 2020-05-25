'use strict'

var validator = require('validator');
var Article   = require('../models/article');
var fs        = require('fs');
var path      = require('path');

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
                (err,articleUpdated) => {
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
            (err,articleRemoved) => {
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

    },
    uploadImage: (req,res) => {

        var articleId = req.params.id;

        // Recoger el fichero de la peticion
        var image  = req.file;

        if(image){
       
            // Conseguir nombre y extension del archivo
            var file_path = image.path;
            var file_split = file_path.split('/');
            var file_name = file_split[2];
            var file_directory = file_split[0]+'/'+file_split[1]+'/';
            var ext_split = image.originalname.split('\.');
            var file_ext = ext_split[1];

            // Comprobar la extension de solo imagen
            if(file_ext== 'png' || file_ext== 'gif' || file_ext== 'jpeg' || file_ext== 'jpg'){
                
                // Si todo es valido
                // buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findById(
                    articleId, 
                    (err, articleFinded) => {
                        if(!articleFinded){
                            res.status(404).send({
                                status: 'error',
                                message: 'No existe el articulo !'
                            });
                        }else{
                            
                            var imagenAnterior = file_directory+articleFinded.image;
                            fs.unlink(imagenAnterior, (err) => {
                                if (err) throw err;
                                // console.log(imagenAnterior + ' was deleted');
                            });
                        }
                   }
                );
                Article.findByIdAndUpdate(
                    articleId, 
                    {image:file_name}, 
                    {new:true},
                    (err, articleUpdated) => {
                        if(!articleUpdated){
                            res.status(404).send({
                                status: 'error',
                                message: 'No se ha podido actualizar el articulo'
                            });
                        }else{
                            res.status(200).send({
                                status:  'success',
                                message: 'Imagen guardada Exitosamente !',
                                article: articleUpdated
                            });
                        }
                   }
                ); 
            }
            // si no lo es borrar el fichero.
            else{
                fs.unlink(file_path, (err) => {
                    res.status(500).send({
                        status: 'error',
                        message: 'Extension del archivo no valida'
                    });
                });
                
            }
          }else{
            res.status(404).send({
                status: 'error',
                message: 'No has subido ninguna imagen..'
            });
          }
          
 
    }

}; //end controller 

module.exports = controller;  