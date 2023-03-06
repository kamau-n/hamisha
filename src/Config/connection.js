const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelizeConnection = new Sequelize('hamisha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,



});


module.exports = sequelizeConnection;