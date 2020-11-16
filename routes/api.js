
const Hoek = require('@hapi/hoek')

const task = require('./group/task');
const home = require('./group/default');

module.exports = Hoek.merge(
    home,
    task
);
