const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../Config/connection");




const Booking = sequelizeConnection.define('Booking', {

    booking_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    booking_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    booking_origin: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    booking_destination: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    booking_status: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    booking_service_service_id: {
        type: DataTypes.INTEGER,

        references: {
            model: "Services",
            key: "service_id"
        }
    },


    booking_user_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "user_id"
        }
    },
    // booking_vehicle_vehicle_id: {
    //     type: DataTypes.INTEGER,

    //     references: {
    //         model: "Vehicles",
    //         key: "vehicle_id"
    //     }
    // },



    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }








})







module.exports = Booking;