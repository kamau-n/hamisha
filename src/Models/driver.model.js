const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../Config/connection");

sequelizeConnection.define("Driver", {
    driver_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    driver_linsence_number: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
    },
    driver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})