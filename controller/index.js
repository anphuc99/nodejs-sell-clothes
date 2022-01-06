var express = require('express');
var router = express.Router()


/* GET */
router.get('/', function(req, res, next) {
  // Code here
  res.render('index', { title: 'Express' });
});

module.exports = router;
