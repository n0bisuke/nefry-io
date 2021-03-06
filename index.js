'use strict';

const EtherPortClient = require("etherport-client").EtherPortClient;
const Firmata = require("firmata");

class Nefry {
    constructor(host, port=3030){
        return new Firmata(new EtherPortClient({
            host: host,
            port: port
        }));
    }
}

module.exports = Nefry;