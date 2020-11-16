'use strict';

const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let l = 5,
            i;

        for (i = 1; i <= l; i++) {

            await queryInterface.bulkInsert('Users', [{
                username: 'user' + i,
                password: bcrypt.hashSync('pass' + i, 10),
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
        }
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Users', null, {});
    }
};
