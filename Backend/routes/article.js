'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');
// var multipart = require('connect-multiparty');
var router = express.Router();
// var multipartMiddleware = multipart({uploadDir:'./upload/articles'});
var multer = require('multer');
// var mulUpload = multer({dest:'./upload/articles'});
var crypto = require('crypto')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './upload/articles');
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + fileExtension);
    });
  }
});

var mul_upload = multer({dest: './upload/articles',storage});

// rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);
router.get('/articulos/:last?', ArticleController.getArticles);
router.get('/articulo/:id', ArticleController.getArticle);
router.put('/articulo/:id', ArticleController.update);
router.delete('/articulo/:id', ArticleController.delete);
router.post('/upload-image/:id', mul_upload.single('image'), ArticleController.uploadImage);

// rutas para articulos
router.post('/save', ArticleController.save);

module.exports = router;