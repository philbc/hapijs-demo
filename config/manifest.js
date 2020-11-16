
const Confidence = require('confidence');
const Config = require('./config');

const map = {
    manifest : {
        $meta: "Manifest",
        server: {
            host: { "$env": "HOSTNAME" },
            port: { "$env": "PORT" },
            routes: {
                cors: true
            }
        },
        register: {
            plugins: [
                {
                    plugin: '@hapi/jwt',
                },
                {
                    plugin: require('../plugins/jwt-auth'),
                    options: Config.get('/jwtAuthOptions')
                }
            ]
        },
    }
};

map.store = new Confidence.Store(map.manifest);

exports.get = (key) => map.store.get(key);
