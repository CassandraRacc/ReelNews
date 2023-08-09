const Sequelize = require('sequelize');
const config = require('./../config');

const Article = config.define('article', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
       
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    date_posted: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    good_or_bad: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   

}, {timestamps: false});

module.exports = Article;