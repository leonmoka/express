var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setLocale(req.cookies.i18n);
  res.render('index', {
    i18n: res,
    title: 'Express'
  });
});

router.get('/it', function (req, res) {
  res.cookie('i18n', 'it');
  res.redirect('/');
});

router.get('/en', function (req, res) {
  res.cookie('i18n', 'en');
  res.redirect('/');
});

module.exports = router;
