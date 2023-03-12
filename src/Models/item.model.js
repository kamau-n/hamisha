const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../Config/connection");
const Booking = require("./bookings.model");


const Items = sequelizeConnection.define("Items", {
    item_quantity: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    item_name: {
        type: DataTypes.TEXT,
        allowNull: false

    },
    item_weight: {
        type: DataTypes.TEXT,
        allowNull: false

    },

    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true

    },
    item_booking_booking_id: {
        type: DataTypes.INTEGER,

        references: {
            model: "Bookings",
            key: "booking_id"
        }

    }





})



module.exports = Items;