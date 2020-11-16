'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Task extends Model {

        static associate(models) {

            this.belongsTo(models.User);
        }
    };

    Task.init({
        name: DataTypes.STRING,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Task',
    });

    return Task;
};
