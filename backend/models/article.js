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
    category_id: {
        type: Sequelize.INTEGER,
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
    feel_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   

}, {timestamps: false});

module.exports = Article;