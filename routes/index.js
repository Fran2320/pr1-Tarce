var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', title2: 'TING', title3: 'Fran', title4: 'Felipe'});
});

module.exports = router;
