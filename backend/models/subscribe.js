const Sequelize = require('sequelize');
const config = require('../config');

const Subscribe = config.define('subscribe', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
       
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true,

    },
    
   

}, {timestamps: false});

module.exports = Subscribe;