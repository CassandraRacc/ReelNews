const Sequelize = require('sequelize');

let database = 'reelnews';
let username = 'root';
let password = 'password';

const config = new Sequelize(database, username, password, {dialect:'mariadb'});

module.exports = config;