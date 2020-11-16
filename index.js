
const Hapi = require('@hapi/hapi');
const Glue = require('@hapi/glue');

const routes = require('./routes/api');
const dotenv = require('dotenv');
dotenv.config();

const Manifest = require('./config/manifest');

const options = {
    relativeTo: __dirname
};

const startServer = async () => {

    try {

        const server = await Glue.compose(Manifest.get('/'), options)

        server.route(routes);

        await server.start();

        console.log('Server running at %s', server.info.uri)
    } catch (err) {

        console.error(err);
        process.exit(1);
    }
};

startServer();
