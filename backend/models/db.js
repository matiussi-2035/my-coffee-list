const { Sequelize, DataTypes } = require('sequelize');

//Creating database connection
const sequelize = new Sequelize('coffeelist', 'root', 'admin', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}
