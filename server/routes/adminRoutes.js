/*global module*/
var express = require('express');
var srv = require("../modelsjs/server");
var rep = new srv.Srv.ServerRepository();
rep.openDbConnection();
var adminRouter = express.Router();
var router  = function(){
    adminRouter.route('/addServers').get(function(req,res){
	console.log(srv);
	
	var result = rep.addServers();
	res.send(result);
    });
    return adminRouter;
};

module.exports = router;
