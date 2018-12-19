var express = require('express');
var router = express.Router();
console.log("index.js");

var user = require('./user');

router.post('/api/user/create',user.createUser);
router.get('/api/user',user.getUser);

module.exports=router;