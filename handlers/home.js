
const Boom = require('@hapi/boom');
const Jwt = require('@hapi/jwt');
const Config = require('../config/config');

const { Op } = require("sequelize");
const Bcrypt = require('bcrypt');

const lang = require('../lang/en');
const db = require('../models');
const User = db.User;

exports.login = async (request, h) => {

    const { username, password } = request.payload || {};

    if (!username || !password) {

        return Boom.badRequest(lang.errors.INVALID_CREDENTIALS);
    }

    return User.findAll({
        where: {
            username
        }
    })
    .then(data => {

        let user = data[0] || {},
            values = user.dataValues || {},
            id = values.id,
            userPassword = values.password || '',
            token;

        if (!Bcrypt.compareSync(password, userPassword)) {

            return Boom.badRequest(lang.errors.INVALID_CREDENTIALS);
        }

        token = Jwt.token.generate(
            values,
            Config.get('/jwtAuthOptions/key')
        );

        return h.response({
            id,
            username,
            token
        }).code(200);
    })
    .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
}

exports.getLandingPage = (request, h) => {

    return 'Welcome!';
};
