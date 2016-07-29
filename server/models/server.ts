export module Srv {
    export class ServerType {
        constructor(public name: String,
            public desc: String,
            public image: String
        ) {
        }
    };

    export class Server {

        constructor(
            public serverType: ServerType,
            public name: String,
            public description: String,
            public ip: String
        ) {
        }

    }

    export class ServerRepository {
        public static findAllServers() {
            var test = new ServerType("test", "Testni serveri svih vrsta", "blue.png");
            var prod = new ServerType("production", "Produkcioni server", "red.png");
            var arr = [];
            arr.push(new Server(test, "TEST2", "Produkcija od preključe", "102.10.21.11"));
            arr.push(new Server(prod, "PRODUKCIJA", "Produkcija", "102.10.212.111"));
            arr.push(new Server(test, "TEST1", "Testiranje kolaterala", "102.10.21.11"));
            arr.push(new Server(test, "TEST3", "Night bulid", "122.10.21.11"));
            return arr;
        }

    }
}
