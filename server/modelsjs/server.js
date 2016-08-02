"use strict";
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Srv;
(function (Srv) {
    var ServerType = (function () {
        function ServerType(name, desc, image) {
            this.name = name;
            this.desc = desc;
            this.image = image;
        }
        return ServerType;
    }());
    Srv.ServerType = ServerType;
    ;
    var Server = (function () {
        function Server(_id, serverType, name, description, ip) {
            this._id = _id;
            this.serverType = serverType;
            this.name = name;
            this.description = description;
            this.ip = ip;
        }
        return Server;
    }());
    Srv.Server = Server;
    var ServerRepository = (function () {
        function ServerRepository() {
            this.dbConnection = null;
        }
        ServerRepository.prototype.openDbConnection = function () {
            var _this = this;
            if (this.dbConnection === null) {
                MongoClient.connect(ServerRepository.mongo_url, function (err, db) {
                    assert.equal(null, err);
                    console.log(err);
                    console.log("Connected to mongo server");
                    console.log("db " + db);
                    _this.dbConnection = db;
                    console.log("******************************");
                    console.log("dbConnection " + _this.dbConnection);
                    console.log("******************************");
                });
            }
        };
        ServerRepository.prototype.closeDbConnection = function () {
            if (this.dbConnection !== null) {
                MongoClient.close();
            }
        };
        ServerRepository.prototype.insertServer = function (server) {
            this.dbConnection.collection('servers').insertOne(server, function (err, result) {
                assert.equal(err, null);
                return result;
            });
        };
        ServerRepository.prototype.addServers = function () {
            var test = new ServerType("test", "Testni serveri svih vrsta", "blue.png");
            var prod = new ServerType("production", "Produkcioni server", "red.pnxg");
            var arr = [];
            arr.push(new Server(test, "TEST2", "Produkcija od preključe", "102.10.21.11"));
            arr.push(new Server(prod, "PRODUKCIJA", "Produkcija", "102.10.212.111"));
            arr.push(new Server(test, "TEST1", "Testiranje kolaterala", "102.10.21.11"));
            arr.push(new Server(test, "TEST3", "Night bulid", "122.10.21.11"));
            var rep = new ServerRepository();
            return this.insertServer(arr[0]);
        };
        ServerRepository.prototype.findAllServers = function () {
            console.log("***************SSSSSSSSS***************");
            console.log(this.dbConnection.collection('servers'));
            console.log("*************SSSSSS*****************");
            var col = this.dbConnection.collection('servers');
            return col.find({});
        };
        ServerRepository.mongo_url = 'mongodb://localhost:27017/biltens';
        return ServerRepository;
    }());
    Srv.ServerRepository = ServerRepository;
})(Srv = exports.Srv || (exports.Srv = {}));
