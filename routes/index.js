var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/saludo', function(req, res, next) {
  res.render('pepe', { saludo: 'Buen día', nombre: 'Pepito' });
});

router.get('/meli', function(req, res, next) {
  res.render('meli', { title: 'MELI' });
});


module.exports = router;
