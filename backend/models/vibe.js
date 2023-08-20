const Sequelize = require('sequelize');
const config = require('./../config');

const Vibe = config.define('vibe', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feel: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  

}, {timestamps: false});

module.exports = Vibe;