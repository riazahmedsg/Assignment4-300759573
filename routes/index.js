/* File name:           index.js
Student name:           Riaz Ahmed
Student Number          300759573
web site name:          Assignment4-300759573
file description:       contains Custom Javascript Code      */
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function (req, res, next) {
  res.render('content/index', {
    title: 'Home Page'
  });
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('content/contact', {
    title: 'Contact Page'
  });
});

/* GET project page. */
router.get('/project', function (req, res, next) {
  res.render('content/project', {
    title: 'Project Page'
  });
});



module.exports = router;