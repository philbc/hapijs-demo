'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class User extends Model {

        static associate(models) {

            this.hasMany(models.Task);
        }
    };

    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};
