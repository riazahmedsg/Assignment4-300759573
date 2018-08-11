var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('content/index', {
    title: 'Home Page'
  });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('content/about', {
    title: 'About Page'
  });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('content/contact', {
    title: 'Contact Page'
  });
});

module.exports = router;