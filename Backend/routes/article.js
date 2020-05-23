'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

// rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);
router.get('/articulos/:last?', ArticleController.getArticles);
router.get('/articulo/:id', ArticleController.getArticle);
router.put('/articulo/:id', ArticleController.update);
router.delete('/articulo/:id', ArticleController.delete);

// rutas para articulos
router.post('/save', ArticleController.save);

module.exports = router;