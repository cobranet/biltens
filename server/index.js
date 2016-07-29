var express = require("express");
var app = express();
var srv = require("./modelsjs/server");
app.get('/',function(req,res){
    res.send("Welcome to express!");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/servers',function(req,res){
    console.log(req);
    var servers = srv.Srv.ServerRepository.findAllServers();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(servers));
});

app.listen(3000);

	
