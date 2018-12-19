var express=require('express');

var path=require('path');

var bodyParser=require('body-parser');

console.log("app.js");

var app=express();

var server = app.listen(3000, function () { var host = server.address().address
    var port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port)
   
  })
  app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,  Authorization,Accept");
    res.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.use('/',require('./routes'));


module.exports=app;