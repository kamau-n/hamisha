const { Sequelize, DataTypes } = require('sequelize')
const sequelizeConnection = require('../Config/connection');
// const Booking = require('./bookings.model');
// const Bill = require('./bill.model');
const Users = sequelizeConnection.define('Users', {


    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_contact: {
        type: DataTypes.TEXT,
        allowNull: false,

    },


    user_password: {
        type: DataTypes.TEXT,
        allowNull: false,

    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }





});

// User.hasMany(Booking)
// Booking.belongsTo(User)

// User.hasMany(Bill)
// Bill.belongsTo(User)



module.exports = Users;