var express = require('express');
var router = express.Router();

router.get('/payload', function(req, res, next) {
  res.render('payload', { domain: 'CHRISJPM: ', title: 'Payload', layout: 'layout.hbs' });
});

module.exports = router;
