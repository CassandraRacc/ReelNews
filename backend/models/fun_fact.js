const Sequelize = require('sequelize');
const config = require('./../config');

const FunFact = config.define('funfact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fun_fact: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    article_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },

}, {timestamps: false});

module.exports = FunFact;