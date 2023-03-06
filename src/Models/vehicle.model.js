const { DataTypes, INET, INTEGER, Model } = require("sequelize");
const sequelizeConnection = require("../Config/connection");

const Vehicle = sequelizeConnection.define("Vehicle", {
    vihecle_capacity: {
        type: DataTypes.TEXT,
        allowNull: false

    },
    vehicle_license: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    }




})


module.exports = Vehicle;