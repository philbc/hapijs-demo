
const Boom = require('@hapi/boom');

const db = require('../models');
const lang = require('../lang/en');

const Task = db.Task;
const { Op } = require("sequelize");

exports.create = (request, h) => {

    const auth = request.auth,
            { id } = auth.credentials,
            payload = request.payload;

    payload.userId = id;

    return Task.create(payload)
        .then((data) => h.response(data).code(200))
        .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
};

exports.getAll = (request, h) => {

    const { user_id } = request.params;

    return Task.findAll({
        where: { userId: user_id }
    })
    .then((data) => h.response(data).code(200))
    .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
};

exports.getById = (request, h) => {

    const { user_id, task_id } = request.params;

    return Task.findByPk(task_id)
        .then(data => {

            if (!data) {

                return Boom.badRequest();
            }

            return h.response(data).code(200);
        })
        .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
};

exports.update = async (request, h) => {

    const { user_id, task_id } = request.params;
    const task = await Task.findByPk(task_id);

    if (!task) {

         return Boom.badRequest();
    }

    return Task.update(request.payload, {
            where: { id: task_id }
        })
        .then(result => {

            let msg = result ?
                lang.app.SUCCESSFUL_UPDATE :
                lang.app.UNSUCCESSFUL_UPDATE;

            return h.response({ message: msg }).code(200);
        })
        .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
};

exports.delete = async (request, h) => {

    const { user_id, task_id } = request.params;
    const task = await Task.findByPk(task_id);

    if (!task) {

         return Boom.badRequest();
    }
    
    return Task.destroy({
            where: { id: task_id }
        })
        .then(result => {

            let msg = result ?
                lang.app.SUCCESSFUL_DELETE :
                lang.app.UNSUCCESSFUL_DELETE;

            return h.response({ message: msg }).code(200);
        })
        .catch(err => Boom.badImplementation(lang.errors.GENERIC_ERROR));
};
