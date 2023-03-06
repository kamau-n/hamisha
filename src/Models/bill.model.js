const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../Config/connection");



const Bill = sequelizeConnection.define('Bill', {

    bill_cost_of_service: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    bill_taxes: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    bill_additional_cost: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    bill_total_bill: {
        type: DataTypes.BIGINT,
        allowNull: false

    },
    bill_booking_booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {

            model: "Bookings",
            key: "booking_id"
        }

    },

    bill_user_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {

            model: "Users",
            key: "user_id"
        }

    },

    bill_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }






})




module.exports = Bill;