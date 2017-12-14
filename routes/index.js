var express = require('express');
var router = express.Router();

//get our data
let gods = require('../models/gods').gods

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { gods: gods });
});


//return router so we can use it in app.js
module.exports = router;
