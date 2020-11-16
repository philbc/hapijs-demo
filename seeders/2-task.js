'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        let getRandomUser = (min, max) => Math.random() * (max - min) + min;

        let l = 10,
            i;

        for (i = 1; i <= l; i++) {

            await queryInterface.bulkInsert('Tasks', [{
                name: 'A' + i,
                userId: getRandomUser(1, 5),
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
        }
    },

    down: async (queryInterface, Sequelize) => {

         await queryInterface.bulkDelete('Tasks', null, {});
    }
};
