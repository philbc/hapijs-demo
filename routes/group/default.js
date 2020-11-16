
const Home = require('../../handlers/home');

module.exports = [
    {
        method: 'GET',
        config: { auth: false },
        path: '/',
        handler: Home.getLandingPage
    },
    {
        method: 'POST',
        config: { auth: false },
        path: '/login',
        handler: Home.login
    }
];
