'use strict';

var express = require('express');
var controller = require('./accedotv.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);


module.exports = router;
