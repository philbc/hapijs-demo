
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const Task = require('../../handlers/tasks')

async function checkOwner(values, options) {

    const ctx = options.context,
            auth = ctx.auth,
            { id } = auth.credentials;

    if (values.user_id != id) {

        throw Boom.unauthorized();
    }
}

module.exports = [

    {
        method: 'POST',
        path: '/api/users/{user_id}/tasks',
        options: {
            validate: {
                params: checkOwner,
                payload: Joi.object({
                    name: Joi.string().required().min(2).max(50)
                })
            },
        },
        handler: Task.create
    },
    {
        method: 'GET',
        path: '/api/users/{user_id}/tasks',
        options: {
            validate: { params: checkOwner },
        },
        handler: Task.getAll
    },
    {
        method: 'GET',
        path: '/api/users/{user_id}/tasks/{task_id}',
        options: {
            validate: { params: checkOwner },
        },
        handler: Task.getById
    },
    {
        method: 'PUT',
        path: '/api/users/{user_id}/tasks/{task_id}',
        options: {
            validate: {
                params: checkOwner,
                payload: Joi.object({
                    name: Joi.string().required().min(2).max(50)
                })
            },
        },
        handler: Task.update
    },
    {
        method: 'DELETE',
        path: '/api/users/{user_id}/tasks/{task_id}',
        options: {
            validate: { params: checkOwner },
        },
        handler: Task.delete
    },
];
