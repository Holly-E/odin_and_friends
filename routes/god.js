var express = require('express');
var router = express.Router();
//get our data
let gods = require('../models/gods').gods
//let God = require('../models/gods').God


//create a function to figure out name t
function findGod(name) {
  //use the js function array.find()
  return gods.find(function(god) {
    return name == god.name
  })
}

/* GET listing by name of God. */
router.get('/:name', function(req, res, next) {
  var god = findGod(req.params.name)
  //renders god.hbs file
  res.render('god', { god: god });
});

module.exports = router;
