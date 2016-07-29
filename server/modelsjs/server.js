var Srv;
(function (Srv) {
    var ServerType = (function () {
        function ServerType(name, desc, image) {
            this.name = name;
            this.desc = desc;
            this.image = image;
        }
        return ServerType;
    })();
    Srv.ServerType = ServerType;
    ;
    var Server = (function () {
        function Server(serverType, name, description, ip) {
            this.serverType = serverType;
            this.name = name;
            this.description = description;
            this.ip = ip;
        }
        return Server;
    })();
    Srv.Server = Server;
    var ServerRepository = (function () {
        function ServerRepository() {
        }
        ServerRepository.findAllServers = function () {
            var test = new ServerType("test", "Testni serveri svih vrsta", "blue.png");
            var prod = new ServerType("production", "Produkcioni server", "red.png");
            var arr = [];
            arr.push(new Server(test, "TEST2", "Produkcija od preključe", "102.10.21.11"));
            arr.push(new Server(prod, "PRODUKCIJA", "Produkcija", "102.10.212.111"));
            arr.push(new Server(test, "TEST1", "Testiranje kolaterala", "102.10.21.11"));
            arr.push(new Server(test, "TEST3", "Night bulid", "122.10.21.11"));
            return arr;
        };
        return ServerRepository;
    })();
    Srv.ServerRepository = ServerRepository;
})(Srv = exports.Srv || (exports.Srv = {}));
