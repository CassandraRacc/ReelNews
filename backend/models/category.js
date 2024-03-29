const Sequelize = require('sequelize');
const config = require('./../config');

const Category = config.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  

}, {timestamps: false});

module.exports = Category;