var express = require("express");
var app = express();
var srv = require("./modelsjs/server.js");
var rep = new srv.Srv.ServerRepository();
var nav = null;
var adminRouter = require('./routes/adminRoutes.js')(nav);


app.use('/Admin',adminRouter);

rep.openDbConnection();

app.get('/',function(req,res){
    res.send("Welcome to express!");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/servers',function(req,res){
    var servers = rep.findAllServers();
    console.log(servers);
    res.setHeader('Content-Type', 'application/json');
    res.send(servers);
});

app.listen(3000);

	
