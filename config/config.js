
const Confidence = require('confidence');

const map = {
    config: {
        $meta: 'Config',
        jwtAuthOptions: {
            key: { $env: "JWT_SECRET" }
        },
        db: {
            username: { "$env": "MYSQL_USERNAME" },
            password: { "$env": "MYSQL_PASSWORD" },
            database: { "$env": "MYSQL_DATABASE" },
            host: { "$env": "MYSQL_HOST" },
            dialect: "mysql"
        }
    }
};

map.store = new Confidence.Store(map.config);

exports.get = (key) => map.store.get(key);
