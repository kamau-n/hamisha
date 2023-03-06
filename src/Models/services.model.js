const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../Config/connection");
const Booking = require("./bookings.model");



const Services = sequelizeConnection.define("Services", {
    service_type: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    service_charge: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    service_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    }

})

// Services.hasMany(Booking);
// Booking.belongsTo(Services)

module.exports = Services;