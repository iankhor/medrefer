var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      first_name : 'John',
      last_name: 'Doe'
  })
});

module.exports = router;
